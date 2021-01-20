import { rpn } from "./rpn";

describe("rpn tests", () => {
    test("1 + 2", () => {
        expect(rpn([1, "+", 2])).toEqual([1, 2, "+"]);
    });
    test("1 + 2 * 3", () => {
        expect(rpn([1, "+", 2, "*", 3])).toEqual([1, 2, 3, "*", "+"]);
    });
    test("(1 + 2) * 3", () => {
        expect(rpn(["(", 1, "+", 2, ")", "*", 3])).toEqual([1, 2, "+", 3, "*"]);
    });
    test("3 + 4 * 2 / (1 - 5) ^ 2", () => {
        expect(rpn([3, "+", 4, "*", 2, "/", "(", 1, "-", 5, ")", "^", 2])).toEqual([3, 4, 2, "*", 1, 5, "-", 2, "^", "/", "+"]);
    });
    test("sin(30)", () => {
        expect(rpn(["sin", "(", 30, ")"])).toEqual([30, "sin"]);
    });
    test("1 + sin(30)", () => {
        expect(rpn([1, "+", "sin", "(", 30, ")"])).toEqual([1, 30, "sin", "+"]);
    });
});
