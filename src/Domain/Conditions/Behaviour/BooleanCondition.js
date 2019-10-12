import AbstractCondition from "./AbstractCondition"

export default class BooleanCondition extends AbstractCondition {
  constructor({value}) {
    super({value: !!value});
  }
}