<template lang="pug">
  div
    v-layout()
      orb-color-picker(v-for="style in colorStyles", :key="style.id", :value="style")
      v-flex(xs3)
        v-text-field(v-model="fontSizeStyle.value", type="number", solo)
    div.canvas-bg.fill-height
      div(:style="style").px-2.py-2.text-center {{rule.name}}
</template>
<script>
  import Rule from '../../../domain/Rule'
  import ColorStyle from "../../../domain/Styles/ColorStyle"
  import OrbColorPicker from "./Styles/ColorPicker"
  import SetFontSize from "../../../domain/Styles/SetFontSize"

  export default {
    name: 'ORuleStyles',
    components: {OrbColorPicker},
    props: {
      rule: {
        type: Rule,
        required: true,
      },
    },
    data: () => ({
      color: {r: 0, g: 0, b: 0, a: 1}
    }),
    computed: {
      style () {
        return {
          fontSize: this.fontSizeStyle.value + 'px',
          lineHeight:  this.fontSizeStyle.value + 'px',
          backgroundColor: `${this.hex(this.backgroundStyle.value)}`,
          border: `4px solid ${this.hex(this.borderStyle.value)}`,
          color: `${this.hex(this.textStyle.value)}`,
          height: 'auto'
        }
      },
      colorStyles() {
        return this.rule.styles.filter(style => style instanceof ColorStyle)
      },
      fontSizeStyle () {
        return this.rule.styles.find(style => style instanceof SetFontSize)
      },
      backgroundStyle () {
        return this.rule.styles.find(style => style.typeName === 'SetBackgroundColor')
      },
      borderStyle () {
        return this.rule.styles.find(style => style.typeName === 'SetBorderColor')
      },
      textStyle () {
        return this.rule.styles.find(style => style.typeName === 'SetTextColor')
      }

    },
    methods: {
      hex(color) {
        return '#' + color.r.toString(16).padStart(2, '0') +
          color.g.toString(16).padStart(2, '0') +
          color.b.toString(16).padStart(2, '0') +
          Math.round(color.a * 255).toString(16).padStart(2, '0')
      },
    }
  }
</script>

<style scoped>
  .canvas-bg {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGElEQVQYlWNgYGCQwoKxgqGgcJA5h3yFAAs8BRWVSwooAAAAAElFTkSuQmCC) repeat #ffffff;
  }
</style>