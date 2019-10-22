import PartialMatch from "./Behaviour/PartialMatch"
import list from "./Prophecy/list"

export default class Prophecy extends PartialMatch {
  constructor({value}) {
    super({value})
    this.typeName = 'Prophecy'
  }

  static getVariants() {
    return list
  }
}