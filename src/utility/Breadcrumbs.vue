<template lang="pug">
  v-breadcrumbs(:items="breadcrumbs")
    template(v-slot:divider)
      v-icon mdi-chevron-right
</template>
<script>
  export default {
    name: 'OBreadcrumbs',
    props: {
      path: {
        type: Array,
        required: true,
      }
    },
    computed: {
      breadcrumbs() {
        return this.$route.matched.map(({props, name, path}, index) => ({
          text: this.resolveText(props.default),
          to: name || path || '/home',
          exact: true,
          disabled: (index + 1) === this.$route.matched.length
        }))
      }
    },
    methods: {
      resolveText(props) {
        if (typeof props === 'function') {
          props = props(this.$route)
        }
        return props && props.value ? props.value.name : null
      }
    },
  }
</script>

<style scoped>

</style>