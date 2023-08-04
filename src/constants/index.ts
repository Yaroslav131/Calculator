export const incrimentButtons = {
  plusMinus: '±',
  leftParenthesis: '(',
  rightParenthesis: ')',
  percent: '%',
  plus: '+',
  minus: '-',
  divide: '/',
  multiply: '⨯',
  result: '='
};

export const clearnButton = 'Ac';

export const numberButtons = {
  zero: '0',
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  dot: '.',
};

export const buttonNumberFlatList = ['4', '5', '6', '1', '2', '3'];

export const maxNumberLangth = 16;

export const splitPattern = /(\d+\.\d+|\d+|[+\-⨯/%()])/g;

export const resultFontSize = { small: "30px", large: "40px" }
export const inputFontSize = { small: "25px", large: "35px" }

export const operators: { [key: string]: number } = {
  "+": 1,
  "-": 1,
  "⨯": 2,
  "/": 2,
  "%": 2,
};