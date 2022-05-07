import React from "react";
import { PowerUp } from "./powerups/powerup";

export class PowerupSelection extends React.Component<{}> {

  private powerups: PowerUp[] = [
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
  ]

  constructor(props: {} = {}) {
    super({})
  }

  get Powerups() {
    return this.powerups
  }

  setPowerupLevel(name: string, newLevel: number) {
    const index = this.powerups.findIndex((powerup) => powerup.name === name)
    const newInstance = new PowerupSelection()
    newInstance.powerups = this.powerups
    newInstance.powerups[index] = this.powerups[index].setLevel(newLevel)
    return newInstance
  }

  diffOverallCost(name: string, newLevel: number) {
    const currentCost = this.overallCost()
    const newCost = this.setPowerupLevel(name, newLevel).overallCost()
    return newCost - currentCost;
  }


  overallCost(): number {
    const reduce = this.powerups.sort((a, b) => b.props.initialBasePrice - a.props.initialBasePrice).reduce((aggregate, current) => {
      const price = current.currentPrice(aggregate.purchases)
      return { purchases: aggregate.purchases + current.Level, sum: aggregate.sum + price }
    },
      { purchases: 0, sum: 0 });
    return reduce.sum
  }

  render(){
    return <div>
      <h1>Overall costs: {this.overallCost()}</h1>
      {this.Powerups.map((powerup) =>powerup.render())}
    </div>;
  }
}