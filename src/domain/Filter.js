import uuid from 'uuid/v4'
import os from 'os'
import Block from "./Filter/Block"

export default class Filter {

  /** @type string */
  id

  /** @type string */
  name

  /** @type {Block[]}  */
  blocks = []

  constructor({name}) {
    this.name = name
    this.id = uuid()
  }

  /**
   * @param {Block} block
   */
  addBlock(block) {
    this.blocks.push(block)
  }

  static wakeUp(data) {
    data.blocks.forEach(block => Block.wakeUp(block))
    data.__proto__ = this.prototype
  }

  toString(indent = '    ') {
    return this.blocks.map(block => block.toString(indent)).join(os.EOL)
  }
}