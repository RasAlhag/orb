<template lang="pug">
  div
    o-condition-picker(@select="createCondition($event)")
      template(v-slot="{on}")
        v-btn(
          v-if="mounted",
          v-on="on",
          color="success",
          fab, absolute,
          top, left,
          dark, small,
        )
          v-icon mdi-plus
    vue-custom-scrollbar.scroll-area
      draggable(
        v-model="rule.conditions",
        handle=".handle"
      )
        transition-group(name="flip-list")
          v-card(
            v-for="(condition, index) in rule.conditions",
            :key="condition.id"
          ).mt-1.mx-1
            v-toolbar(flat).pointer.handle
              v-toolbar-title {{resolveCnd(condition).key}}
              v-spacer
              v-btn(icon, @click="removeCondition(condition)")
                v-icon mdi-close
            v-card-text
              component(
                :is="resolveComponent(condition)",
                :type="resolveModel(condition)",
                :value="condition",
                @input="updateCondition(index, $event)"
              )
</template>
<script>
  import Rule from '../../../domain/Rule'
  import {resolveComponent, resolveModel, resolveCnd, conditionsGrouped} from '../../../domain/Rule/Conditions'
  import draggable from 'vuedraggable'
  import VueCustomScrollbar from 'vue-custom-scrollbar'
  import {mapMutations} from 'vuex'
  import OConditionPicker from "./ConditionPicker"

  export default {
    name: 'OConditions',
    components: {OConditionPicker, draggable, VueCustomScrollbar},
    props: {
      rule: {
        type: Rule,
        required: true,
      },
    },
    data: () => ({
      mounted: false,
      selectedCnd: null,
      conditionsGrouped,
    }),
    computed: {},
    methods: {
      ...mapMutations({
        storageUpdate: 'update'
      }),
      updateRule(rule) {
        this.storageUpdate({
          item: rule,
          table: 'rules',
        })
      },
      updateCondition(index, value) {
        this.rule.conditions[index] = value
        this.updateRule(this.rule)
      },
      createCondition(e) {
        this.addCondition(e.model.create())
      },
      addCondition(condition) {
        this.rule.conditions.push(condition)
      },
      removeCondition(condition) {
        this.$delete(this.rule.conditions, this.rule.conditions.indexOf(condition))
      },
      resolveComponent,
      resolveModel,
      resolveCnd,
    },
    mounted() {
      this.mounted = true
    }
  }
</script>