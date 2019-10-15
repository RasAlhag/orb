import uuid from 'uuid/v4'

export default class ColorStyle {
  constructor({value}) {
    this.value = value
    this.id = uuid()
  }
  static create() {
    return new this({
      value: {
        r: 255,
        g: 255,
        b: 255,
        a: 1,
      }
    })
  }

  toString() {
    return `  ${this.typeName} ${this.value.r} ${this.value.g} ${this.value.b} ${Math.round(this.value.a * 255)}`
  }
}