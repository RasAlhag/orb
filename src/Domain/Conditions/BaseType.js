import PartialMatch from "./Behaviour/PartialMatch"
import list from "./BaseType/list"

export default class BaseType extends PartialMatch {
  constructor({value}) {
    super({value})
    this.typeName = 'BaseType'
  }

  static create () {
    return new this({value: null})
  }

  static getVariants() {
    return list
  }
}