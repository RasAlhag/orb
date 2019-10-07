<template lang="pug">
  div here
</template>
<script>
  import Rule from '../../../Domain/Rule'

  export default {
    name: 'ORuleStyles',
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