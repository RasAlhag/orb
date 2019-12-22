<template lang="pug">
  v-card(@click="$emit('edit')", link, :to="{name: 'filter', params: {id: filter.id}}").mt-1.mx-1
    v-toolbar
      v-toolbar-title.fontin {{filter.name}}
      v-spacer
      v-btn(icon, @click.prevent.stop="$emit('remove')")
        v-icon mdi-delete
</template>
<script>
  import Filter from "../../../domain/Filter"
  import OrbRuleStylePreview from '../../Themes/Theme/Style/StylePreview'

  export default {
    name: 'OrbFilterPreview',
    components: {OrbRuleStylePreview},
    props: {
      filter: {
        type: Filter,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>