import { getOperandsCount, getOperatorPriority, isFunctionName, isPostfixOperator, Operators } from "./operators";

describe("Binary operators", () => {
    test("+", () => {
        expect(Operators[2]["+"]([3, 4])).toEqual(7);
    });
    test("-", () => {
        expect(Operators[2]["-"]([3, 4])).toEqual(-1);
    });
    test("*", () => {
        expect(Operators[2]["*"]([3, 4])).toEqual(12);
    });
    test("/", () => {
        expect(Operators[2]["/"]([12, 4])).toEqual(3);
    });
    test("^", () => {
        expect(Operators[2]["^"]([2, 4])).toEqual(16);
    });
});

describe("Unary operators", () => {
    test("**", () => {
        expect(Operators[1]["**"]([4])).toEqual(16);
    });
    test("!", () => {
        expect(Operators[1]["!"]([3])).toEqual(6);
    });
    test("sin", () => {
        expect(Operators[1]["sin"]([60])).toEqual(Math.sin((60 * Math.PI) / 180));
    });
    test("cos", () => {
        expect(Operators[1]["cos"]([60])).toEqual(Math.cos((60 * Math.PI) / 180));
    });
});

describe("getOperatorPriority", () => {
    test("^", () => {
        expect(getOperatorPriority("^")).toEqual(0);
    });
    test("*", () => {
        expect(getOperatorPriority("*")).toEqual(1);
    });
    test("/", () => {
        expect(getOperatorPriority("/")).toEqual(1);
    });
    test("+", () => {
        expect(getOperatorPriority("+")).toEqual(2);
    });
    test("-", () => {
        expect(getOperatorPriority("-")).toEqual(2);
    });
});

describe("getOperandsCount", () => {
    test("^", () => {
        expect(getOperandsCount("^")).toEqual(2);
    });
    test("*", () => {
        expect(getOperandsCount("*")).toEqual(2);
    });
    test("/", () => {
        expect(getOperandsCount("/")).toEqual(2);
    });
    test("+", () => {
        expect(getOperandsCount("+")).toEqual(2);
    });
    test("-", () => {
        expect(getOperandsCount("-")).toEqual(2);
    });
    test("sin", () => {
        expect(getOperandsCount("sin")).toEqual(1);
    });
    test("**", () => {
        expect(getOperandsCount("**")).toEqual(1);
    });
    test("!", () => {
        expect(getOperandsCount("!")).toEqual(1);
    });
});

describe("isFunctionName", () => {
    test("^", () => {
        expect(isFunctionName("^")).toEqual(false);
    });
    test("sin", () => {
        expect(isFunctionName("sin")).toEqual(true);
    });
});

describe("isPostfixOperator", () => {
    test("^", () => {
        expect(isPostfixOperator("^")).toEqual(false);
    });
    test("sin", () => {
        expect(isPostfixOperator("!")).toEqual(true);
    });
});
