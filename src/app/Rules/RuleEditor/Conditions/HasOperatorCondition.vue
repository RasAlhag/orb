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
      v-text-field(
        solo,
        label="Значение", hide-details
        v-model="value.value", type="number", :min="value.min", :max="value.max"
      ).mx-2
    v-flex(shrink)
      v-btn(large color="error", @click="$emit('remove', value)", icon).fill-height
        v-icon mdi-close
</template>
<script>
  import HasOperator from '../../../../Domain/Conditions/Behaviour/HasOperator'

  export default {
    name: 'OHasOperatorCondition',
    props: {
      value: {
        type: HasOperator,
        default: null
      }
    },
    data: () => ({
    }),
    computed: {
      operators() {
        return this.value.constructor.getOperators()
      }
    },
  }
</script>

<style scoped>

</style>