import AbstractCondition from "./AbstractCondition"

export default class PartialMatch extends AbstractCondition{
  constructor ({value}) {
    super({value})
  }

  matches() {
    return this.constructor.getVariants().filter(variant => variant.includes(this.value))
  }

  toString() {
    return `  ${this.typeName} "${this.value}"`
  }
}