import os from 'os'

export default class Rule {
  constructor({conditions, styles, name}) {
    this.name = name
    this.conditions = conditions
    this.styles = styles
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
