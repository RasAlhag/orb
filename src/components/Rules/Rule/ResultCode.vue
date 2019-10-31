<template lang="pug">
  v-container
    v-layout(justify-center)
      v-flex(shrink)
        code(style="width: 500px").black.green--text.darken-3
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