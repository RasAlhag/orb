<template lang="pug">
  v-layout(v-if="condition")
    v-flex(xs3)
      v-select(
        solo,
        label="Оператор",
        :items="operators",
        v-model="condition.operator"
      ).mx-2
    v-flex
      v-text-field(
        solo,
        label="Значение", hide-details
        v-model="condition.value", type="number", :min="condition.min", :max="condition.max"
      ).mx-2
    v-flex(shrink)
      template(v-if="!value")
        v-btn(large color="success", @click="$emit('input', condition)", icon).fill-height ok
      template(v-else)
        v-btn(large color="error", @click="$emit('remove', condition)", icon).fill-height
          v-icon mdi-close
</template>
<script>
  import HasOperator from '../../../../Domain/Conditions/Behaviour/HasOperator'

  export default {
    name: 'HasOperatorCondition',
    props: {
      type: {
        type: Function,
        required: true,
      },
      value: {
        type: HasOperator,
        default: null
      }
    },
    data: () => ({
      condition: null
    }),
    computed: {
      operators() {
        return HasOperator.getOperators()
      }
    },
    beforeMount() {
      this.condition = this.value || new this.type({operator: this.operators[0], value: 1})
    }
  }
</script>

<style scoped>

</style>