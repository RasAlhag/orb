import ColorStyle from "./ColorStyle"

export default class SetBackgroundColor extends ColorStyle {
  static cssName = 'background-color'
  constructor({value}) {
    super({value})
    this.typeName = 'SetBackgroundColor'
  }
}