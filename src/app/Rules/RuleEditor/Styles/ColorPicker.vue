<template lang="pug">
  v-flex(xs3)
    v-layout
      v-flex(shrink)
        v-menu(v-on="", :close-on-content-click="false")
          template(v-slot:activator="{on}")
            div.canvas-bg
              v-btn(:color="hex", v-on="on")
          v-color-picker(mode="rgba", hide-inputs, v-model="value.value")
      v-flex
        div.px-2.py-2 {{value.typeName}}
</template>
<script>
  import ColorStyle from '../../../../Domain/Styles/ColorStyle'

  export default {
    name: "OrbColorPicker",
    props: {
      value: {
        type: ColorStyle,
        default: null
      }
    },
    computed: {
      hex() {
        let color = this.color
        return '#' + color.r.toString(16).padStart(2, '0') +
          color.g.toString(16).padStart(2, '0') +
          color.b.toString(16).padStart(2, '0') +
          Math.round(color.a * 255).toString(16).padStart(2, '0')
      },
      color() {
        return this.value.value
      }
    }
  }
</script>

<style scoped>
  .canvas-bg {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat #ffffff;
  }
</style>