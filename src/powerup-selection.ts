import { Armor, Might, PowerUp } from "./powerup";

export class PowerupSelection{

  constructor(  private powerups: PowerUp[] = [new Might(), new Armor()]){
    
  }


  get Powerups(){
    return this.powerups
  }

  setPowerupLevel(name: string, newLevel: number) {
    const index = this.powerups.findIndex((foo) => foo.Name === name)
    const newInstance = new (this.constructor as new () => this)()
    newInstance.powerups = this.powerups
    newInstance.powerups[index]= this.powerups[index].setLevel(newLevel)
    return newInstance
  }

  diffOverallCost(name: string, newLevel: number) {
    const currentCost = this.overallCost()
    const newCost = this.setPowerupLevel(name, newLevel).overallCost()
    return  newCost - currentCost;
  }


  overallCost(): number {
    const reduce = this.powerups.sort((a,b) => b.initialBasePrice - a.initialBasePrice).reduce((aggregate, current) => {
      const price = current.currentPrice(aggregate.purchases)
      return {purchases: current.Level, sum: aggregate.sum + price}
    }, 
      {purchases: 0, sum: 0});
    return reduce.sum
  }
}