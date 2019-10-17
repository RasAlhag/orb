import HasOperator from "./Behaviour/HasOperator"

export default class Sockets extends HasOperator {
  static min = 0
  static max = 6
  constructor(props) {
    super(props)
    this.typeName = 'Sockets'
  }
}