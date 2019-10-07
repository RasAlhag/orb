import HasOperator from "./Behaviour/HasOperator"

export default class Width extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'Width'
    this.min = 1
    this.max = 2
  }
}