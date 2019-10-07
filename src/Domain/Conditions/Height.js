import HasOperator from "./Behaviour/HasOperator"

export default class Height extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'Height'
    this.min = 1
    this.max = 4
  }
}