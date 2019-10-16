import HasOperator from "./Behaviour/HasOperator"

export default class Quality extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'Quality'
    this.min = 0
    this.max = 20
  }
}