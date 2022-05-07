import { PowerupSelection } from "./powerup-selection";
import { PowerUp } from "./powerups/powerup";

export class PowerupSelectionFactory {

  static create(): PowerupSelection {
    return new PowerupSelection([
      new PowerUp(200, "Might", 5),
      new PowerUp(600, "Armor", 3),
      new PowerUp(200, "Max Health", 3),
      new PowerUp(200, "Recover", 5),
      new PowerUp(900, "Cooldown", 2),
      new PowerUp(300, "Area", 2),
      new PowerUp(300, "Speed", 2),
      new PowerUp(300, "Duration", 2),
      new PowerUp(5000, "Amount", 1),
      new PowerUp(300, "MoveSpeed", 2),
      new PowerUp(300, "Magnet", 2),
      new PowerUp(600, "Luck", 3),
      new PowerUp(900, "Growth", 5),
      new PowerUp(200, "Greed", 5),
      new PowerUp(1666, "Curse", 5),
      new PowerUp(10000, "Revival", 1),
      new PowerUp(1000, "Reroll", 4),
      new PowerUp(100, "Skip", 3),
      new PowerUp(100, "Banish", 3),
    ])
  }

}