<template lang="pug">
  v-layout(v-if="value")
    v-flex(xs3)
      v-select(
        solo,
        label="Оператор",
        :items="operators",
        v-model="value.operator"
      ).mx-2
    v-flex
      v-select(
        solo,
        label="Редкость",
        :items="rarityVariants",
        v-model="value.value"
      ).mx-2
    v-flex(shrink)
      v-btn(large color="error", @click="$emit('remove', value)", icon).fill-height
        v-icon mdi-close

</template>
<script>
  import Rarity from "../../../../Domain/Conditions/Rarity"

  export default {
    name: "ORarityCondition",
    props: {
      value: {
        type: Rarity,
        required: true
      }
    },
    computed: {
      rarityVariants () {
        return this.value.constructor.getRarityVariants()
      },
      operators() {
        return this.value.constructor.getOperators()
      }
    }
  }
</script>

<style scoped>

</style>