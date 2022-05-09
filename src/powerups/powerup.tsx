import React from "react"

export class PowerUp  {

  constructor(public readonly initialBasePrice: number, public readonly name: string, public readonly maxLevel: number, private level: number = 0) {
   }

  setLevel(newLevel: number): PowerUp {
    if(newLevel >= this.maxLevel){
      return new PowerUp(this.initialBasePrice, this.name, this.maxLevel, this.maxLevel)  
    }

    if(newLevel <= 0){
      return new PowerUp(this.initialBasePrice, this.name, this.maxLevel, 0)  
    }
    return new PowerUp(this.initialBasePrice, this.name, this.maxLevel, newLevel)
  }
  public get Level() { return this.level }


  currentPrice(prePurchases: number) {
    const purchaseModifier = this.initialBasePrice * 0.1
    let price = 0
    for (let i = 0; i < this.level; i++) {
      price = 2 * price + this.initialBasePrice + ((i * 2 + prePurchases) * purchaseModifier)
    }

    return price
  };

  increaseLevel() {
    return new PowerUp(this.initialBasePrice, this.name, this.maxLevel, this.Level + 1)
  }

  render(){
    return <div>
      {this.name} {this.Level} {this.maxLevel} <button onClick={() => this.increaseLevel()}>+</button>
    </div>;
  }
}



