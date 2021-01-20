const factorial = (n: number): number => (n > 1 ? n * factorial(n - 1) : 1);

const UnaryOperators = {
    "**": (args: number[]): number => Math.pow(args[0], 2),
    "!": (args: number[]): number => factorial(args[0]),
    sin: (args: number[]): number => Math.sin((args[0] * Math.PI) / 180),
    cos: (args: number[]): number => Math.cos((args[0] * Math.PI) / 180),
    tan: (args: number[]): number => Math.tan((args[0] * Math.PI) / 180),
};

const BinaryOperators = {
    "+": (args: number[]): number => args[0] + args[1],
    "-": (args: number[]): number => args[0] - args[1],
    "*": (args: number[]): number => args[0] * args[1],
    "/": (args: number[]): number => args[0] / args[1],
    "^": (args: number[]): number => Math.pow(args[0], args[1]),
};

const PrefixOperators: Set<string> = new Set(["**", "!"]);

const Functions: Set<string> = new Set(["sin", "cos", "tan"]);

const OperatorsPriorities: string[][] = [["^"], ["*", "/"], ["+", "-"], ["(", ")"]];

export const Operators = {
    1: UnaryOperators,
    2: BinaryOperators,
};

export const getOperandsCount = (() => {
    const operandsCounts: Map<string, number> = new Map<string, number>();
    for (const count in Operators) {
        if (Object.prototype.hasOwnProperty.call(Operators, count)) {
            for (const op in Operators[count]) {
                if (Object.prototype.hasOwnProperty.call(Operators[count], op)) {
                    operandsCounts.set(op, Number(count));
                }
            }
        }
    }
    return (op: string): number => operandsCounts.get(op);
})();

export const isPostfixOperator = (op: string): boolean => PrefixOperators.has(op);

export const isFunctionName = (op: string): boolean => Functions.has(op);

export const getOperatorPriority = (() => {
    const OperatorsPrioritiesMap: Map<string, number> = new Map<string, number>();
    for (let i = 0; i < OperatorsPriorities.length; i++) {
        for (const op of OperatorsPriorities[i]) {
            OperatorsPrioritiesMap.set(op, i);
        }
    }

    return (op: string): number => OperatorsPrioritiesMap.get(op);
})();
