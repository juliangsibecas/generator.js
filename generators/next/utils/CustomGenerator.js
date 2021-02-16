"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomGenerator = void 0;
const fs_1 = __importDefault(require("fs"));
const yeoman_generator_1 = __importDefault(require("yeoman-generator"));
class CustomGenerator extends yeoman_generator_1.default {
    constructor(args, opts) {
        super(args, opts);
        this.helpers = {
            formatFeatures: (features) => {
                const obj = {};
                features.forEach((feature) => (obj[feature] = true));
                return obj;
            },
            getFileExt: (ts, jsx) => {
                return jsx ? (ts ? 'tsx' : 'jsx') : ts ? 'ts' : 'js';
            },
            copy: (paths) => {
                if (Array.isArray(paths)) {
                    paths.forEach((path) => this.fs.copy(this.templatePath(path), this.destinationPath(path)));
                    return;
                }
                this.fs.copy(this.templatePath(paths), this.destinationPath(paths));
            },
            copyTpl: (from, dest, features = {}, opts = {}) => {
                if (!opts)
                    opts = {};
                this.fs.copyTpl(this.templatePath(from), this.destinationPath(!opts.jsx && !opts.ext
                    ? dest
                    : `${dest}.${this.helpers.getFileExt(Boolean(features.ts), Boolean(opts.jsx))}`), features);
            },
            yarnInstallSync: (packages) => {
                return this.spawnCommandSync('yarn', ['add', ...packages]);
            },
            extendsJSON: (filePath, json) => {
                const jsonStr = fs_1.default.readFileSync(this.destinationPath(filePath), 'utf-8');
                fs_1.default.writeFileSync(this.destinationPath('package.json'), JSON.stringify(Object.assign(Object.assign({}, JSON.parse(jsonStr)), json), null, 2));
            }
        };
    }
}
exports.CustomGenerator = CustomGenerator;
//# sourceMappingURL=CustomGenerator.js.map