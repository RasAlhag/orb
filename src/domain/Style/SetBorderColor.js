import ColorStyle from "./ColorStyle"

export default class SetBorderColor extends ColorStyle {
  static cssName = 'border-color'
  constructor({value}) {
    super({value})
    this.typeName = 'SetBorderColor'
  }
}