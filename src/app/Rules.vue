<template lang="pug">
  div
    div {{rules}}
    v-btn(@click="newRule") AddRule
</template>
<script>
  import RuleEditor from "./Rules/RuleEditor"
  import Rule from "../Domain/Rule"

  export default {
    name: "ORules",
    data: () => ({
      rules: []
    }),
    methods: {
      newRule() {
        this.$modal.open({
          options: {persistent: true, width: 800},
          props: {
            rule: new Rule({name: 'Новое Правило', conditions: [], styles: []})
          },
          component: RuleEditor,
          on: {
            input: (rule) => {
              this.rules.push(rule)
            }
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>