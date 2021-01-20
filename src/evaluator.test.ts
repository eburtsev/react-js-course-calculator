import { evaluateExpression } from "./evaluator";

describe("rpn tests", () => {
    test("1 + 2", () => {
        expect(evaluateExpression("1 + 2")).toEqual(3);
    });
    test("1 + 2 * 3", () => {
        expect(evaluateExpression("1 + 2 * 3")).toEqual(7);
    });
    test("(1 + 2) * 3", () => {
        expect(evaluateExpression("(1 + 2) * 3")).toEqual(9);
    });
    test("3 + 4 * 2 / (1 - 5) ^ 2", () => {
        expect(evaluateExpression("3 + 4 * 2 / (1 - 5) ^ 2")).toEqual(3.5);
    });
    test("1 + sin(60)", () => {
        expect(evaluateExpression("1 + sin(30)")).toEqual(1.5);
    });
    test("1 + sin(3 * 10)", () => {
        expect(evaluateExpression("1 + sin(3 * 10)")).toEqual(1.5);
    });
    test("5** + 3", () => {
        expect(evaluateExpression("5** + 3")).toEqual(28);
    });
    test("5!", () => {
        expect(evaluateExpression("5!")).toEqual(120);
    });
});
