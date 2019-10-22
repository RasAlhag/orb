<template lang="pug">
  v-card(style="overflow: hidden")
    div.px-1.py-1
      v-layout(style="min-height: 40px").canvas-bg
        v-flex(v-for="color in colors")
          v-card(tile, :color="color", flat).py-5
    v-card-actions
      v-flex {{theme.name}}
      v-btn( link, :to="{name: 'theme', params: {id: theme.id}}", icon)
        v-icon() mdi-pencil
      v-btn( link, @click="$emit('copy')", icon)
        v-icon() mdi-content-copy
      v-btn( link, @click="$emit('delete')", icon)
        v-icon() mdi-delete
</template>
<script>
  import Theme from '../../domain/Theme'

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