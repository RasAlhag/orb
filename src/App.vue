<template lang="pug">
  v-app
    o-drawer
    v-app-bar(app, dense, clipped-left, height="28", color="grey darken-4").elevation-1
      v-flex(style="-webkit-app-region: drag").fill-height
      v-flex(shrink)
        v-icon(small @click="exit") mdi-close
    v-content
      v-container(fluid)
        router-view
    v-footer(app)
    orb-modal-bus
</template>
<script>
  import ODrawer from './components/Drawer/Drawer'
  export default {
    name: 'App',
    components: {ODrawer},
    methods: {
      exit() {
        window.close()
      }
    },
  }
</script>

<style>

</style>
