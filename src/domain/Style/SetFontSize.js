import _ from 'lodash'

export default class SetFontSize {
  static min = 18
  static max = 45
  constructor({value}) {
    this.typeName = 'SetFontSize'
    this.value = value
  }

  toString(indent = '    ') {
    return `${indent}${this.typeName} ${this.value}`
  }

  static create() {
    return new this({value: 32})
  }
}
