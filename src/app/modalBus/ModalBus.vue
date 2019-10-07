<template lang="pug">
  div
    v-dialog(
      v-for="modal in $modal.windows",
      :value="true",
      v-bind="modal.options"
      @input="updateValue(modal, $event)"
    )
      component(:is="modal.component", v-bind="modal.props", @close="close(modal)", v-on="modal.on")
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