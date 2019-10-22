<template lang="pug">
  v-navigation-drawer(app, clipped, permanent)
    v-list
      v-list-item(:to="{name: 'home'}")
        v-list-item-content Home
      v-list-item(:to="{name: 'rules'}")
        v-list-item-content rules
      v-list-item(:to="{name: 'themes'}")
        v-list-item-content themes
</template>
<script>
  export default {
    name: 'ODrawer'
  }
</script>

<style scoped>

</style>