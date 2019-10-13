import PartialMatch from "./Behaviour/PartialMatch"
import list from "./HasEnchantment/list"

export default class HasEnchantment extends PartialMatch {
  constructor({value}) {
    super({value})
    this.typeName = 'HasEnchantment'
  }

  static getVariants() {
    return list
  }
}