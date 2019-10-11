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
]