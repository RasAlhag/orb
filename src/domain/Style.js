import uuid from "uuid/v4"
import SetBackgroundColor from "./Style/SetBackgroundColor"
import SetBorderColor from "./Style/SetBorderColor"
import os from 'os'
import SetTextColor from "./Style/SetTextColor"

export default class Style {
  id = null
  name = null

  background = null
  border = null
  text = null

  constructor({name}) {
    this.id = uuid()
    this.name = name
    this.background = new SetBackgroundColor({value: {r: 255, g: 100, b: 255, a: 1}})
    this.border = new SetBorderColor({value: {r: 0, g: 0, b: 0, a: 1}})
    this.text = new SetTextColor({value: {r: 0, g: 0, b: 0, a: 1}})
  }

  toString(indent = '    ') {
    return [this.background.toString(indent), this.border.toString(indent), this.text.toString(indent)].join(os.EOL)
  }

  toCSS() {
    return [
      this.background.toCSS(),
      this.border.toCSS(),
      this.text.toCSS(),
      'border-width: 4px',
      'border-style: solid',
      'font-family: Fontin',
      'font-weight: bold',
      'font-variant: small-caps',
    ].join(';')
  }

  reInit() {
    this.id = uuid()
    this.background.reInit()
    this.border.reInit()
    this.text.reInit()
  }

  static wakeUp(obj) {
    obj.__proto__ = this.prototype
    SetBackgroundColor.wakeUp(obj.background)
    SetBorderColor.wakeUp(obj.border)
    SetTextColor.wakeUp(obj.text)
    return obj
  }
}