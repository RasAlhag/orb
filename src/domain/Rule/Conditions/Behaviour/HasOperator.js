import AbstractCondition from "./AbstractCondition"
import _ from 'lodash'
import os from 'os'

export default class HasOperator extends AbstractCondition {
  static min = 0
  static max = 0

  static create() {
    return new this({value: {from: this.min, to: this.max}})
  }

  values() {
    return _.range(this.constructor.min, this.constructor.max)
  }

  buildCondition(operator, value) {
    operator = operator ? operator + ' ' : ''
    return `${this.typeName} ${operator}${value}`
  }

  toString(indent = '    ') {
    if (this.value.from === this.value.to) {
      return indent + this.buildCondition(false, this.value.from)
    }

    let fromCondition =
      this.value.from !== this.constructor.min ?
        indent + this.buildCondition('>=', this.value.from) : null

    let toCondition =
      this.value.to !== this.constructor.max ?
        indent + this.buildCondition('<=', this.value.to) : null

    return [fromCondition, toCondition].filter(c => c).join(os.EOL)
  }

  min() {
    return this.constructor.min
  }

  max() {
    return this.constructor.max
  }
}