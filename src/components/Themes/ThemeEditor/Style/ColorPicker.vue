<template lang="pug">
  v-menu(:close-on-content-click="false", bottom, left)
    template(v-slot:activator="{on}")
      div.canvas-bg.mx-1
        v-btn(:color="value.getHexColor()", v-on="on", tile, :small="small")
    v-color-picker(
      mode="hexa",
      hide-mode-switch,
      :value="value.value",
      :swatches="swatches",
      show-swatches,
      @input="updateValue"
    )
</template>
<script>
  import ColorStyle from '../../../../domain/Style/ColorStyle'
  import _ from 'lodash'

  export default {
    name: 'OrbThemeEditorStyleColorPicker',
    props: {
      value: {
        type: ColorStyle,
        default: null
      },
      small: {
        type: Boolean,
        default: false,
      },
      swatches: {
        type: Array,
        default: () => ([]),
      }
    },
    methods: {
      updateValue: _.debounce(function (value) {
        this.value.value = value
      }, 25)
    },
    computed: {
      color() {
        return this.value.value
      },
    }
  }
</script>

<style scoped>

</style>