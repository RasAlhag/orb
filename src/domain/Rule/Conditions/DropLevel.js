import HasOperator from "./Behaviour/HasOperator"

export default class DropLevel extends HasOperator {
  static min = 0
  static max = 100

  constructor(props) {
    super(props)
    this.typeName = 'DropLevel'
  }
}