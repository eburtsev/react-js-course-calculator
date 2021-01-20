interface Operator {
    name: string;
    isFunction: boolean;
    isPostfix: boolean;
    priority: number;

    eval(...args: number[]): number;
}

const OperatorsDefinitions: Operator[] = [
    { name: "**", priority: Number.MAX_VALUE, isFunction: false, isPostfix: true, eval: (a: number): number => Math.pow(a, 2) },
    { name: "!", priority: Number.MAX_VALUE, isFunction: false, isPostfix: true, eval: (a: number): number => factorial(a) },
    { name: "sin", priority: Number.MAX_VALUE, isFunction: true, isPostfix: false, eval: (a: number): number => Math.sin((a * Math.PI) / 180) },
    { name: "cos", priority: Number.MAX_VALUE, isFunction: true, isPostfix: false, eval: (a: number): number => Math.cos((a * Math.PI) / 180) },
    { name: "tan", priority: Number.MAX_VALUE, isFunction: true, isPostfix: false, eval: (a: number): number => Math.tan((a * Math.PI) / 180) },

    { name: "+", priority: 2, isFunction: false, isPostfix: false, eval: (a: number, b: number): number => a + b },
    { name: "-", priority: 2, isFunction: false, isPostfix: false, eval: (a: number, b: number): number => a - b },
    { name: "*", priority: 1, isFunction: false, isPostfix: false, eval: (a: number, b: number): number => a * b },
    { name: "/", priority: 1, isFunction: false, isPostfix: false, eval: (a: number, b: number): number => a / b },
    { name: "^", priority: 0, isFunction: false, isPostfix: false, eval: (a: number, b: number): number => Math.pow(a, b) },
];

export const Operators: Map<string, Operator> = ((): Map<string, Operator> => {
    const result: Map<string, Operator> = new Map<string, Operator>();

    for (const o of OperatorsDefinitions) {
        result.set(o.name, o);
    }

    return result;
})();

const factorial = (n: number): number => (n > 1 ? n * factorial(n - 1) : 1);

export const getOperandsCount = (op: string): number => Operators.get(op)?.eval?.length || 0;

export const isPostfixOperator = (op: string): boolean => Operators.get(op)?.isPostfix || false;

export const isFunctionName = (op: string): boolean => Operators.get(op)?.isFunction || false;

export const getOperatorPriority = (op: string): number => (Operators.has(op) ? Operators.get(op).priority : Number.MAX_VALUE);
