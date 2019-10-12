<template lang="pug">
  v-layout(v-if="value")
    v-flex
      v-layout(align-center)
        v-combobox(
          solo,
          label="Фильтр",
          :items="variants",
          v-model="value.value"
        ).mx-2.full-width
          template(v-slot:prepend)
            v-tooltip(bottom, style="border-radius: 20px")
              template(v-slot:activator="{on}")
                v-icon(v-on="on", :color="matches.length ? 'primary' : 'error'") mdi-filter
              template(v-if="matches.length")
                div(v-for="match in matches")
                  v-chip(color="primary").my-1 {{match}}
              template(v-else) Ни один класс не подходит по этот фильтр :(
    v-flex(shrink)
      v-btn(large color="error", @click="$emit('remove', value)", icon).fill-height
        v-icon mdi-close
</template>
<script>
  import PartialMatch from "../../../../Domain/Conditions/Behaviour/PartialMatch"

  export default {
    name: 'OPartialMatchCondition',
    props: {
      value: {
        type: PartialMatch,
        required: true
      }
    },
    computed: {
      variants() {
        return this.value.constructor.getVariants()
      },
      matches() {
        return this.value.matches()
      }
    }
  }
</script>

<style scoped>

</style>