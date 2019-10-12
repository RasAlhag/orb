import Boolean from "./Behaviour/Boolean"

export default class AnyEnchantment extends Boolean {
  constructor({value}) {
    super({value})
    this.typeName = 'AnyEnchantment'
  }
}