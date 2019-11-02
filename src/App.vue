<template lang="pug">
  v-app(dark).fontin
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
            v-breadcrumbs(:items="breadcrumbs")
              template(v-slot:divider)
                v-icon mdi-chevron-right
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

  export default {
    name: 'App',
    components: {ODrawer, Orb},
    data: () => ({
      loaded: false,
    }),
    computed: {
      breadcrumbs() {
        return this.$route.matched.map((route, index) => {
          return {
            text: typeof route.meta.breadcrumb === 'function'
              ? route.meta.breadcrumb(this.$store, this.$route)
              : route.meta.breadcrumb,
            link: true,
            exact: true,
            disabled: (index + 1) === this.$route.matched.length,
            to: route.meta.to,
          }
        })
        // return this.$breadcrumbs.map((route, index) => ({
        //   text: route.meta.breadcrumb,
        //   link: true,
        //   exact: true,
        //   disabled: (index + 1) === this.$breadcrumbs.length,
        //   to: route.meta.to,
        // }))
      },
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
