import uuid from 'uuid/v4'
import Style from './Style'
import _ from 'lodash'

export default class Theme {
  styles = []
  id = null
  name = null

  constructor({name}) {
    this.name = name
    this.id = uuid()
  }

  addStyle(style) {
    this.styles.push(style)
  }

  removeStyle(style) {
    this.styles.splice(this.styles.indexOf(style), 1)
  }


  getSwatches(chunkSize = 4) {
    let colors = this.styles.reduce((colors, style) => {
      colors.push(style.background.getHexColor())
      colors.push(style.border.getHexColor())
      colors.push(style.text.getHexColor())
      return colors
    }, []).filter((value, index, self) => self.indexOf(value) === index)

    return chunkSize ? _.chunk(colors, chunkSize) : colors
  }

  reInit() {
    this.id = uuid()
    this.styles.forEach(style => style.reInit())
  }

  copy() {
    let replica = _.cloneDeep(this)
    replica.reInit()
    return replica
  }

  static wakeUp(obj) {
    obj.__proto__ = this.prototype
    obj.styles.forEach(style => Style.wakeUp(style))
    return obj
  }

  static hexToInt(rrggbbaa) {
    return Number.parseInt(rrggbbaa.replace('#', ''), 16);
  }


}