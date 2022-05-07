// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { PowerupSelection } from './powerup-selection';


describe('Powerup Selection', () => {
    test('can be cerated', () => {
      expect(new PowerupSelection()).not.toBeNull;
    });

    test('overall Cost is 0', () => {
      expect(new PowerupSelection().overallCost()).toBe(0);
    });

    test('will have an initial Might level of 0 ', () => {
      const selection = new PowerupSelection()
      const powerups = selection.Powerups
      expect(powerups[0].Level).toBe(0);
    });


    test('will have the correct Name', () => {
      const selection = new PowerupSelection()
      const powerups = selection.Powerups
      expect(powerups[0].name).toBe("Might");
    });

    test('can set Might level', () => {
      const selection = new PowerupSelection()
      selection.setPowerupLevel("Might",2)
      const powerups = selection.Powerups
      expect(powerups[0].Level).toBe(2);
    });

    test('change Level will change overall Cost', () => {
      const selection = new PowerupSelection()
      selection.setPowerupLevel("Might",1)
      expect(selection.overallCost()).toBe(200);
    });

    test('can set Armor level', () => {
      const selection = new PowerupSelection()
      selection.setPowerupLevel("Armor",2)
      const powerups = selection.Powerups
      expect(powerups[1].Level).toBe(2);
    });

    test('change Armor and Might will have correct overall costs', () => {
      const selection = new PowerupSelection()
      selection.setPowerupLevel("Armor",1)
      selection.setPowerupLevel("Might",1)
      const powerups = selection.Powerups
      expect(selection.overallCost()).toBe(820);
    });

    test('diff of powerup level can be shown', () => {
      const selection = new PowerupSelection()
      const pointsDiff = selection.diffOverallCost("Might",1)
      expect(pointsDiff).toBe(200);
    });

    test('diff of powerup level can be shown for downgrade', () => {
      const selection = new PowerupSelection()
      selection.setPowerupLevel("Might",1)
      const pointsDiff = selection.diffOverallCost("Might",0)
      expect(pointsDiff).toBe(-200);
    });

  });