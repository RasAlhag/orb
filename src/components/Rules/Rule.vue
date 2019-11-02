<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-icon(color="white", @click="$router.push({name: 'rules'})") mdi-arrow-left
      v-text-field.ml-4(
        v-model="rule.name",
        solo, flat, hide-details,
      )
      template(v-slot:extension)
        v-tabs(v-model="activeTab", right, background-color="transparent")
          v-tab(v-for="tab in tabs", :key="tab.title") {{tab.title}}
    div(style="position: relative")
      component(:is="tabs[activeTab].component", :rule="rule")
</template>
<script>
  import ResultCode from './Rule/ResultCode'
  import Conditions from './Rule/Conditions'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'OrbRuleEditor',
    props: {},
    data: () => ({
      activeTab: 0,
      rule: null,
      tabs: [
        {
          component: Conditions,
          title: 'Conditions'
        },
        {
          component: ResultCode,
          title: 'Code'
        },
      ]
    }),
    computed: {
      ...mapGetters({
        rules: 'getRules'
      })
    },
    created() {
      this.rule = _.cloneDeep(this.rules.find(rule => rule.id === this.$route.params.id))
    },
    beforeDestroy() {
      this.updateRule()
    },
    methods: {
      ...mapMutations({
        storageUpdate: 'update'
      }),
      updateRule() {
        this.storageUpdate({
          item: this.rule,
          table: 'rules',
        })
      }
    },
  }
</script>

<style scoped>

</style>