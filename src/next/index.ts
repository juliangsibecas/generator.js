import Generator from "yeoman-generator";
import { CustomGenerator, Helpers } from "../utils/CustomGenerator";

type Features = "ts" | "env" | "api";

// interface JavascriptTplOptions {
//   jsx?: boolean;
// }

interface ExtendedHelpers extends Helpers {
  features: {
    [K in Features]?: boolean;
  };
}

export default class extends CustomGenerator {
  helpers: ExtendedHelpers;

  constructor(args: string | string[], opts: Generator.GeneratorOptions) {
    super(args, opts);

    this.helpers.features = {
      ts: false,
      env: false,
      api: false,
    };
  }

  async prompting() {
    const answers = await this.prompt([
      {
        type: "checkbox",
        name: "features",
        message: "What features do you want?",
        choices: [
          {
            name: "ts",
            checked: true,
          },
          {
            name: "env",
            checked: true,
          },
          {
            name: "api",
            checked: false,
          },
        ],
      },
    ]);

    this.helpers.features = {
      ...this.helpers.features,
      ...this.helpers.formatFeatures(answers.features),
    };
  }

  async initializing() {
    await this.spawnCommandSync("yarn", ["init", "-y"]);
  }

  async writing() {
    this.helpers.copyTpl(
      "pages/app.ejs",
      "src/pages/_app",
      this.helpers.features,
      { jsx: true }
    );
    this.helpers.copyTpl(
      "pages/index.ejs",
      "src/pages/index",
      this.helpers.features,
      { jsx: true }
    );

    if (this.helpers.features.env) {
      this.composeWith(require.resolve("./env"));
    }

    if (this.helpers.features.api) {
      this.helpers.copyTpl(
        "pages/api/index.ejs",
        "src/pages/api/index",
        this.helpers.features
      );
    }
  }

  install() {
    this.yarnInstall([
      "typescript",
      "next",
      "react",
      "react-dom",
      "@types/node",
      "@types/next",
      "@types/react",
      "@types/react-dom",
    ]);
  }

  end() {
    this.helpers.extendsJSON("package.json", {
      scripts: {
        dev: "next dev",
        build: "next build",
        start: "next start",
      },
    });
  }
}
