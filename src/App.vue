<template lang="pug">
  div
    v-app()
      v-navigation-drawer(app, clipped, permanent)
      v-app-bar(app, dense, clipped-left, height="28", color="grey darken-4").elevation-1
        v-flex(style="-webkit-app-region: drag").fill-height
        v-flex(shrink)
          v-icon(small @click="exit") mdi-close
      v-content
        v-container(fluid)
          router-view
      v-footer(app)
</template>

<script>
  export default {
    name: 'App',
    components: {},
    methods: {
      exit() {
        window.close()
      }
    }
  }
</script>

<style>

</style>
