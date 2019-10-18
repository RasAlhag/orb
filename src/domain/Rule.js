import os from 'os'
import SetBackgroundColor from "./Styles/SetBackgroundColor"
import SetBorderColor from "./Styles/SetBorderColor"
import SetTextColor from "./Styles/SetTextColor"
import SetFontSize from "./Styles/SetFontSize"
import {wakeUp as conditionWakeUp} from "./Conditions"
import {wakeUp as styleWakeUp} from "./Styles"
import uuid from 'uuid/v4'

export default class Rule {
  constructor({conditions, styles, effects, name}) {
    this.name = name
    this.id = uuid()
    this.conditions = conditions
    this.effects = effects || []
    this.styles = styles || [
      SetBackgroundColor.create(),
      SetBorderColor.create(),
      SetTextColor.create(),
      SetFontSize.create(),
    ]
  }

  toString() {
    let result = `# ${this.name}${os.EOL} Show ${os.EOL}`
    this.conditions.map(c => c.toString()).filter(c => c).forEach(condition => {
      result += condition.toString() + os.EOL
    })
    this.styles.forEach(style => {
      result += style.toString() + os.EOL
    })
    return result
  }

  static wakeUp(data) {
    data.styles.forEach(style => styleWakeUp(style))
    data.conditions.forEach(condition => conditionWakeUp(condition))
    data.__proto__ = this.prototype
  }
}
