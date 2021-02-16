"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        if (this.options.features.ts) {
            this.helpers.copyTpl('types/env.ejs', 'src/types/env.d.ts');
        }
        this.copyDestination(this.templatePath('.*'), this.destinationPath());
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map