<template lang="pug">
  div
    v-layout(v-if="value", align-center, @mouseover="")
      v-flex(xs2)
        v-select(:value="equals", :items="modes", solo, hide-details, append-icon="", @input="updateEquals").text-center
      v-flex.px-4
        v-slider(
          color="default",
          thumb-color="primary",
          v-if="equals",
          :tick-labels="rarityLabels",
          :value="equalsValue", :min="min", :max="max", @input="updateEqualsValue", hide-details
        )
        v-range-slider(
          v-else,
          :tick-labels="rarityLabels",
          :value="rangeValue", :min="min", :max="max", @input="updateRangeValue", hide-details
        )
      v-flex(shrink)
        v-btn(large color="error", @click="$emit('remove', value)", icon).fill-height
          v-icon mdi-close
</template>
<script>
  import Rarity from "../../../../domain/Rule/Conditions/Rarity"

  export default {
    name: 'ORarityCondition',
    props: {
      value: {
        type: Rarity,
        required: true
      }
    },
    data: () => ({
      modes: [
        {text: 'Equals', value: true},
        {text: 'Between', value: false},
      ]
    }),
    computed: {
      equals() {
        return this.value.value.from === this.value.value.to
      },
      rangeValue() {
        return [this.value.value.from, this.value.value.to]
      },
      min() {
        return this.value.min()
      },
      max() {
        return this.value.max()
      },
      equalsValue() {
        return this.value.value.from
      },
      rarityLabels() {
        return this.value.constructor.getRarityVariants()
      }
    },
    methods: {
      updateRangeValue([from, to]) {
        this.value.value = {from, to}
      },
      updateEqualsValue(value) {
        this.value.value = {from: value, to: value}
      },
      updateEquals(value) {
        if (!value) {
          this.value.value = {from: this.min, to: this.max}
        } else {
          this.value.value = {from: this.min, to: this.min}
        }
      }
    }
  }
</script>

<style scoped>

</style>