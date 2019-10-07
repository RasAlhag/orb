import HasOperator from "./Behaviour/HasOperator"

export default class MapTier extends HasOperator {
  constructor(props) {
    super(props)
    this.typeName = 'MapTier'
    this.min = 1
    this.max = 17
  }
}