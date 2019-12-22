<template lang="pug">
  v-app(dark)
    v-fade-transition
      div(v-if="loaded")
        o-drawer
        v-app-bar(app,
          dense, clipped-left,
          height="28",
          color="grey darken-4"
        ).elevation-1
          v-flex(shrink)
            orb
          v-flex(shrink)
            o-breadcrumbs(:path="$route.matched")
          v-flex(style="-webkit-app-region: drag").fill-height
          v-flex(shrink)
            v-icon(small @click="exit") mdi-close
        v-content
          v-fade-transition(leave-absolute)
            router-view
        v-footer(app)
        orb-modal-bus
</template>
<script>
  import ODrawer from './components/Drawer/Drawer'
  import Orb from "./utility/Orb"
  import OBreadcrumbs from "./utility/Breadcrumbs"

  export default {
    name: 'App',
    components: {OBreadcrumbs, ODrawer, Orb},
    data: () => ({
      loaded: false,
    }),
    computed: {
    },
    methods: {
      exit() {
        window.close()
      }
    },
    mounted() {
      this.loaded = true
    }
  }
</script>

<style>

</style>
