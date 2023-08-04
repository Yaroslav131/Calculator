import { operators } from "../constants";

export function solveMathExpression(expression: string): string | null {
    let result = calculateMathString(replaceExpression(expression))?.toString()
    if (result) {

        return formatNumber(result)
    }
    else {
        return null
    }
}

function replaceExpression(inputString: string): string {   
    const pattern = /(\d+)\s*-\s*(\d+)/g;

    const outputString = inputString.replace(pattern, (_, num1, num2) => `${num1}+(-${num2})`);

    return outputString;
}

function formatNumber(input: string) {
    let number = parseFloat(input);
    if (isNaN(number)) {
        return null;
    }

    if (Math.abs(number) >= 1e6) {
        return number.toExponential(2);
    } else {
        return number.toFixed(3).replace(/\.?0+$/, "");
    }
}


function calculateMathString(mathString: string): number | null {
    const isOperator = (char: string): boolean => operators.hasOwnProperty(char);
    const isHigherPrecedence = (op1: string, op2: string): boolean =>
        operators[op1] >= operators[op2];

    const infixToRPN = (infix: string[]): string[] => {
        const outputQueue: string[] = [];
        const operatorStack: string[] = [];

        for (const token of infix) {
            if (!isNaN(parseFloat(token))) {
                outputQueue.push(token);
            } else if (isOperator(token)) {
                while (
                    operatorStack.length > 0 &&
                    isHigherPrecedence(operatorStack[operatorStack.length - 1], token)
                ) {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.push(token);
            } else if (token === "(") {
                operatorStack.push(token);
            } else if (token === ")") {
                while (
                    operatorStack.length > 0 &&
                    operatorStack[operatorStack.length - 1] !== "("
                ) {
                    outputQueue.push(operatorStack.pop()!);
                }
                operatorStack.pop();
            }
        }

        while (operatorStack.length > 0) {
            outputQueue.push(operatorStack.pop()!);
        }

        return outputQueue;
    };

    const calculateRPN = (rpn: string[]): number | null => {
        const stack: number[] = [];

        for (const token of rpn) {
            if (!isNaN(parseFloat(token))) {
                stack.push(parseFloat(token));
            } else if (isOperator(token)) {
                const b = stack.pop();
                const a = stack.pop();
                console.log(token)
                console.log(a, b)
                if (a === undefined || b === undefined) {
                    return null;
                }
                switch (token) {
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "⨯":
                        stack.push(a * b);
                        break;
                    case "/":
                        if (b === 0) {
                            return null;
                        }
                        stack.push(a / b);
                        break;
                    case "%":
                        if (b === 0) {
                            return null;
                        }
                        stack.push(a % b);
                        break;
                    default:
                        return null;
                }
            }
        }

        return stack.length === 1 ? stack[0] : null;
    };

    const tokens = mathString.match(/\⨯?\+|-?\d+(\.\d+)?|[+\-⨯\/%()]/g);

    console.log(tokens)

    if (!tokens) {
        return null;
    }

    const rpn = infixToRPN(tokens);

    return calculateRPN(rpn);
}