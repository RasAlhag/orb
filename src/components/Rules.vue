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
      )
        v-icon mdi-plus
      vue-custom-scrollbar(class="scroll-area")
        orb-rule-preview(
          v-for="rule in filteredRules",
          :key="rule.id",
          v-masonry-tile,
          :rule="rule",
          @remove="removeRule(rule)",
        )
</template>
<script>
  import Rule from "../domain/Rule"
  import OrbRulePreview from './Rules/Rule/Preview'
  import {mapMutations} from 'vuex'
  import VueCustomScrollbar from 'vue-custom-scrollbar'

  export default {
    name: 'OrbRules',
    components: {OrbRulePreview, VueCustomScrollbar},
    props: {
      rules: Array,
    },
    data: () => ({
      searchString: null,
    }),
    computed: {
      filteredRules() {
        if (this.searchString) {
          return this.rules.filter(rule => {
            return rule.name.toLowerCase()
              .includes(this.searchString.toLowerCase())
          })
        }
        return this.rules
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
    },
  }
</script>
<style scoped>
</style>