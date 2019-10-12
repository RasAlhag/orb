import AbstractCondition from "./Behaviour/AbstractCondition"
import PartialMatch from "./Behaviour/PartialMatch"

export default class Class extends PartialMatch {
  constructor({value}) {
    super({value})
    this.typeName = 'Class'
  }

  static create () {
    return new this({value: null})
  }

  static getVariants() {
    return [
      'LifeFlask',
      'ManaFlask',
      'HybridFlask',
      'Currency',
      'Amulet',
      'Ring',
      'Claw',
      'Dagger',
      'Wand',
      'One Hand Sword',
      'Thrusting One Hand Sword',
      'One Hand Axe',
      'One Hand Mace',
      'Bow',
      'Staff',
      'Two Hand Sword',
      'Two Hand Axe',
      'Two Hand Mace',
      'Active Skill Gem',
      'Support Skill Gem',
      'Quiver',
      'Belt',
      'Gloves',
      'Boots',
      'Body Armour',
      'Helmet',
      'Shield',
      'StackableCurrency',
      'QuestItem',
      'Sceptre',
      'UtilityFlask',
      'UtilityFlaskCritical',
      'Map',
      'Unarmed',
      'FishingRod',
      'MapFragment',
      'HideoutDoodad',
      'Microtransaction',
      'Jewel',
      'DivinationCard',
      'LabyrinthItem',
      'LabyrinthTrinket',
      'LabyrinthMapItem',
      'MiscMapItem',
      'Leaguestone',
      'PantheonSoul',
      'UniqueFragment',
      'AbyssJewel',
      'IncursionItem',
      'DelveSocketableCurrency',
      'Incubator',
      'UniqueShard',
      'UniqueShardBase',
      'Rune Dagger',
      'Warstaff',
      'DelveStackableSocketableCurrency',
    ]
  }
}