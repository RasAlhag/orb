import Boolean from "./Behaviour/Boolean"

export default class Identified extends Boolean {
  constructor({value}) {
    super({value})
    this.typeName = 'Identified'
  }
}