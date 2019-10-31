<template lang="pug">
  div(:style="orbStyle.toCSS()").px-1.py-1.text-center.style-preview
    slot {{orbStyle.name}}
</template>
<script>
  import Style from '../../../../domain/Style'

  export default {
    name: 'OrbThemeStylePreview',
    props: {
      orbStyle: {
        type: Style,
        required: true,
      },
    },
    computed: {},
    methods: {}
  }
</script>
<style scoped>
  .style-preview {
    transition: all .2s;
  }
</style>