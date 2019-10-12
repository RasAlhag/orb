import DropLevel from "./DropLevel"
import ItemLevel from "./ItemLevel"
import HasOperatorCondition from "../../app/Rules/RuleEditor/Conditions/HasOperatorCondition"
import GemLevel from "./GemLevel"
import Height from "./Height"
import LinkedSockets from "./LinkedSockets"
import MapTier from "./MapTier"
import Quality from "./Quality"
import Sockets from "./Sockets"
import StackSize from "./StackSize"
import Width from "./Width"
import Rarity from "./Rarity"
import RarityCondition from "../../app/Rules/RuleEditor/Conditions/RarityCondition"
import Class from "./Class"
import PartialMatchCondition from "../../app/Rules/RuleEditor/Conditions/PartialMatchCondition"
import BaseType from "./BaseType"
import HasExplicitMod from "./HasExplicitMod"
import Corrupted from "./Corrupted"
import BooleanCondition from "../../app/Rules/RuleEditor/Conditions/BooleanCondition"

export default [
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
    key: 'Corrupted',
    model: Corrupted,
    component: BooleanCondition,
  },
]