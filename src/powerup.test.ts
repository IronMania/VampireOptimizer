// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { Might } from './powerup';


describe('Might', () => {
    test('can be cerated', () => {
      expect(new Might()).not.toBeNull;
    });

    test('initial price is 200', () => {
      expect(new Might().currentPrice()).toBe(200);

    });
    test(' pricate after purchase is 440', () => {
      expect(new Might().purchase().currentPrice()).toBe(440);

    });

    test(' level after purchase is 1', () => {
      expect(new Might().purchase().currentLevel()).toBe(1);

    });
    
  });