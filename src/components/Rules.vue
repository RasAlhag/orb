<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat)
      v-layout(align-center)
        v-flex
          v-text-field(
            v-model="searchString",
            solo, flat, hide-details,
            prepend-inner-icon="mdi-magnify",
            placeholder="Искать"
          )
        v-flex(shrink)
          v-btn(
            @click="newRule",
            large,
            color="success darken-1"
          ).ml-2 Добавить правило
    div.mt-1.px-3
      orb-rule(
        v-for="rule in rules",
        :key="rule.id",
        v-masonry-tile,
        @edit="edit(rule)",
        :rule="rule"
      ).pointer.mx-1.my-1.elevation-5
</template>
<script>
  import RuleEditor from "./Rules/RuleEditor"
  import Rule from "../domain/Rule"
  import OrbRule from './Rules/Rule'
  import _ from 'lodash'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'OrbRules',
    components: {OrbRule},
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
    watch: {},
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
    mounted() {
    },
    beforeDestroy() {
    }
  }
</script>

<style scoped>

</style>