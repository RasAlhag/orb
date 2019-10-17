import HasOperator from "./Behaviour/HasOperator"

export default class Width extends HasOperator {
  static min = 1
  static max = 2

  constructor(props) {
    super(props)
    this.typeName = 'Width'
  }
}