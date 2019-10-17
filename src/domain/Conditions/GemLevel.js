import HasOperator from "./Behaviour/HasOperator"

export default class GemLevel extends HasOperator {
  static min = 1
  static max = 17

  constructor(props) {
    super(props)
    this.typeName = 'GemLevel'
  }
}