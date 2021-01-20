import { getOperandsCount, Operators } from "./operators";

export abstract class ASTNode {}

export class NonTerminalNode extends ASTNode {
    op: string;
    children: ASTNode[];

    constructor(op: string, children: ASTNode[]) {
        super();
        this.op = op;
        this.children = children;
    }
}

export class TerminalNode extends ASTNode {
    value: number;

    constructor(value: number) {
        super();
        this.value = value;
    }
}

export const buildAST = (inp: (string | number)[]): ASTNode => {
    if (inp.length == 0) {
        return null;
    }

    const el = inp.pop();
    if (typeof el == "string") {
        const operands: ASTNode[] = [];
        for (let i = 0; i < getOperandsCount(el); i++) {
            operands.push(buildAST(inp));
        }
        return new NonTerminalNode(el, operands.reverse());
    }

    return new TerminalNode(el);
};

export function executeAST(ast: ASTNode): number {
    if (ast.constructor.name === TerminalNode.name) {
        return (ast as TerminalNode).value;
    }

    const node: NonTerminalNode = ast as NonTerminalNode;

    return Operators.get(node.op).eval.apply(
        this,
        node.children.map((val) => executeAST(val))
    );
}
