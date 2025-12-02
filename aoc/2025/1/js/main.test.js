import fs from 'node:fs';
import { solve } from './main';

test('solves the puzzle', () => {
  const input = `
    L68
    L30
    R48
    L5
    r60
    l55
    l1
    l99
    r14
    l82
  `;
  const expected = 3;

  expect(solve(input)).toStrictEqual(expected);
});

test('solves the puzzle with a file input', () => {
  const input = fs.readFileSync('../input.txt', 'utf8');

  expect(solve(input)).toStrictEqual(999);
});

test('solves the puzzle with useAdvancedEncryption', () => {
  const input = `
    L68
    L30
    R48
    L5
    r60
    l55
    l1
    l99
    r14
    l82
  `;

  expect(solve(input, true)).toStrictEqual(6);
});

test('solves the puzzle with useAdvancedEncryption and a file input', () => {
  const input = fs.readFileSync('../input.txt', 'utf8');
  expect(solve(input, true)).toStrictEqual(6099);
});
