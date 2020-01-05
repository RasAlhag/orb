<template lang="pug">
  div.fill-height
    v-app-bar(color="grey darken-4", flat, extended)
      v-icon(color="white", @click="$router.push({name: 'rules'})") mdi-arrow-left
      v-text-field.ml-4(
        v-model="value.name",
        solo, flat, hide-details,
      )
      template(v-slot:extension)

    div(style="position: relative")
      conditions(:conditions="value.conditions")
</template>
<script>
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
    components: {Conditions},
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