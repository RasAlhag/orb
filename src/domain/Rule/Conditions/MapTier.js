import HasOperator from "./Behaviour/HasOperator"

export default class MapTier extends HasOperator {
  static min = 1
  static max = 17
  constructor(props) {
    super(props)
    this.typeName = 'MapTier'
  }
}