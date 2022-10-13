'use strict';

const passwordLengthEl = document.getElementById('length');
const generateFieldEl = document.getElementById('generated-password');
const generateBtnEl = document.getElementById('btn-generate');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');

const generateLower = function () {
  const letters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  const lowercaseLetter = letters[Math.floor(Math.random() * letters.length)];
  return lowercaseLetter;
};

const generateUpper = function () {
  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  const uppercaseLetter = letters[Math.floor(Math.random() * letters.length)];
  return uppercaseLetter;
};

const generateNumber = function () {
  const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  const generatedNumber = numbers[Math.floor(Math.random() * numbers.length)];
  return generatedNumber;
};

const generateSymbol = function () {
  const symbols = [
    '~',
    '`',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '-',
    '+',
    '=',
    '{',
    '[',
    '}',
    ']',
    '|',
    '\\',
    ':',
    ';',
    '"',
    "'",
    '<',
    ',',
    '>',
    '.',
    '?',
    '/',
  ];
  const generatedSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  return generatedSymbol;
};

const randomFunc = {
  upper: generateUpper,
  lower: generateLower,
  number: generateNumber,
  symbol: generateSymbol,
};

const generatePassword = function () {
  const length = passwordLengthEl.value;
  const upper = uppercaseEl.checked;
  const lower = lowercaseEl.checked;
  const number = numberEl.checked;
  const symbol = symbolEl.checked;

  let generatedPassword = '';

  const typesCount = upper + lower + number + symbol;

  const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    console.log(typesCount);
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunc[funcName]();
    });
  }

  const finalPassword = generatedPassword.slice(0, length);

  return finalPassword;
};

const updateGenerateField = function (password) {
  generateFieldEl.value = password;
};

generateBtnEl.addEventListener('click', () => {
  updateGenerateField(
    generatePassword()
      ? generatePassword()
      : 'Please enter the mandatory fields'
  );
});
