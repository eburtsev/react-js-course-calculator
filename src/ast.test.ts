import { rpn } from "./rpn";
import { buildAST, executeAST, NonTerminalNode, TerminalNode } from "./ast";

describe("ASTNode tests", () => {
    test("terminal node", () => {
        expect(new TerminalNode(1)).toEqual({ value: 1 });
    });

    test("non terminal node", () => {
        expect(new NonTerminalNode("+", [new TerminalNode(1), new TerminalNode(3)])).toEqual({
            op: "+",
            children: [{ value: 1 }, { value: 3 }],
        });
    });
});

describe("rpn to AST tests", () => {
    test("empty", () => {
        expect(buildAST([])).toEqual(null);
    });
    test("1 + 2", () => {
        expect(buildAST(rpn([1, "+", 2]))).toEqual(new NonTerminalNode("+", [new TerminalNode(1), new TerminalNode(2)]));
    });
    test("1 + 2 * 3", () => {
        expect(buildAST(rpn([1, "+", 2, "*", 3]))).toEqual(
            new NonTerminalNode("+", [new TerminalNode(1), new NonTerminalNode("*", [new TerminalNode(2), new TerminalNode(3)])])
        );
    });
    test("(1 + 2) * 3", () => {
        expect(buildAST(rpn(["(", 1, "+", 2, ")", "*", 3]))).toEqual(
            new NonTerminalNode("*", [new NonTerminalNode("+", [new TerminalNode(1), new TerminalNode(2)]), new TerminalNode(3)])
        );
    });
    test("3 + 4 * 2 / (1 - 5) ^ 2", () => {
        expect(buildAST(rpn([3, "+", 4, "*", 2, "/", "(", 1, "-", 5, ")", "^", 2]))).toEqual(
            new NonTerminalNode("+", [
                new TerminalNode(3),
                new NonTerminalNode("/", [
                    new NonTerminalNode("*", [new TerminalNode(4), new TerminalNode(2)]),
                    new NonTerminalNode("^", [new NonTerminalNode("-", [new TerminalNode(1), new TerminalNode(5)]), new TerminalNode(2)]),
                ]),
            ])
        );
    });
    test("1 + sin(60)", () => {
        expect(buildAST(rpn([1, "+", "sin", "(", 30, ")"]))).toEqual(
            new NonTerminalNode("+", [new TerminalNode(1), new NonTerminalNode("sin", [new TerminalNode(30)])])
        );
    });
});

describe("execute tests", () => {
    test("terminal node", () => {
        expect(executeAST(new TerminalNode(123))).toEqual(123);
    });

    test("1 + 3", () => {
        expect(executeAST(new NonTerminalNode("+", [new TerminalNode(1), new TerminalNode(3)]))).toEqual(4);
    });

    test("3 * (1 + 3)", () => {
        expect(executeAST(new NonTerminalNode("*", [new TerminalNode(3), new NonTerminalNode("+", [new TerminalNode(1), new TerminalNode(3)])]))).toEqual(12);
    });

    test("sin(60)", () => {
        expect(executeAST(new NonTerminalNode("sin", [new TerminalNode(60)]))).toEqual(Math.sin((60 * Math.PI) / 180));
    });
});
