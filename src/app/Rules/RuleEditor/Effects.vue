<template lang="pug">
  div here effects
</template>
<script>
  import Rule from "../../../Domain/Rule"

  export default {
    name: 'ORuleEffects',
    props: {
      rule: {
        type: Rule,
        required: true,
      },
    }
  }
</script>

<style scoped>

</style>