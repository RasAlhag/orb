<template lang="pug">
  div
    v-layout(v-for="condition in rule.conditions").px-0.mx-0
      v-flex
        v-layout(style="height: 62px")
          v-flex(xs5)
            v-select(
              solo,
              label="Тип условия"
              :items="conditionsToSelect",
              :value="resolveCnd(condition)",
              readonly,
              hide-details
            ).mx-2
          v-flex(xs7)
            component(:is="resolveComponent(condition)", :type="resolveModel(condition)", :value="condition", @remove="removeCondition")
    v-layout
      v-flex(xs5)
        v-select(
          solo,
          label="Тип условия"
          :items="conditionsToSelect",
          v-model="cnd"
        ).mx-2
      v-flex(v-if="cnd", xs7)
        component(:is="cnd.component", :type="cnd.model", @input="addCondition")
</template>
<script>
  import Rule from '../../../Domain/Rule'
  import conditions from '../../../Domain/Conditions'

  export default {
    name: 'OConditions',
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
        })
      }
    },
    methods: {
      addCondition(condition) {
        this.rule.conditions.push(condition)
        this.cnd = null
      },
      resolveComponent(condition) {
        return this.conditions.reduce((carry, current) => {
          return carry || condition instanceof current.model ? current.component : null
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

</style>