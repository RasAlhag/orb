import uuid from 'uuid/v4'

export default class AbstractCondition {
  constructor() {
    this.id = uuid()
  }
}