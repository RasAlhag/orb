import AbstractCondition from "./AbstractCondition"

export default class HasOperator extends AbstractCondition {
  constructor({operator, value}) {
    super({operator, value})
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