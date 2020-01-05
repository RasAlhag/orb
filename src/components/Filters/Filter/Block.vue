<template lang="pug">
  code.green--text.black.mx-auto.my-0.d-block.fill-height.px-2
    span {{value.prefix}}
    o-conditions(:conditions="value.conditions")
</template>

<script>
  import Block from '../../../domain/Filter/Block'
  import VueCustomScrollbar from 'vue-custom-scrollbar'
  import draggable from 'vuedraggable'
  import {resolveComponent, resolveModel, resolveCnd, conditionsGrouped} from '../../../domain/Rule/Conditions'
  import OConditionPicker from "../../Rules/Rule/ConditionPicker"
  import OConditions from "../../Rules/Rule/Conditions"

  export default {
    name: "OrbFilterBlock",
    components: {OConditions, OConditionPicker, VueCustomScrollbar, draggable},
    props: {
      value: {
        type: Block,
        required: true,
      }
    },
    data: () => ({conditionsGrouped}),
    methods: {
      createCondition(e) {
        this.addCondition(e.model.create())
      },
      addCondition(condition) {
        this.value.conditions.push(condition)
      },
      removeCondition(condition) {
        this.$delete(this.value.conditions, this.value.conditions.indexOf(condition))
      },
      resolveComponent,
      resolveModel,
      resolveCnd,
    }
  }
</script>

<style scoped>

</style>