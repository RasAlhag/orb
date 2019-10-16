<template lang="pug">
  v-layout(v-if="value")
    v-flex(shrink)
      v-layout(wrap)
        orb-socket-group.my-1(
          v-for="(group, index) in value.value",
          :key="index",
          v-model="value.value[index]",
          :variants="variants",
          @drop="$delete(value.value, index)",
          :deletable="value.value.length > 1"
        )
    v-flex(shrink).py-2.px-1
      v-btn(icon, @click="value.value.push([])")
        v-icon mdi-plus
    v-spacer
    v-flex(shrink)
      v-btn(large color="error", @click="$emit('remove', value)", icon).fill-height
        v-icon mdi-close
</template>
<script>
  import SocketGroup from "../../../../domain/Conditions/SocketGroup"
  import OrbSocketGroup from "./SocketGroupCondition/SocketGroup"

  export default {
    name: 'SocketGroupCondition',
    components: {OrbSocketGroup},
    props: {
      value: {
        type: SocketGroup,
        required: true
      }
    },
    computed: {
      variants() {
        return this.value.constructor.getVariants()
      }
    },
    methods: {
    }
  }
</script>

<style scoped>

</style>