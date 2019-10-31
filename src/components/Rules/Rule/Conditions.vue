<template lang="pug">
  div
    v-menu(absolute, transition="slide-x-transition", offset-y)
      template(v-slot:activator="{on}")
        v-btn(
          v-if="mounted",
          v-on="on",
          color="success",
          fab, absolute,
          top, left,
          dark, small,
        )
          v-icon mdi-plus
      v-layout(wrap).grey.darken-3
        v-flex(v-for="(conditions, group) in conditionsGrouped")
          v-list(dense)
            v-subheader {{group}}
            v-list-item(
              v-for="(condition, index) in conditions",
              :key="condition.key",
              @click="createCondition(condition)"
            )
              v-list-item-content
                | {{condition.key}}
    vue-custom-scrollbar(class="scroll-area")
      draggable(v-model="rule.conditions",  handle=".handle")
        transition-group(name="flip-list")
          v-card(
            v-for="condition in rule.conditions",
            :key="condition.id"
          ).my-1.mx-1
            v-card-text
              v-layout(
                align-center
              ).px-0.mx-0.py-1
                v-flex(xs2)
                  v-layout.my-1
                    v-icon(color="grey ").handle.pointer mdi-drag
                    span.subtitle-1 {{resolveCnd(condition).key}}
                v-flex(xs10)
                  component(
                    :is="resolveComponent(condition)",
                    :type="resolveModel(condition)",
                    :value="condition",
                    @remove="removeCondition"
                  )
</template>
<script>
  import Rule from '../../../domain/Rule'
  import conditions from '../../../domain/Rule/Conditions'
  import draggable from 'vuedraggable'
  import VueCustomScrollbar from 'vue-custom-scrollbar'
  import _ from 'lodash'
  import PartialMatch from "../../../domain/Rule/Conditions/Behaviour/PartialMatch"
  import Boolean from "../../../domain/Rule/Conditions/Behaviour/Boolean"
  import HasOperator from "../../../domain/Rule/Conditions/Behaviour/HasOperator"

  export default {
    name: 'OConditions',
    components: {draggable, VueCustomScrollbar},
    props: {
      rule: {
        type: Rule,
        required: true,
      },
    },
    data: () => ({
      cnd: null,
      mounted: false,
      selectedCnd: null,
      conditions
    }),
    computed: {
      conditionsToSelect() {
        return this.conditions.slice().sort((cndA, cndB) => cndA.key > cndB.key ? 1 : -1)
      },
      conditionsGrouped() {
        let groups = _.groupBy(this.conditionsToSelect, condition => {
          switch (true) {
            case condition.model.prototype instanceof HasOperator:
              return 'Range'
            case condition.model.prototype instanceof PartialMatch:
              return 'Name'
            default:
              return 'Other'
          }
        })

        return {
          Range: groups.Range,
          Name: groups.Name,
          Other: groups.Other
        }
      }
    },
    methods: {
      createCondition(e) {
        this.addCondition(e.model.create())
      },
      addCondition(condition) {
        this.rule.conditions.push(condition)
        this.$nextTick(() => {
          this.cnd = null
        })
      },
      resolveComponent(condition) {
        return this.conditions.reduce((carry, current) => {
          return carry || (condition instanceof current.model ? current.component : null)
        }, null)
      },
      resolveModel(condition) {
        return this.conditions.reduce((carry, current) => {
          return carry || condition instanceof current.model ? current.model : null
        }, null)
      },
      resolveCnd(condition) {
        return this.conditions.find(cnd => condition instanceof cnd.model)
      },
      removeCondition(condition) {
        this.$delete(this.rule.conditions, this.rule.conditions.indexOf(condition))
      },
    },
    mounted() {
      this.mounted = true
    }
  }
</script>
<style scoped>
  .scroll-area {
    max-height: calc(100vh - 110px);
  }
</style>