import HasOperator from "./Behaviour/HasOperator"

export default class Rarity extends HasOperator {
  static min = 0
  static max = 3

  constructor(props) {
    super(props)
    this.typeName = 'Rarity'
  }

  static getRarityVariants() {
    return [ 'Normal', 'Magic', 'Rare', 'Unique']
  }

  static create() {
    return new this({value: {from: 'Normal', to: 'Unique'}})
  }
}