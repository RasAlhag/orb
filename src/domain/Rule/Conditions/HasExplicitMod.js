import PartialMatch from "./Behaviour/PartialMatch"
import list from "./HasExplicitMod/list"

export default class HasExplicitMod extends PartialMatch {
  constructor({value}) {
    super({value})
    this.typeName = 'HasExplicitMod'
  }
  static getVariants() {
    return list
  }
}