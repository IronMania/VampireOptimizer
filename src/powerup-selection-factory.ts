import { PowerupSelection } from "./powerup-selection";
import { PowerUp } from "./powerups/powerup";

export class PowerupSelectionFactory {

  static create(): PowerupSelection {
    return new PowerupSelection()
  }

}