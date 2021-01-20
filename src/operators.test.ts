import { getOperandsCount, getOperatorPriority, isFunctionName, isPostfixOperator, Operators } from "./operators";

describe("Binary operators", () => {
    test("+", () => {
        expect(Operators.get("+").eval.apply(this, [3, 4])).toEqual(7);
    });
    test("-", () => {
        expect(Operators.get("-").eval.apply(this, [3, 4])).toEqual(-1);
    });
    test("*", () => {
        expect(Operators.get("*").eval.apply(this, [3, 4])).toEqual(12);
    });
    test("/", () => {
        expect(Operators.get("/").eval.apply(this, [12, 4])).toEqual(3);
    });
    test("^", () => {
        expect(Operators.get("^").eval.apply(this, [2, 4])).toEqual(16);
    });
});

describe("Unary operators", () => {
    test("**", () => {
        expect(Operators.get("**").eval.apply(this, [4])).toEqual(16);
    });
    test("!", () => {
        expect(Operators.get("!").eval.apply(this, [3])).toEqual(6);
    });
    test("sin", () => {
        expect(Operators.get("sin").eval.apply(this, [60])).toEqual(Math.sin((60 * Math.PI) / 180));
    });
    test("cos", () => {
        expect(Operators.get("cos").eval.apply(this, [60])).toEqual(Math.cos((60 * Math.PI) / 180));
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
