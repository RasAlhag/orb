import ColorStyle from "./ColorStyle"

export default class SetTextColor extends ColorStyle {
  static cssName = 'color'
  constructor({value}) {
    super({value})
    this.typeName = 'SetTextColor'
  }
}