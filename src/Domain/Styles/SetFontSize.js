import _ from 'lodash'

export default class SetFontSize {
  constructor({value}) {
    this.typeName = 'SetFontSize'
    this.value = value
  }

  toString() {
    return `  ${this.typeName} ${this.value}`
  }

  static create() {
    return new this({value: 32})
  }

  static fontSizeVariants() {
    return _.range(18, 45)
  }

}
