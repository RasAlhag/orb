<template lang="pug">
  div
    vue-custom-scrollbar(class="scroll-area")
      draggable(v-model="rule.conditions",  handle=".handle")
        transition-group(name="flip-list")
          v-layout(
            v-for="condition in rule.conditions", :key="condition.id",
            align-center
          ).px-0.mx-0.py-1
            v-flex(xs2)
              v-layout.my-1
                v-icon(color="grey ").handle.pointer mdi-drag
                span.subtitle-1 {{resolveCnd(condition).key}}
            v-flex(xs10)
              component(:is="resolveComponent(condition)", :type="resolveModel(condition)", :value="condition", @remove="removeCondition")
    v-divider.my-4
    v-layout
      v-flex(xs4)
        v-select(
          dense,
          ref="conditionSelector",
          prepend-inner-icon="mdi-plus"
          label="Новое условие",
         :items="conditionsToSelect",
          hide-details, solo,
          @input="createCondition",
          v-model="cnd",
          background-color="success",
          append-icon="",
        ).mx-2
</template>
<script>
  import Rule from '../../../domain/Rule'
  import conditions from '../../../domain/Rule/Conditions'
  import draggable from 'vuedraggable'
  import VueCustomScrollbar from 'vue-custom-scrollbar'

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
      selectedCnd: null,
      conditions
    }),
    computed: {
      conditionsToSelect() {
        return this.conditions.map(cnd => {
          return {
            value: cnd,
            text: cnd.key
          }
        }).sort((cndA, cndB) => cndA.text > cndB.text ? 1 : -1)
      }
    },
    methods: {
      createCondition (e) {
        this.addCondition(e.model.create())
        this.$refs.conditionSelector.blur()
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

    }
  }
</script>
<style scoped>
  .scroll-area {
    max-height: calc(90vh - 300px);
    margin-right: -24px;
    padding-right: 16px;
  }
</style>