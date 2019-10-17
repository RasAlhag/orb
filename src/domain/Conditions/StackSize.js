import HasOperator from './Behaviour/HasOperator'

export default class StackSize extends HasOperator {
  static min = 1
  static max = 100
  constructor(props) {
    super(props)
    this.typeName = 'StackSize'
  }
}