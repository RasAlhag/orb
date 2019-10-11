<template lang="pug">
  div
    v-layout(v-for="condition in rule.conditions").px-0.mx-0
      v-flex
        v-layout(style="height: 62px")
          v-flex(xs5)
            v-select(
              :items="conditionsToSelect",
              :value="resolveCnd(condition)",
              readonly, hide-details, solo,
            ).mx-2
          v-flex(xs7)
            component(:is="resolveComponent(condition)", :type="resolveModel(condition)", :value="condition", @remove="removeCondition")
    v-layout
      v-flex(xs5)
        v-select(
          label="Новое условие",
         :items="conditionsToSelect",
          hide-details, solo,
          @input="createCondition",
          v-model="cnd",
          background-color="success",
        ).mx-2
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
      createCondition (e) {
        console.log(e.component.name)
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

    }
  }
</script>
<style scoped>

</style>