import { buildAST, executeAST } from "./ast";
import { rpn } from "./rpn";
import { tokenize } from "./tokenizer";

export const evaluateExpression = (expression: string): number | undefined => {
    try {
        return executeAST(buildAST(rpn(tokenize(expression))));
    } catch (e) {
        console.log(`Exception occurred: ${e}`);
        return undefined;
    }
};
