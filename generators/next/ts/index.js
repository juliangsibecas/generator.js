"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CustomGenerator_1 = require("../utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    writing() {
        this.copyDestination(this.templatePath('tsconfig.json'), this.destinationPath('tsconfig.json'));
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map