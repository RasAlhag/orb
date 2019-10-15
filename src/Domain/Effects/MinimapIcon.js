export default class MinimapIcon {
  constructor({size, color, shape}) {
    this.size = size
    this.color = color
    this.shape = shape
    this.typeName = 'MinimapIcon'
  }

  static create() {
    return new this({
      color: this.colorVariants()[0],
      shape: this.shapeVariants()[0],
      size: 1,
    })
  }

  toString() {
    return `  ${this.typeName} ${this.size} ${this.color} ${this.shape}`
  }

  static shapeVariants() {
    return ['Circle', 'Diamond', 'Hexagon', 'Square', 'Star', 'Triangle']
  }

  static colorVariants() {
    return ['Red', 'Green', 'Blue', 'Brown', 'White', 'Yellow']
  }

  static sizeVariants() {
    return [
      'Large',
      'Medium',
      'Small',
    ]
  }
}