<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-text-field(
        v-model="searchString",
        solo, flat, hide-details,
        prepend-inner-icon="mdi-magnify", placeholder="Искать"
      )
      template(v-slot:extension)
    div(style="position: relative")
      v-btn(
        @click="newRule"
        color="success",
        fab, absolute,
        top, left,
        dark, small,
      ).mt-n1
        v-icon mdi-plus
      orb-rule-preview(
        v-for="rule in rules",
        :key="rule.id",
        v-masonry-tile,
        :rule="rule",
        @remove="removeRule(rule)"
      )
</template>
<script>
  import RuleEditor from "./Rules/Rule"
  import Rule from "../domain/Rule"
  import OrbRulePreview from './Rules/Rule/Preview'
  import _ from 'lodash'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'OrbRules',
    components: {OrbRulePreview},
    data: () => ({
      searchString: null,
      editorOptions: {persistent: true, width: 1200}
    }),
    computed: {
      ...mapGetters(['getRules']),
      rules() {
        if (this.searchString) {
          return this.getRules.filter(rule => {
            return rule.name.toLowerCase()
              .includes(this.searchString.toLowerCase())
          })
        }
        return this.getRules
      }
    },
    methods: {
      ...mapMutations({
        storagePush: 'push',
        storageDelete: 'delete',
        storageUpdate: 'update',
      }),
      removeRule(rule) {
        this.storageDelete({
          item: rule,
          table: 'rules'
        })
      },
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
        let rule = new Rule({name: 'Новое Правило', conditions: []})
        this.addRule(rule)
        this.$router.push({
          name: 'rule',
          params: {id: rule.id}
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