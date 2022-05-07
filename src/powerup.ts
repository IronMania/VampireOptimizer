export abstract class PowerUp{
  private level: number = 0

  setLevel(newLevel: number): PowerUp {
    this.level = newLevel
    return this
  }
  public get Level(){return this.level}

   abstract get initialBasePrice(): number

  currentPrice(prePurchases: number){
    if(this.level === 0){
      return 0
    }

    const purchaseModifier = this.initialBasePrice * 0.1
    const initialPriceAfterPurchases = this.initialBasePrice + this.initialBasePrice * 0.1 * prePurchases
    let price = 0
    for(let i =0; i< this.level; i++){
      price = 2*price + this.initialBasePrice + ((i*2 + prePurchases) * purchaseModifier)
    }
    
    return price
  };

  abstract get Name(): string
}

export class Might extends PowerUp{
  get initialBasePrice(): number {
    return 200
  }
  get Name(): string {
    return "Might"
  }

  private purchases = 0;
  constructor(purchases?: number){
    super();
    if(!purchases){
      this.purchases = 0
    }else{
      this.purchases = purchases
    }
    
  }

 currentLevel(): Number {
  return this.purchases
}


}

export class Armor extends PowerUp{
  get initialBasePrice(): number {
    return 600
  }
  get Name(): string {
    return "Armor"
  }

}