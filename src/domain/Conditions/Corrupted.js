import Boolean from "./Behaviour/Boolean"

export default class Corrupted extends Boolean {
  constructor({value}) {
    super({value})
    this.typeName = 'Corrupted'
  }
}