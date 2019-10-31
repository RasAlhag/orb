<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat)
      v-layout(align-center)
        v-flex(shrink)
          v-btn(link, icon, :to="{name: 'themes'}")
            v-icon mdi-arrow-left
        v-flex.px-2
          v-text-field(
            v-model="theme.name",
            solo, flat, hide-details,
          )
        v-flex(shrink)
          v-btn(link, large, color="success darken-1", @click="addStyle") Добавить стиль
    transition-group(name="flip-list", is="v-layout", wrap).px-2
      v-flex(xs12, sm6, md6, lg4, xl3, v-for="style in theme.styles", :key="style.id").px-2.py-2
        orb-theme-editor-style(
          :orb-style="style",
          @remove="removeStyle",
          @copy="cloneStyle",
          :swatches="theme.getSwatches()",
        )
</template>
<script>
  import OrbThemeEditorStyle from './Theme/Style'
  import Style from "../../domain/Style"
  import uuid from 'uuid/v4'
  import _ from 'lodash'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'OrbTheme',
    components: {OrbThemeEditorStyle},
    data: () => ({
      theme: null
    }),
    computed: {
      ...mapGetters({
        themes: 'getThemes'
      })
    },
    created() {
      this.theme = _.cloneDeep(this.themes.find(theme => theme.id === this.$route.params.id))
    },
    beforeDestroy() {
      this.updateTheme()
    },
    methods: {
      ...mapMutations({
        storageUpdate: 'update'
      }),
      addStyle() {
        this.theme.addStyle(new Style({name: 'Новый стиль'}))
      },
      removeStyle(style) {
        this.theme.removeStyle(style)
      },
      cloneStyle(style) {
        style = _.cloneDeep(style)
        style.id = uuid()
        this.theme.addStyle(style)
      },
      updateTheme() {
        this.storageUpdate({
          item: this.theme,
          table: 'themes',
        })
      }
    }
  }
</script>

<style scoped>

</style>