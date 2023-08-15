/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { maxNumValue, operators } from '@/constants';

function formatNumber(input: string) {
  const number = parseFloat(input);
  if (Number.isNaN(number)) {
    return null;
  }

  if (Math.abs(number) >= maxNumValue) {
    return number.toExponential(2);
  }
  return number.toFixed(3).replace(/\.?0+$/, '');
}

function calculateMathString(mathString: string): number | null {
  const isOperator = (char: string): boolean => char in operators;
  function isHigherPrecedence(op1: string, op2: string): boolean {
    return operators[op1] >= operators[op2];
  }

  const resolveBrabches = (infix: string[]): string[] => {
    const outputQueue: string[] = [];
    const operatorStack: string[] = [];

    infix.forEach((token) => {
      if (!Number.isNaN(parseFloat(token))) {
        outputQueue.push(token);
      } else if (isOperator(token)) {
        while (
          operatorStack.length > 0
          && isHigherPrecedence(operatorStack[operatorStack.length - 1], token)
        ) {
          outputQueue.push(operatorStack.pop()!);
        }
        operatorStack.push(token);
      } else if (token === '(') {
        operatorStack.push(token);
      } else if (token === ')') {
        while (
          operatorStack.length > 0
          && operatorStack[operatorStack.length - 1] !== '('
        ) {
          outputQueue.push(operatorStack.pop()!);
        }
        operatorStack.pop();
      }
    });

    while (operatorStack.length > 0) {
      outputQueue.push(operatorStack.pop()!);
    }

    return outputQueue;
  };

  const calculateExpration = (rpn: string[]): number | null => {
    const stack: number[] = [];

    // eslint-disable-next-line no-restricted-syntax
    for (const token of rpn) {
      if (!Number.isNaN(parseFloat(token))) {
        stack.push(parseFloat(token));
      } else if (isOperator(token)) {
        const b = stack.pop();
        const a = stack.pop();

        if (a === undefined || b === undefined) {
          return null;
        }

        switch (token) {
          case '+':
            stack.push(a + b);
            break;
          case '-':
            stack.push(a - b);
            break;
          case '⨯':
            stack.push(a * b);
            break;
          case '/':
            if (b === 0) {
              return null;
            }
            stack.push(a / b);
            break;
          case '%':
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

  const tokens = mathString.match(/(?<!\d)(?:(?<!\d)-)?\d+(\.\d+)?|[+\-⨯/%()]/g);

  if (!tokens) {
    return null;
  }

  const expression = resolveBrabches(tokens);

  return calculateExpration(expression);
}

export default function solveMathExpression(expression: string): string | null {
  const result = calculateMathString(expression)?.toString();
  if (result) {
    return formatNumber(result);
  }

  return null;
}
