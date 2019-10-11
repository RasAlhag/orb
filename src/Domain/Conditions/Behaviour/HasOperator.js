import AbstractCondition from "./AbstractCondition"

export default class HasOperator extends AbstractCondition {
  constructor({operator, value}) {
    super()
    this.operator = operator
    this.value = value
  }

  toString() {
    return `  ${this.typeName} ${this.operator} ${this.value}`
  }

  static create() {
    return new this({operator: this.getOperators()[2], value: 1})
  }

  static getOperators() {
    return [
      '<',
      '<=',
      '=',
      '>=',
      '>',
    ]
  }
}