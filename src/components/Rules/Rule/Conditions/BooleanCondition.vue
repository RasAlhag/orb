<template lang="pug">
  v-card
    v-card-title {{type.key}}
    v-card-text
      v-layout(v-if="value", align-center)
        v-switch(
          v-model="value.value", color="primary",
          :label="value.value ? 'True' : 'False'", hide-details
        )
</template>
<script>
  import Boolean from "../../../../domain/Rule/Conditions/Behaviour/Boolean"

  export default {
    name: 'OPartialMatchCondition',
    props: {
      value: {
        type: Boolean,
        required: true
      },
      type: {
        type: Object,
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