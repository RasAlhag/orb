<template lang="pug">
  v-menu(
    absolute,
    transition="slide-x-transition",
    offset-y
  )
    template(v-slot:activator="{on}")
      slot(:on="on")
    v-layout(wrap).grey.darken-3
      v-flex(v-for="(conditions, group) in conditionsGrouped")
        v-list(dense)
          v-subheader {{group}}
          v-list-item(
            v-for="(condition, index) in conditions",
            :key="condition.key",
            @click="$emit('select', condition)"
          )
            v-list-item-content
              | {{condition.key}}
</template>

<script>

  import {conditionsGrouped} from '../../../domain/Rule/Conditions'
  export default {
    name: "OConditionPicker",
    data: () => ({conditionsGrouped})
  }
</script>

<style scoped>

</style>