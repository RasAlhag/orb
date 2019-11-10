import AbstractEffect from "./AbstractEffect"

export default class MinimapIcon extends AbstractEffect {
  size
  color
  shape
  typeName = 'MinimapIcon'

  static colorVariants = [
    'Red', 'Green', 'Blue',
    'Brown', 'White', 'Yellow'
  ]

  static shapeVariants = [
    'Circle', 'Diamond', 'Hexagon',
    'Square', 'Star', 'Triangle'
  ]

  static sizeVariants = {
    '1': 'Large',
    '2': 'Medium',
    '3': 'Small'
  }

  constructor({size, color, shape}) {
    super()
    this.size = size
    this.color = color
    this.shape = shape
  }

  static create() {
    return new this({
      color: this.colorVariants[0],
      shape: this.shapeVariants[0],
      size: '1',
    })
  }

  toString(indent = '    ') {
    return `${super.toString(indent)} ${this.size} ${this.color} ${this.shape}`
  }
}