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
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: "ORules",
    data: () => ({
      editorOptions: {persistent: true, width: 1200}
    }),
    computed: {
      ...mapGetters({
        rules: 'getRules'
      })
    },
    methods: {
      ...mapMutations({
        storagePush: 'push',
        storageDelete: 'delete',
        storageUpdate: 'update',
      }),
      addRule(rule) {
        this.storagePush({
          item: rule,
          table: 'rules'
        })
      },
      updateRule(rule) {
        this.storageUpdate({
          item: rule,
          table: 'rules'
        })
      },
      newRule() {
        this.$modal.open({
          options: this.editorOptions,
          props: {
            rule: new Rule({name: 'Новое Правило', conditions: [],})
          },
          component: RuleEditor,
          on: {input: rule => this.addRule(rule)}
        })
      },
      edit(rule) {
        this.$modal.open({
          options: this.editorOptions,
          props: {rule: _.cloneDeep(rule)},
          component: RuleEditor,
          on: {
            input: rule => this.updateRule(rule)
          }
        })
      }
    },

  }
</script>

<style scoped>

</style>