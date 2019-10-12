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
      "Life Flasks",
      "Mana Flasks",
      "Hybrid Flasks",
      "Currency",
      "Amulets",
      "Rings",
      "Claws",
      "Daggers",
      "Wands",
      "One Hand Swords",
      "Thrusting One Hand Swords",
      "One Hand Axes",
      "One Hand Maces",
      "Bows",
      "Staves",
      "Two Hand Swords",
      "Two Hand Axes",
      "Two Hand Maces",
      "Active Skill Gems",
      "Support Skill Gems",
      "Quivers",
      "Belts",
      "Gloves",
      "Boots",
      "Body Armours",
      "Helmets",
      "Shields",
      "Stackable Currency",
      "Quest Items",
      "Sceptres",
      "Utility Flasks",
      "Critical Utility Flasks",
      "Maps",
      "Unarmed",
      "Fishing Rods",
      "Map Fragments",
      "Hideout Doodads",
      "Microtransactions",
      "Jewel",
      "Divination Card",
      "Labyrinth Item",
      "Labyrinth Trinket",
      "Labyrinth Map Item",
      "Misc Map Items",
      "Leaguestones",
      "Pantheon Soul",
      "Piece",
      "Abyss Jewel",
      "Incursion Item",
      "Delve Socketable Currency",
      "Incubator",
      "Shard",
      "Shard Heart",
      "Rune Dagger",
      "Warstaff",
      "Delve Stackable Socketable Currency"
    ]
  }
}