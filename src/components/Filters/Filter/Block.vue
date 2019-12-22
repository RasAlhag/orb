<template lang="pug">
  v-card(color="grey darken-4").ma-1
    v-toolbar(elevation="1")
      v-toolbar-title {{value.prefix}}
      v-spacer
      v-toolbar-items
        o-condition-picker(@select="createCondition($event)")
          template(v-slot="{on}")
            v-btn(v-on="on", text)
              v-icon mdi-plus
    vue-custom-scrollbar.scroll-area
      draggable(
        v-model="value.conditions",
        handle=".handle"
      )
        transition-group(name="flip-list")
          v-card(
            v-for="(condition, index) in value.conditions",
            :key="condition.id"
          ).mt-1.mx-1
            v-toolbar(flat).pointer.handle
              v-toolbar-title {{resolveCnd(condition).key}}
              v-spacer
              v-btn(icon, @click="removeCondition(condition)")
                v-icon mdi-close
            v-card-text
              component.ma-1(
                :is="resolveComponent(condition)",
                :type="resolveModel(condition)",
                :value="condition",
                @input="updateCondition(index, $event)"
              )
</template>

<script>
  import Block from '../../../domain/Filter/Block'
  import VueCustomScrollbar from 'vue-custom-scrollbar'
  import draggable from 'vuedraggable'
  import {resolveComponent, resolveModel, resolveCnd, conditionsGrouped} from '../../../domain/Rule/Conditions'
  import OConditionPicker from "../../Rules/Rule/ConditionPicker"

  export default {
    name: "OrbFilterBlock",
    components: {OConditionPicker, VueCustomScrollbar, draggable},
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