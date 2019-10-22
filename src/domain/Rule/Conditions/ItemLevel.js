import HasOperator from "./Behaviour/HasOperator"

export default class ItemLevel extends HasOperator {
  static min = 0
  static max = 100
  constructor(props) {
    super(props)
    this.typeName = 'ItemLevel'
  }
}