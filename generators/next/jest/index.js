"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        this.helpers.copy(['.babelrc', 'jest.config.js']);
        this.helpers.copyTpl('index.test.ejs', 'src/pages/index.test', this.options.features, { jsx: true });
    }
    installing() {
        const tsDependencies = this.options.features.ts
            ? ['@types/jest', 'ts-jest']
            : [];
        this.yarnInstall([
            '@testing-library/jest-dom',
            '@testing-library/react',
            'babel-jest',
            'jest',
            'jest-dom',
            ...tsDependencies
        ], { dev: true });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map