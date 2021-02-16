"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        this.helpers.copyTpl('theme.ejs', 'src/theme/index', this.options.features, { ext: true });
    }
    installing() {
        this.yarnInstall([
            '@chakra-ui/react',
            '@chakra-ui/theme-tools',
            '@emotion/react',
            '@emotion/styled',
            'framer-motion'
        ]);
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map