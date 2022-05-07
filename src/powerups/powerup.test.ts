// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { PowerUp } from './powerup';


describe('Might', () => {
  const might = new PowerUp(200, "Might", 3)
  test('can be cerated', () => {
    expect(might).not.toBeNull;
  });

  test('initial price is 200', () => {
    expect(might.initialBasePrice).toBe(200);

  });

  test('level 1 Price is calculated correctly with 2 prepurchases', () => {
    expect(might.setLevel(1).currentPrice(2)).toBe(240);

  });

  test('level 2 Price is calculated correctly with 1 prepurchases', () => {
    expect(might.setLevel(2).currentPrice(1)).toBe(700);

  });

});