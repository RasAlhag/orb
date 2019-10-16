import ColorStyle from "./ColorStyle"

export default class SetBackgroundColor extends ColorStyle {
  constructor({value}) {
    super({value})
    this.typeName = 'SetBackgroundColor'
  }
}