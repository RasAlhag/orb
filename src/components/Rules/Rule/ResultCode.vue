<template lang="pug">
  v-container
    v-layout(justify-center)
      v-flex(shrink)
        code(style="width: auto").px-0.black.green--text.darken-3
          pre(style="width: auto", v-text="rule").px-10
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