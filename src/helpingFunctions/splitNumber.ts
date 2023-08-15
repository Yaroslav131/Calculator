import { splitLength } from '../constants';

export default function splitNumber(number: string) {
  if (number.length > 3) {
    const result: string[] = [];
    const sllitedNum = number.split('');
    let counter = 0;
    let afterDotArr:string[] = [];

    const dotIndex = sllitedNum.findIndex((x) => x === '.');

    if (dotIndex != -1) {
      afterDotArr = sllitedNum.splice(dotIndex, sllitedNum.length - dotIndex);
    }

    for (let index = sllitedNum.length; index >= 0; index--) {
      result.unshift(sllitedNum[index]);

      if (counter === splitLength) {
        if (dotIndex == -1 || dotIndex > index) { result.unshift(' '); }
        counter = 0;
      }
      counter++;
    }

    number = result.concat(afterDotArr).join('');
  }

  return number;
}
