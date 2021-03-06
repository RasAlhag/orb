import AbstractCondition from "./AbstractCondition"

export default class PartialMatch extends AbstractCondition {
  constructor({value}) {
    super({value})
  }

  matches() {
    return this.constructor.getVariants().filter(variant => {
      for (let v of this.value) {
        if (variant.includes(v)) {
          return true
        }
      }
      return false
    })
  }

  static create() {
    return new this({value: []})
  }

  toString(indent = '    ') {
    if (!this.value.length) {
      return indent
    }
    let preparedValue = this.value.map(res => `"${res}"`).join(' ')
    return `${indent}${this.typeName} ${preparedValue}`
  }
}