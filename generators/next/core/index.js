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
    initializing() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.spawnCommandSync('yarn', ['init', '-y']);
        });
    }
    writing() {
        return __awaiter(this, void 0, void 0, function* () {
            this.helpers.copyTpl('pages/app.ejs', 'src/pages/_app', this.options.features, { jsx: true });
            this.helpers.copyTpl('pages/index.ejs', 'src/pages/index', this.options.features, { jsx: true });
        });
    }
    install() {
        const tsDependencies = this.options.features.ts
            ? ['typescript', '@types/node', '@types/react', '@types/react-dom']
            : [];
        this.yarnInstall([...tsDependencies, 'next', 'react', 'react-dom']);
    }
    end() {
        const pkg = {
            scripts: {
                dev: 'next dev',
                build: 'next build',
                start: 'next start'
            }
        };
        if (this.options.features.jest) {
            pkg.scripts.test = 'jest';
        }
        this.helpers.extendsJSON('package.json', pkg);
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map