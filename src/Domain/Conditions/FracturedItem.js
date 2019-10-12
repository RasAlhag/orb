import Boolean from "./Behaviour/Boolean"

export default class FracturedItem extends Boolean {
  constructor({value}) {
    super({value})
    this.typeName = 'FracturedItem '
  }
}