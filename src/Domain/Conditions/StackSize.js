import HasOperator from "./Behaviour/HasOperator"

export default class StackSize extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'StackSize'
    this.min = 1
    this.max = Infinity
  }
}