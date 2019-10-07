import HasOperator from "./Behaviour/HasOperator"

export default class DropLevel extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'DropLevel'
    this.min = 0
    this.max = 100
  }
}