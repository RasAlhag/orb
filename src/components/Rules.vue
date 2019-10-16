<template lang="pug">
  div
    v-layout(wrap)
      v-flex(xs12, sm6, md4, lg3, xl2, v-for="rule in rules", :key="rule.id").px-2.py-2
        v-card
          v-toolbar
            v-toolbar-title {{rule.name}}
            v-spacer
            v-toolbar-items
              v-btn(icon, small, @click="edit(rule)")
                v-icon(small) mdi-pencil
    v-btn(@click="newRule") AddRule
</template>
<script>
  import RuleEditor from "./Rules/RuleEditor"
  import Rule from "../domain/Rule"
  import _ from 'lodash'

  export default {
    name: "ORules",
    data: () => ({
      rules: [],
      editorOptions: {persistent: true, width: 1200}
    }),
    methods: {
      newRule() {
        this.$modal.open({
          options: this.editorOptions,
          props: {
            rule: new Rule({name: 'Новое Правило', conditions: [],})
          },
          component: RuleEditor,
          on: {
            input: (rule) => {
              this.rules.push(rule)
            }
          }
        })
      },
      edit(rule) {
        this.$modal.open({
          options: this.editorOptions,
          props: {rule: _.cloneDeep(rule)},
          component: RuleEditor,
          on: {
            input: (rule) => {
              let index = this.rules.findIndex(r => rule.id === r.id)
              this.$set(this.rules, index, rule)
            }
          }
        })
      }
    },

  }
</script>

<style scoped>

</style>