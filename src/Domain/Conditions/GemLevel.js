import HasOperator from "./Behaviour/HasOperator"

export default class GemLevel extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'GemLevel'
    this.min = 1
    this.max = 17
  }
}