<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-text-field(
        v-model="searchString",
        solo, flat, hide-details,
        prepend-inner-icon="mdi-magnify", placeholder="Искать"
      )
      template(v-slot:extension)
    div(style="position: relative")
      v-btn(
        @click="newFilter"
        color="success",
        fab, absolute,
        top, left,
        dark, small,
      )
        v-icon mdi-plus
      vue-custom-scrollbar(class="scroll-area")
        orb-filter-preview(
          v-for="filter in filters",
          :key="filter.id",
          v-masonry-tile,
          :filter="filter",
          @remove="removeFilter(filter)",
        )
</template>
<script>
  import OrbFilterPreview from './Filters/Filter/Preview'
  import {mapGetters, mapMutations} from 'vuex'
  import VueCustomScrollbar from 'vue-custom-scrollbar'
  import Filter from "../domain/Filter"

  export default {
    name: 'OrbFilters',
    components: {OrbFilterPreview, VueCustomScrollbar},
    data: () => ({
      searchString: null,
    }),
    computed: {
      ...mapGetters(['getFilters']),
      filters() {
        if (this.searchString) {
          return this.getFilters.filter(filter => {
            return filter.name.toLowerCase()
              .includes(this.searchString.toLowerCase())
          })
        }
        return this.getFilters
      }
    },
    methods: {
      ...mapMutations({
        storagePush: 'push',
        storageDelete: 'delete',
        storageUpdate: 'update',
      }),
      removeFilter(filter) {
        this.storageDelete({
          item: filter,
          table: 'filters'
        })
      },
      addFilter(filter) {
        this.storagePush({
          item: filter,
          table: 'filters'
        })
      },
      updateFilter(filter) {
        this.storageUpdate({
          item: filter,
          table: 'filters'
        })
      },
      newFilter() {
        let filter = new Filter({name: 'Новый фильтр', conditions: []})
        this.addFilter(filter)
        this.$router.push({
          name: 'filter',
          params: {id: filter.id}
        })
      },
    },
  }
</script>
<style scoped>
</style>