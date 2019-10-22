import HasOperator from "./Behaviour/HasOperator"

export default class Rarity extends HasOperator {
  static min = 0
  static max = 3

  constructor(props) {
    super(props)
    this.typeName = 'Rarity'
  }

  static getRarityVariants() {
    return ['Normal', 'Magic', 'Rare', 'Unique']
  }

  buildCondition(operator, value) {
    return super.buildCondition(operator, this.getTextValue(value))
  }

  getTextValue(value) {
    return this.constructor.getRarityVariants()[value]
  }
}
