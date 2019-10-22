import HasOperator from "./Behaviour/HasOperator"

export default class Quality extends HasOperator {
  static min = 0
  static max = 20
  constructor(props) {
    super(props)
    this.typeName = 'Quality'
  }
}