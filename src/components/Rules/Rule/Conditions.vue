<template lang="pug">
  div.fill-height
    div.grey--text.text--darken-1     // conditions
    draggable(
      v-model="conditions",
      handle=".handle"
    )
      transition-group(name="flip-list")
        v-layout(
          v-for="(condition, index) in conditions",
          :key="condition.id",
          @click="edit(condition, index)",
          align-center,
          ref="conditionString"
        ).condition.pointer.handle
          v-flex
            span(v-if="condition.toString().trim()") {{condition}}
            span(v-else).grey--text.text--darken-2     // {{resolveCnd(condition).key}}
          v-spacer
          v-flex(shrink).px-1.hide
            v-icon( @click.stop="removeCondition(condition)", color="grey darken-1") mdi-close
    div
      o-condition-picker(@select="createCondition($event)")
        template(v-slot="{on}")
          v-btn(
            v-if="mounted",
            v-on="on",
            block,
            color="grey",
            top, left,
            text,
            dark, small,
          )
            v-icon mdi-plus
</template>
<script>
  import {resolveComponent, resolveModel, resolveCnd, conditionsGrouped} from '../../../domain/Rule/Conditions'
  import draggable from 'vuedraggable'
  import VueCustomScrollbar from 'vue-custom-scrollbar'
  import {mapMutations} from 'vuex'
  import OConditionPicker from "./ConditionPicker"
  import _ from 'lodash'

  export default {
    name: 'OConditions',
    components: {OConditionPicker, draggable, VueCustomScrollbar},
    props: {
      conditions: {
        type: Array,
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
        this.conditions[index] = value
        this.updateRule(this.rule)
      },
      createCondition(e) {
        this.addCondition(e.model.create())
      },
      addCondition(condition) {
        this.conditions.push(condition)
      },
      removeCondition(condition) {
        this.$delete(this.conditions, this.conditions.indexOf(condition))
      },
      resolveComponent,
      resolveModel,
      resolveCnd,
      edit(condition, index) {

        this.$modal.open({
          component: this.resolveComponent(condition),
          props: {value: condition, type: this.resolveCnd(condition)},
          options: {},
          on: {
            input: _.debounce((value) => this.updateCondition(index, value), 1000)
          }
        });
      }
    },
    mounted() {
      this.mounted = true
    }
  }
</script>

<style>
  div.condition {
    transition: all .3s;
  }

  div.condition .hide {
    opacity: 0;
    transition: all .3s;
  }

  div.condition:hover {

    background-color: #222222;
  }

  div.condition:hover .hide {
    opacity: 1;
  }
</style>