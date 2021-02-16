"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        this.helpers.copyTpl('index.ejs', 'src/pages/api/index', this.options.features, { ext: true });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map