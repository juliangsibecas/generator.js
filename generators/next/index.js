"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    constructor(args, opts) {
        super(args, opts);
        this.helpers.features = {
            ts: false,
            env: false,
            api: false,
        };
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            const answers = yield this.prompt([
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
            this.helpers.features = Object.assign(Object.assign({}, this.helpers.features), this.helpers.formatFeatures(answers.features));
        });
    }
    initializing() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.spawnCommandSync("yarn", ["init", "-y"]);
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            this.helpers.copyTpl("pages/app.ejs", "src/pages/_app", this.helpers.features, { jsx: true });
            this.helpers.copyTpl("pages/index.ejs", "src/pages/index", this.helpers.features, { jsx: true });
            if (this.helpers.features.env) {
                this.composeWith(require.resolve("./env"));
            }
            if (this.helpers.features.api) {
                this.helpers.copyTpl("pages/api/index.ejs", "src/pages/api/index", this.helpers.features);
            }
        });
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
exports.default = default_1;
//# sourceMappingURL=index.js.map