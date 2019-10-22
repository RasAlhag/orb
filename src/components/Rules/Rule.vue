<template lang="pug">
  v-card(@click="$emit('edit')", tile) {{rule.name}}
</template>
<script>
  import Rule from "../../domain/Rule"
  import OrbRuleStylePreview from '../Themes/ThemeEditor/Style/StylePreview'

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