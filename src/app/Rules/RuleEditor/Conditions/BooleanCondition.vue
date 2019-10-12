<template lang="pug">
  v-layout(v-if="value")
    v-flex
      v-layout(align-center)
        v-flex(shrink).px-4
        v-flex.px-3
          v-switch( v-model="value.value" :label="`${value.value.toString()}`")
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