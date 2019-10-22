<template lang="pug">
  code(style="width: 100%").black.green--text.darken-3
    pre(style="width: 100%", v-text="rule")
</template>
<script>
  import Rule from '../../../domain/Rule'
  export default {
    name: 'ORuleResultCode',
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