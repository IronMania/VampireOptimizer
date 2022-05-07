import React from "react"

export class PowerUp extends React.Component<{initialBasePrice: number, name: string, maxLevel: number, level: number}>  {

  constructor(initialBasePrice: number, name: string, maxLevel: number, level: number = 0) {
    super({initialBasePrice: initialBasePrice, name: name, maxLevel: maxLevel, level: level})
   }

  setLevel(newLevel: number): PowerUp {
    return new PowerUp(this.props.initialBasePrice, this.props.name, this.props.maxLevel, newLevel)
  }
  public get Level() { return this.props.level }
  public get name() { return this.props.name }
  public get maxLevel() { return this.props.maxLevel }


  currentPrice(prePurchases: number) {
    const purchaseModifier = this.props.initialBasePrice * 0.1
    let price = 0
    for (let i = 0; i < this.props.level; i++) {
      price = 2 * price + this.props.initialBasePrice + ((i * 2 + prePurchases) * purchaseModifier)
    }

    return price
  };

  increaseLevel() {
    this.setState({initialBasePrice: this.props.initialBasePrice, name: this.props.name, maxLevel: this.props.maxLevel, level: this.props.level + 1})
  }

  render(){
    return <div>
      {this.name} {this.Level} {this.maxLevel} <button onClick={() => this.increaseLevel()}>+</button>
    </div>;
  }
}



