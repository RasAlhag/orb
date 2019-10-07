import HasOperator from "./Behaviour/HasOperator"

export default class ItemLevel extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'ItemLevel'
    this.min = 0
    this.max = 100
  }
}