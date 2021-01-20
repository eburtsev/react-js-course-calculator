import { getOperatorPriority, isFunctionName, isPostfixOperator } from "./operators";

export const rpn = (inp: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];
    const stack: string[] = [];

    for (const el of inp) {
        if (typeof el == "number" || isPostfixOperator(el)) {
            result.push(el);
        } else {
            if (stack.length == 0 || isFunctionName(el) || getOperatorPriority(stack[stack.length - 1]) > getOperatorPriority(el) || el == "(") {
                stack.push(el);
            } else if (el != ")") {
                let stackElement: string;
                do {
                    if (stack.length == 0) {
                        throw new EvalError("Mismatched brackets");
                    }
                    if (stack[stack.length - 1] == "(") {
                        break;
                    }
                    stackElement = stack.pop();
                    result.push(stackElement);
                    if (getOperatorPriority(stackElement) <= getOperatorPriority(el)) {
                        break;
                    }
                } while (stack.length > 0);

                stack.push(el);
            } else {
                let stackElement: string;
                do {
                    if (stack.length == 0) {
                        throw new EvalError("Mismatched brackets");
                    }
                    stackElement = stack.pop();
                    if (stackElement != "(") {
                        result.push(stackElement);
                    }
                } while (stackElement != "(");
            }
        }
    }

    while (stack.length > 0) {
        const stackElement: string = stack.pop();
        if (stackElement == "(" || stackElement == ")") {
            throw new EvalError("Mismatched brackets");
        }

        result.push(stackElement);
    }

    return result;
};
