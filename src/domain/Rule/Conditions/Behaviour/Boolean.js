import AbstractCondition from "./AbstractCondition"

export default class Boolean extends AbstractCondition {
  constructor({value}) {
    super({value: !!value});
  }

  static create() {
    return new this({value: true})
  }

  toString(indent = '    ') {
    return `${indent}${this.typeName} ${this.value ? 'True' : 'False'}`
  }
}