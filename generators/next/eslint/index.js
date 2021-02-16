"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        this.helpers.copyTpl('.eslintrc.ejs', '.eslintrc', this.options.features);
        this.fs.copy(this.templatePath('.prettierrc'), this.destinationPath('.prettierrc'));
        this.fs.copy(this.templatePath('.vscode'), this.destinationPath('.vscode'));
    }
    install() {
        const tsDependencies = this.options.features.ts
            ? ['@typescript-eslint/eslint-plugin', '@typescript-eslint/parser']
            : [];
        this.yarnInstall([
            ...tsDependencies,
            'eslint',
            'eslint-config-prettier',
            'eslint-plugin-prettier',
            'eslint-plugin-react',
            'eslint-plugin-import',
            'eslint-plugin-react-hooks',
            'prettier'
        ], { dev: true });
        this.spawnCommand('code', ['--install-extension', 'dbaeumer.vscode-eslint']);
        this.spawnCommand('code', ['--install-extension', 'esbenp.prettier-vscode']);
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map