import os from 'os'
import SetBackgroundColor from "./Styles/SetBackgroundColor"
import SetBorderColor from "./Styles/SetBorderColor"
import SetTextColor from "./Styles/SetTextColor"
import SetFontSize from "./Styles/SetFontSize"

export default class Rule {
  constructor({conditions, name}) {
    this.name = name
    this.conditions = conditions
    this.styles = [
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
}
