<template lang="pug">
  v-layout(v-if="value")
    v-flex(xs2).px-5
      v-switch(v-model="value.value", color="primary")
    v-flex.px-2
      v-text-field(
        solo,
        readonly,
        :value="value.value ? 'True' : 'False'"
      )
    v-flex(shrink)
      v-btn(large color="error", @click="$emit('remove', value)", icon).fill-height
        v-icon mdi-close
</template>
<script>
  import Boolean from "../../../../Domain/Conditions/Behaviour/Boolean"

  export default {
    name: 'OPartialMatchCondition',
    props: {
      value: {
        type: Boolean,
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