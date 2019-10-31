<template lang="pug">
  v-card
    orb-theme-editor-style-preview(:orb-style="orbStyle").py-1
      input(v-model="orbStyle.name").headline.full-width.text-center
    v-card-actions
      orb-theme-editor-style-color-picker(
        v-model="orbStyle.background",
        small,
        :swatches="swatches",
      )
      orb-theme-editor-style-color-picker(
        v-model="orbStyle.text",
        small,
        :swatches="swatches",
      )
      orb-theme-editor-style-color-picker(
        v-model="orbStyle.border",
        small,
        :swatches="swatches",
      )
      v-spacer
      v-btn(small, icon, @click="copy")
        v-icon mdi-content-copy
      v-btn(small, icon, @click="remove")
        v-icon mdi-delete
</template>
<script>
  import Style from '../../../domain/Style'
  import OrbThemeEditorStylePreview from './Style/StylePreview'
  import OrbThemeEditorStyleColorPicker from "./Style/ColorPicker"

  export default {
    name: 'OrbThemeStyle',
    components: {OrbThemeEditorStylePreview, OrbThemeEditorStyleColorPicker},
    props: {
      orbStyle: {
        type: Style,
        require: true
      },
      swatches: {
        type: Array,
        default: () => ([])
      }
    },
    methods: {
      copy() {
        this.$emit('copy', this.orbStyle)
      },
      remove() {
        this.$emit('remove', this.orbStyle)
      }
    }
  }
</script>