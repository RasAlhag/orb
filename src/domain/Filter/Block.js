import uuid from 'uuid/v4'
import {wakeUp as conditionWakeUp} from '../Rule/Conditions'
import Style from '../Style'
import os from 'os'

export default class Block {
  id

  prefix = 'Show'
  /**
   * @type {AbstractCondition[]}
   */
  conditions = []

  /**
   * @type {Style[]}
   */
  styles = []


  effects = []

  constructor({name}) {
    this.name = name
    this.id = uuid()
  }

  addCondition(condition) {
    this.conditions.push(condition)
  }

  addStyle(style) {
    this.styles.push(style)
  }

  getStyles() {
    return this.styles
  }

  getConditions() {
    return this.conditions
  }

  removeCondition({id}) {
    this.conditions.splice(this.conditions
      .findIndex(condition => condition.id === id), 1)
  }

  removeStyle({id}) {
    this.styles.splice(this.styles
      .findIndex(style => style.id === id), 1)
  }

  static wakeUp(data) {
    data.conditions.forEach(condition => conditionWakeUp(condition))
    data.styles.forEach(style => Style.wakeUp(style))
    data.__proto__ = this.prototype
  }

  toString(indent = '    ') {
    return [
      this.prefix,
      this.conditions.map(c => c.toString(indent)).filter(c => c).join(os.EOL),
      this.styles.map(s => s.toString(indent)).filter(c => c).join(os.EOL),
    ].join(os.EOL)
  }
}