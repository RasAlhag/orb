<template lang="pug">
  v-navigation-drawer(
    app, clipped, permanent,
    width="100"
  )
    v-list(dense)
      v-list-item(:to="{name: 'rules'}")
        v-list-item-content Rules
      v-list-item(:to="{name: 'themes'}")
        v-list-item-content Themes
</template>
<script>
  export default {
    name: 'ODrawer'
  }
</script>

<style scoped>

</style>