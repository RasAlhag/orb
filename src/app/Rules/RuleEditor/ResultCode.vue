<template lang="pug">
  pre(style="width: 100%")
    code(style="width: 100%").black.green--text.darken-3
      | {{rule}}
</template>
<script>
  import Rule from '../../../Domain/Rule'
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