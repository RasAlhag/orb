import Boolean from "./Behaviour/Boolean"

export default class SynthesisedItem extends Boolean {
  constructor({value}) {
    super({value})
    this.typeName = 'SynthesisedItem'
  }
}