<template lang="pug">
  div
    v-dialog(
      v-for="modal in $modal.windows", :key="modal.id",
      :value="true", v-bind="modal.options"
      @input="updateValue(modal, $event)",
    )
      component(
        :is="modal.component",
        v-bind="modal.props",
        v-on="modal.on",
        @close="close(modal)",
      )
</template>
<script>
  export default {
    name: "ModalBus",
    methods: {
      updateValue(window, value) {
        if (!value) {
          this.close(window)
        }
      },
      close(window) {
        this.$modal.close(window)
      }
    }
  }
</script>

<style scoped>

</style>