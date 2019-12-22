<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-icon(color="white", @click="$router.push({name: 'themes'})") mdi-arrow-left
      v-text-field.ml-4(
        v-model="value.name",
        solo, flat, hide-details,
      )
    div(style="position: relative")
      v-btn(fab, small, absolute, top, left, color="success", @click="addStyle")
        v-icon mdi-plus
      v-layout(wrap).pr-1
        v-flex(xs12, sm6, md6, lg4, xl3, v-for="style in value.styles", :key="style.id")
          orb-theme-editor-style(
            :orb-style="style",
            @remove="removeStyle",
            @copy="cloneStyle",
            :swatches="value.getSwatches()",
          )
</template>
<script>
  import OrbThemeEditorStyle from './Theme/Style'
  import Style from '../../domain/Style'
  import uuid from 'uuid/v4'
  import _ from 'lodash'
  import {mapGetters, mapMutations} from 'vuex'
  import Theme from '../../domain/Theme'

  export default {
    name: 'OrbTheme',
    components: {OrbThemeEditorStyle},
    props: {
      value: {
        type: Theme,
        required: true,
      },
    },
    data: () => ({}),
    computed: {
      ...mapGetters({
        themes: 'getThemes'
      })
    },
    beforeDestroy() {
      this.updateTheme()
    },
    methods: {
      ...mapMutations({
        storageUpdate: 'update'
      }),
      addStyle() {
        this.value.addStyle(new Style({name: 'Новый стиль'}))
      },
      removeStyle(style) {
        this.value.removeStyle(style)
      },
      cloneStyle(style) {
        style = _.cloneDeep(style)
        style.id = uuid()
        this.value.addStyle(style)
      },
      updateTheme() {
        this.storageUpdate({
          item: this.value,
          table: 'themes',
        })
      }
    }
  }
</script>

<style scoped>

</style>