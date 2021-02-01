import Generator from "yeoman-generator";
import fs from "fs";

export interface Helpers {
  formatFeatures: (features: any[]) => object;
  getFileExt: (ts: boolean, jsx: boolean) => "tsx" | "jsx" | "ts" | "js";
  copyTpl: (
    tplPath: string,
    destPath: string,
    features?: any,
    opts?: any
  ) => void;
  yarnInstallSync: (packages: string[]) => any;
  extendsJSON: (filePath: string, json: object) => void;
}

export class CustomGenerator extends Generator {
  helpers: Helpers;

  constructor(args: string | string[], opts: Generator.GeneratorOptions) {
    super(args, opts);

    this.helpers = {
      formatFeatures: (features: string[]) => {
        const obj: {
          [key: string]: boolean;
        } = {};

        features.forEach((feature) => (obj[feature] = true));

        return obj;
      },
      getFileExt: (ts: boolean, jsx: boolean) => {
        return jsx ? (ts ? "tsx" : "jsx") : ts ? "ts" : "js";
      },

      copyTpl: (
        tplPath: string,
        destPath: string,
        features: any = {},
        opts: any = {}
      ) => {
        if (!opts) opts = {};

        console.log(features);

        this.fs.copyTpl(
          this.templatePath(tplPath),
          `${this.destinationPath(destPath)}.${
            destPath.includes(".")
              ? destPath
              : this.helpers.getFileExt(Boolean(features.ts), Boolean(opts.jsx))
          }`,
          features
        );
      },

      yarnInstallSync: (packages: string[]) => {
        return this.spawnCommandSync("yarn", ["add", ...packages]);
      },

      extendsJSON: (filePath: string, json: object) => {
        const jsonStr = fs.readFileSync(
          this.destinationPath(filePath),
          "utf-8"
        );

        fs.writeFileSync(
          this.destinationPath("package.json"),
          JSON.stringify(
            {
              ...JSON.parse(jsonStr),
              ...json,
            },
            null,
            2
          )
        );
      },
    };
  }
}
