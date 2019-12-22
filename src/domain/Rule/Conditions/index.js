import DropLevel from "./DropLevel"
import ItemLevel from "./ItemLevel"
import HasOperatorCondition from "../../../components/Rules/Rule/Conditions/HasOperatorCondition"
import GemLevel from "./GemLevel"
import Height from "./Height"
import LinkedSockets from "./LinkedSockets"
import MapTier from "./MapTier"
import Quality from "./Quality"
import Sockets from "./Sockets"
import StackSize from "./StackSize"
import Width from "./Width"
import Rarity from "./Rarity"
import RarityCondition from "../../../components/Rules/Rule/Conditions/RarityCondition"
import Class from "./Class"
import PartialMatchCondition from "../../../components/Rules/Rule/Conditions/PartialMatchCondition"
import BaseType from "./BaseType"
import HasExplicitMod from "./HasExplicitMod"
import Corrupted from "./Corrupted"
import BooleanCondition from "../../../components/Rules/Rule/Conditions/BooleanCondition"
import AnyEnchantment from "./AnyEnchantment"
import HasEnchantment from "./HasEnchantment"
import Prophecy from "./Prophecy"
import SocketGroup from "./SocketGroup"
import SocketGroupCondition from "../../../components/Rules/Rule/Conditions/SocketGroupCondition"
import HasOperator from "./Behaviour/HasOperator"
import PartialMatch from "./Behaviour/PartialMatch"
import _ from 'lodash'

const map = [
  {
    key: 'DropLevel',
    model: DropLevel,
    component: HasOperatorCondition,
  },
  {
    key: 'GemLevel',
    model: GemLevel,
    component: HasOperatorCondition,
  },
  {
    key: 'Height',
    model: Height,
    component: HasOperatorCondition,
  },
  {
    key: 'ItemLevel',
    model: ItemLevel,
    component: HasOperatorCondition,
  },
  {
    key: 'LinkedSockets',
    model: LinkedSockets,
    component: HasOperatorCondition,
  },
  {
    key: 'MapTier',
    model: MapTier,
    component: HasOperatorCondition,
  },
  {
    key: 'Quality',
    model: Quality,
    component: HasOperatorCondition,
  },
  {
    key: 'Sockets',
    model: Sockets,
    component: HasOperatorCondition,
  },
  {
    key: 'StackSize',
    model: StackSize,
    component: HasOperatorCondition,
  },
  {
    key: 'Width',
    model: Width,
    component: HasOperatorCondition,
  },
  {
    key: 'Rarity',
    model: Rarity,
    component: RarityCondition,
  },
  {
    key: 'Class',
    model: Class,
    component: PartialMatchCondition,
  },
  {
    key: 'BaseType',
    model: BaseType,
    component: PartialMatchCondition,
  },
  {
    key: 'HasExplicitMod',
    model: HasExplicitMod,
    component: PartialMatchCondition,
  },
  {
    key: 'Prophecy',
    model: Prophecy,
    component: PartialMatchCondition,
  },
  {
    key: 'HasEnchantment',
    model: HasEnchantment,
    component: PartialMatchCondition,
  },
  {
    key: 'Corrupted',
    model: Corrupted,
    component: BooleanCondition,
  },
  {
    key: 'AnyEnchantment',
    model: AnyEnchantment,
    component: BooleanCondition,
  },
  {
    key: 'SocketGroup',
    model: SocketGroup,
    component: SocketGroupCondition,
  },
]


export default map

export const resolveComponent = (condition) => {
  return map.reduce((carry, current) => {
    return carry || (condition instanceof current.model ? current.component : null)
  }, null)
}

export const resolveModel = (condition) => {
  return map.reduce((carry, current) => {
    return carry || condition instanceof current.model ? current.model : null
  }, null)
}

export const resolveCnd = (condition) => {
  return map.find(cnd => condition instanceof cnd.model)
}

export const conditionsToSelect = map.slice().sort((cndA, cndB) => cndA.key > cndB.key ? 1 : -1)

export const conditionsGrouped = (({Range, Name, Other}) => ({Range, Name, Other}))(_.groupBy(conditionsToSelect, condition => {
    switch (true) {
      case condition.model.prototype instanceof HasOperator:
        return 'Range'
      case condition.model.prototype instanceof PartialMatch:
        return 'Name'
      default:
        return 'Other'
    }
  }
))


export const wakeUp = (data) => {
  data.__proto__ = map.find(info => info.key === data.typeName).model.prototype
}