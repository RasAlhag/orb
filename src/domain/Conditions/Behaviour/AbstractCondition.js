import uuid from 'uuid/v4'

export default class AbstractCondition {
  constructor({value}) {
    this.id = uuid()
    this.typeName = null
    this.value = value || null
  }

  toString() {
    return `  ${this.typeName} ${this.value}`
  }
}