<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat)
      v-layout(align-center)
        v-flex
          v-text-field(
            v-model="searchString",
            solo, flat, hide-details,
            prepend-inner-icon="mdi-magnify",
            placeholder="Искать"
          )
        v-flex(shrink)
          v-btn(
            large,
            color="success darken-1",
            @click="createTheme"
          ).ml-2 Добавить тему
    v-layout(wrap).px-1.py-1
      v-flex(v-for="theme in themes", xs6, md6, lg4, xl3).px-1.py-1
        orb-theme-preview(
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