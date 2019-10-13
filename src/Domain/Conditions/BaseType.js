import PartialMatch from "./Behaviour/PartialMatch"
import list from "./BaseType/list"

export default class BaseType extends PartialMatch {
  constructor({value}) {
    super({value})
    this.typeName = 'BaseType'
  }

  static getVariants() {
    return list
  }
}