/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import solveMathExpression from '@/helpingFunctions/solveMathExpression';
import reverseSign from '@/helpingFunctions/reverseSign';
import isCorrectNumberLenght from '@/helpingFunctions/checkNumberLenght';

export default class Calculator {
  public currentValue: string | null = '0';

  public buffer: string = '';

  add(value: string) {
    const preliminary = this.buffer + value;
    if (isCorrectNumberLenght(preliminary)) {
      this.buffer += value;
    }

    this.currentValue = solveMathExpression(this.buffer) === null
      ? this.currentValue : solveMathExpression(this.buffer);
  }

  changeSign() {
    this.buffer = reverseSign(this.buffer);
    this.currentValue = solveMathExpression(this.buffer) === null
      ? this.currentValue : solveMathExpression(this.buffer);
  }

  delete() {
    this.buffer = this.buffer.slice(0, -1);
    this.currentValue = solveMathExpression(this.buffer) === null
      ? this.currentValue : solveMathExpression(this.buffer);
  }

  clean() {
    this.buffer = '';
    this.currentValue = '0';
  }

  result() {
    if (this.buffer === '') {
      this.currentValue = '0';
    } else {
      const mathExpressionResult = solveMathExpression(this.buffer);
      if (mathExpressionResult === null) {
        this.currentValue = 'Nan';
      } else {
        this.currentValue = mathExpressionResult;
      }
    }
  }
}
