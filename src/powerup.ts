
export class Might{

  private purchases = 0;
  private initialPrice =200;
  constructor(purchases?: number){
    if(!purchases){
      this.purchases = 0
    }else{
      this.purchases = purchases
    }
    
  }

 purchase(): Might {
   return new Might(this.purchases+1)
 }
 currentLevel(): Number {
  return this.purchases
}

 currentPrice(){
   const price = this.initialPrice + (this.purchases * this.initialPrice)
   return price + price * 0.1 * this.purchases
 };
}