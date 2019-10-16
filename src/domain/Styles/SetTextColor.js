import ColorStyle from "./ColorStyle"

export default class SetTextColor extends ColorStyle {
  constructor({value}) {
    super({value})
    this.typeName = 'SetTextColor'
  }
}