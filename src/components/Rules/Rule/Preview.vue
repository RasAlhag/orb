<template lang="pug">
  v-card(@click="$emit('edit')", link, :to="{name: 'rule', params: {id: rule.id}}").mt-1.mx-1
    v-toolbar
      v-toolbar-title {{rule.name}}
      v-spacer
      v-btn(icon, @click.prevent.stop="$emit('remove')")
        v-icon mdi-delete
</template>
<script>
  import Rule from "../../../domain/Rule"
  import OrbRuleStylePreview from '../../Themes/Theme/Style/StylePreview'

  export default {
    name: 'OrbRule',
    components: {OrbRuleStylePreview},
    props: {
      rule: {
        type: Rule,
        required: true,
      }
    }
  }
</script>

<style scoped>

</style>