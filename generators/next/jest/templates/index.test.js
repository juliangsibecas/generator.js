"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("@testing-library/react");
const index_1 = __importDefault(require("./index"));
describe('Example test', () => {
    test('it renders', () => {
        const { getByText } = react_2.render(<index_1.default />);
        const el = getByText('Template by juliangsibecas');
        expect(el).toBeInTheDocument();
    });
});
//# sourceMappingURL=index.test.js.map