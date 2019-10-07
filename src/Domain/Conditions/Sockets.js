import HasOperator from "./Behaviour/HasOperator"

export default class Sockets extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'Sockets'
    this.min = 0
    this.max = 6
  }
}