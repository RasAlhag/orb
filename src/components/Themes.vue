<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-text-field(
        v-model="searchString",
        solo, flat, hide-details,
        prepend-inner-icon="mdi-magnify",
        placeholder="Искать"
      )
    v-layout(wrap, style="position: relative").pr-1
      v-btn(
        small,
        fab,
        absolute,
        top, left
        color="success",
        @click="createTheme"
      )
        v-icon mdi-plus
      v-flex(v-for="theme in themes", xs6, md6, lg4, xl3)
        orb-theme-preview.mt-1.ml-1(
          :theme="theme"
          @delete="deleteTheme(theme)"
          @copy="copyTheme(theme)"
        )
</template>
<script>
  import {mapGetters, mapMutations} from 'vuex'
  import Theme from '../domain/Theme'
  import OrbThemePreview from './Themes/Theme/Preview'

  export default {
    name: 'orb-themes',
    components: {OrbThemePreview},
    data: () => ({
      searchString: null,
      editorOptions: {
        persistent: true,
      }
    }),
    computed: {
      ...mapGetters(['getThemes']),
      themeItems() {
        return this.getThemes.map(theme => ({
          value: theme,
          text: theme.name
        }))
      },
      themes() {
        return this.searchString ? this.getThemes.filter(theme => {
          return theme.name.toLowerCase().includes(this.searchString.toLowerCase())
        }) : this.getThemes
      },
    },
    methods: {
      ...mapMutations({
        storagePush: 'push',
        storageDelete: 'delete',
        storageUpdate: 'update',
      }),
      copyTheme(theme) {
        this.addTheme(theme.copy())
      },
      createTheme() {
        let theme = new Theme({name: 'Новая тема'})
        this.addTheme(theme)
        this.$router.push({
          name: 'theme',
          params: {id: theme.id}
        })
      },
      addTheme(theme) {
        this.storagePush({
          item: theme,
          table: 'themes'
        })
      },
      updateTheme(theme) {
        this.storageUpdate({
          item: theme,
          table: 'themes'
        })
      },
      deleteTheme(theme) {
        this.storageDelete({
          item: theme,
          table: 'themes',
        })
      }
    }
  }
</script>

<style scoped>

</style>