<template lang="pug">
  v-card(hover, link, :to="{name: 'theme', params: {id: theme.id}}", style="overflow: hidden")
    v-layout(style="min-height: 40px;").canvas-bg
      v-flex(v-for="color in colors")
        v-sheet(:color="color", height="40px")
    v-card-actions
      v-flex {{theme.name}}
      v-btn( link, @click.stop.prevent="$emit('copy')", icon)
        v-icon() mdi-content-copy
      v-btn( link, @click.stop.prevent="$emit('delete')", icon)
        v-icon() mdi-delete
</template>
<script>
  import Theme from '../../../domain/Theme'

  export default {
    name: 'OrbThemePreview',
    props: {
      theme: {
        type: Theme,
        required: true,
      },
    },
    computed: {
      colors () {
        return this.theme.getSwatches(0)
      }
    }
  }
</script>

<style scoped>

</style>