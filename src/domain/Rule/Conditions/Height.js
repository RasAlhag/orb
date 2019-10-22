import HasOperator from "./Behaviour/HasOperator"

export default class Height extends HasOperator {
  static min = 1
  static max = 4
  constructor(props) {
    super(props)
    this.typeName = 'Height'
  }
}