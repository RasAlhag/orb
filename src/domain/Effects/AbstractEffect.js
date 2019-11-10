import uuid from 'uuid/v4'

export default class AbstractEffect {
    id
    typeName
    constructor() {
        // eslint-disable-next-line no-undef
        this.id = uuid()
    }

    toString (indent = '    ') {
        return `${indent} ${this.typeName}`
    }
}