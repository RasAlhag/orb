import ColorStyle from "./ColorStyle"

export default class SetBorderColor extends ColorStyle {
  constructor({value}) {
    super({value})
    this.typeName = 'SetBorderColor'
  }
}