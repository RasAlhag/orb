import uuid from 'uuid/v4'
import os from "os"

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

  toString(indent = '    ') {
    if (this.isVisible()) {
      return indent + [this.typeName, this.value.r, this.value.g, this.value.b, this.getAlpha(), os.EOL]
        .filter(str => str !== null).join(' ')
    }
    return ''
  }

  isVisible() {
    return this.value.a > 0
  }

  getAlpha() {
    return this.value.a < 1 ? ' ' + Math.round(this.value.a * 255) : null
  }

  toCSS() {
    return `${this.constructor.cssName}: ${this.getHexColor()}`
  }

  getHexColor() {
    return '#' + this.value.r.toString(16).padStart(2, '0') +
      this.value.g.toString(16).padStart(2, '0') +
      this.value.b.toString(16).padStart(2, '0') +
      Math.round(this.value.a * 255).toString(16).padStart(2, '0')
  }

  reInit() {
    this.id = uuid()
  }
  static wakeUp(obj) {
    obj.__proto__ = this.prototype
  }
}