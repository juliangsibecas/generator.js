"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("src/utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        this.fs.copy(this.templatePath('.*'), this.destinationPath(''));
    }
    install() {
        this.yarnInstall([
            '@typescript-eslint/eslint-plugin',
            '@typescript-eslint/parser',
            'eslint',
            'eslint-config-prettier',
            'eslint-plugin-prettier',
            'eslint-plugin-react',
            'eslint-plugin-import',
            'eslint-plugin-react-hooks',
            'prettier'
        ], { dev: true });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map