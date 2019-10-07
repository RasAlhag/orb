import HasOperator from "./Behaviour/HasOperator"

export default class LinkedSockets extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'LinkedSockets'
    this.min = 0
    this.max = 6
  }
}