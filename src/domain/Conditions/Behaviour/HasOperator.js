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
    return `  ${this.typeName} ${operator} ${value}` + os.EOL
  }

  toString() {
    if (this.value.from === this.value.to) {
      return this.buildCondition('=', this.value.from)
    }

    return this.buildCondition('>=', this.value.from) +
      this.buildCondition('<=', this.value.to)
  }

  min() {
    return this.constructor.min
  }

  max() {
    return this.constructor.max
  }
}