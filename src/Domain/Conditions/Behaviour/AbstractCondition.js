import uuid from 'uuid/v4'

export default class AbstractCondition {
  constructor({operator, value}) {
    this.id = uuid()
    this.typeName = null
    this.operator = operator || null
    this.value = value || null
  }

  toString() {
    return `  ${this.typeName} ${this.operator || ''} ${this.value}`
  }
}