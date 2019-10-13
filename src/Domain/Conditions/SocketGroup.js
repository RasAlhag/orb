import AbstractCondition from "./Behaviour/AbstractCondition"

export default class SocketGroup extends AbstractCondition {
  constructor(props) {
    super(props)
    this.typeName = 'SocketGroup'
  }

  static getVariants() {
    return [
      {text: 'None', value: null, color: 'grey darken-4'},
      {text: 'Red', value: 'R', color: 'error'},
      {text: 'Green', value: 'G', color: 'success'},
      {text: 'Blue', value: 'B', color: 'primary'},
      {text: 'White', value: 'W', color: 'grey lighten-1'},
    ]
  }

  static create() {
    return new this({value: [[]]})
  }

  toString() {
    return `  ${this.typeName} ${this.value.map(group => group.join('')).join(' ')}`
  }

}