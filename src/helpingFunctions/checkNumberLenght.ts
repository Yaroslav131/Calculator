import { maxNumberLangth, splitPattern } from '../constants';

export default function isCorrectNumberLenght(input: string): boolean {
  const tokens = input.match(splitPattern);

  if (!tokens) {
    return true;
  }

  const lastToken = tokens[tokens?.length - 1];

  if (isNaN(parseFloat(lastToken))) {
    return true;
  }

  return !(lastToken.split('').length > maxNumberLangth);
}
