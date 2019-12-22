<template lang="pug">
  div
    v-app-bar(color="grey darken-4", flat, extended)
      v-icon(color="white", @click="$router.push({name: 'filters'})") mdi-arrow-left
      v-text-field.ml-4(
        v-model="value.name",
        solo, flat, hide-details,
      )
    div(style="position: relative")
      v-btn(fab, small, absolute, top, left, color="success", @click="addBlock")
        v-icon mdi-plus
      vue-custom-scrollbar.scroll-area
        orb-filter-block(v-for="block in value.blocks", :key="block.id" :value="block", )
</template>

<script>
  import Filter from '../../domain/Filter'
  import Block from '../../domain/Filter/Block'
  import {mapMutations} from 'vuex'
  import OrbFilterBlock from "./Filter/Block"
  import VueCustomScrollbar from 'vue-custom-scrollbar'

  export default {
    name: 'OrbFilterEditor',
    components: {OrbFilterBlock, VueCustomScrollbar},
    props: {
      value: {
        type: Filter,
        required: true,
      }
    },
    methods: {
      addBlock() {
          this.value.addBlock(new Block({
            name: 'Новый блок'
          }))
      },
      ...mapMutations({
        storageUpdate: 'update'
      }),
      updateFilter() {
        this.storageUpdate({
          item: this.value,
          table: 'filters',
        })
      }
    },
    beforeDestroy() {
      this.updateFilter()
    },
  }
</script>

<style scoped>

</style>