import os from 'os'

import SetFontSize from "./Style/SetFontSize"
import {wakeUp as conditionWakeUp} from "./Rule/Conditions"


import uuid from 'uuid/v4'

export default class Rule {
  /***
   * @type {null|string}
   */
  name = null

  /***
   * @type {null|string}
   */
  id = null

  /**
   * @type {Array|AbstractCondition[]}
   */
  conditions = []

  /**
   * @type {Array}
   */
  effects = []

  constructor({conditions, effects, name}) {
    this.name = name
    this.id = uuid()
    this.conditions = conditions
    this.effects = effects || []
  }

  toString(indent = '    ') {
    return this.conditions.map(c => c.toString(indent)).filter(c => c).join(os.EOL)
  }

  static wakeUp(data) {
    data.conditions.forEach(condition => conditionWakeUp(condition))
    data.__proto__ = this.prototype
  }

  fontSize() {
    return this.styles.find(style => style instanceof SetFontSize).value
  }
}
