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
    ModalBus
</template>
<script>
  import ODrawer from './app/drawer/Drawer'
  import ModalBus from './app/modalBus/ModalBus'
  import list from './Domain/Conditions/HasExplicitMod/list'

  export default {
    name: 'App',
    components: {ODrawer, ModalBus},
    methods: {
      exit() {
        window.close()
      }
    },
  }
</script>

<style>

</style>
