export class PowerUp {

  constructor(public readonly initialBasePrice: number, public readonly name: string, public readonly maxLevel: number, private level: number = 0) { }

  setLevel(newLevel: number): PowerUp {
    return new PowerUp(this.initialBasePrice, this.name, this.maxLevel, newLevel)
  }
  public get Level() { return this.level }


  currentPrice(prePurchases: number) {
    if (this.level === 0) {
      return 0
    }

    const purchaseModifier = this.initialBasePrice * 0.1
    let price = 0
    for (let i = 0; i < this.level; i++) {
      price = 2 * price + this.initialBasePrice + ((i * 2 + prePurchases) * purchaseModifier)
    }

    return price
  };
}

