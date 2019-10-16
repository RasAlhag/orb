import HasOperator from "./Behaviour/HasOperator"

export default class Rarity extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'Rarity'
  }

  static getRarityVariants() {
    return [ 'Normal', 'Magic', 'Rare', 'Unique']
  }

  static create() {
    return new this({operator: this.getOperators()[2], value: this.getRarityVariants()[0]})
  }
}