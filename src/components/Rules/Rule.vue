<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-icon(color="white", @click="$router.push({name: 'rules'})") mdi-arrow-left
      v-text-field.ml-4(
        v-model="value.name",
        solo, flat, hide-details,
      )
      template(v-slot:extension)
        v-tabs(v-model="activeTab", right, background-color="transparent")
          v-tab(v-for="tab in tabs", :key="tab.title") {{tab.title}}
    div(style="position: relative")
      component(:is="tabs[activeTab].component", :rule="value")
</template>
<script>
  import ResultCode from './Rule/ResultCode'
  import Conditions from './Rule/Conditions'
  import {mapGetters, mapMutations} from 'vuex'
  import Rule from "../../domain/Rule"

  export default {
    name: 'OrbRuleEditor',
    props: {
      value: {
        type: Rule,
        required: true,
      }
    },
    data: () => ({
      activeTab: 0,
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
    beforeDestroy() {
      this.updateRule()
    },
    methods: {
      ...mapMutations({
        storageUpdate: 'update'
      }),
      updateRule() {
        this.storageUpdate({
          item: this.value,
          table: 'rules',
        })
      }
    },
  }
</script>

<style scoped>

</style>