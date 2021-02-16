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
const CustomGenerator_1 = require("./utils/CustomGenerator");
class default_1 extends CustomGenerator_1.CustomGenerator {
    constructor(args, opts) {
        super(args, opts);
        this.helpers.features = {
            ts: false,
            jest: false,
            eslint: false,
            env: false,
            api: false,
            chakra: false
        };
    }
    prompting() {
        return __awaiter(this, void 0, void 0, function* () {
            const answers = yield this.prompt([
                {
                    type: 'checkbox',
                    name: 'features',
                    message: 'What features do you want?',
                    choices: [
                        {
                            name: 'ts',
                            checked: true
                        },
                        {
                            name: 'eslint',
                            checked: true
                        },
                        {
                            name: 'jest',
                            checked: true
                        },
                        {
                            name: 'env',
                            checked: true
                        },
                        {
                            name: 'chakra',
                            checked: true
                        },
                        {
                            name: 'api',
                            checked: false
                        }
                    ]
                }
            ]);
            this.helpers.features = Object.assign(Object.assign({}, this.helpers.features), this.helpers.formatFeatures(answers.features));
            this.composeWith(require.resolve('./core'), {
                features: this.helpers.features
            });
            if (this.helpers.features.ts) {
                this.composeWith(require.resolve('./ts'));
            }
            if (this.helpers.features.eslint) {
                this.composeWith(require.resolve('./eslint'), {
                    features: this.helpers.features
                });
            }
            if (this.helpers.features.jest) {
                this.composeWith(require.resolve('./jest'), {
                    features: this.helpers.features
                });
            }
            if (this.helpers.features.env) {
                this.composeWith(require.resolve('./env'), {
                    features: this.helpers.features
                });
            }
            if (this.helpers.features.chakra) {
                this.composeWith(require.resolve('./chakra'), {
                    features: this.helpers.features
                });
            }
            if (this.helpers.features.api) {
                this.composeWith(require.resolve('./api'), {
                    features: this.helpers.features
                });
            }
        });
    }
}
exports.default = default_1;
//# sourceMappingURL=index.js.map