import { createInterface } from "readline";
import { evaluateExpression } from "./evaluator";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function solve(): Promise<boolean> {
    return new Promise((resolve) => {
        rl.question("> ", (answer: string) => {
            if (answer === "quit") {
                return resolve(false);
            }

            const result = evaluateExpression(answer);

            if (result !== undefined) {
                // eslint-disable-next-line no-console
                console.log(`Result: ${result}`);
                return resolve(true);
            }

            return resolve(true);
        });
    });
}

async function run() {
    while (await solve()) {
        console.log("===================================================================");
    }

    console.log("Goodbye!");
    process.exit();
}

run();
