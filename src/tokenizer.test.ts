import { tokenize } from "./tokenizer";

describe("tokenize tests", () => {
    test("1 + 2", () => {
        expect(tokenize("1 + 2")).toEqual([1, "+", 2]);
    });
    test("(1 + 2) * 34", () => {
        expect(tokenize("(1 + 2) * 34")).toEqual(["(", 1, "+", 2, ")", "*", 34]);
    });
    test("(1 + 2) * sin(45)", () => {
        expect(tokenize("(1 + 2) * sin(45)")).toEqual(["(", 1, "+", 2, ")", "*", "sin", "(", 45, ")"]);
    });
    test("(1.4 + 2.1) * sin(45.3)", () => {
        expect(tokenize("(1.4 + 2.1) * sin(45.3)")).toEqual(["(", 1.4, "+", 2.1, ")", "*", "sin", "(", 45.3, ")"]);
    });
    test("2**", () => {
        expect(tokenize("2**")).toEqual([2, "**"]);
    });
    test("2.5** * sin(45.3)", () => {
        expect(tokenize("2.5 ** * sin(45.3)")).toEqual([2.5, "**", "*", "sin", "(", 45.3, ")"]);
    });
    test("2 ^ 4", () => {
        expect(tokenize("2 ^ 4")).toEqual([2, "^", 4]);
    });
    test("2!", () => {
        expect(tokenize("2!")).toEqual([2, "!"]);
    });
});
