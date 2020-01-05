<template lang="pug">
  v-card
    v-card-title {{type.key}}
    v-card-text
      v-layout(v-if="value")
        v-flex(shrink)
          v-layout(wrap)
            orb-socket-group.my-1(
              v-for="(group, index) in value.value",
              :key="index",
              :value="value.value[index]",
              :variants="variants",
              :deletable="value.value.length > 1"
              @drop="$delete(value.value, index)",
              @input="updateGroup(index, $event)"
            )
        v-flex(shrink).py-2.px-1
          v-btn(icon, @click="value.value.push([])")
            v-icon mdi-plus
</template>
<script>
  import SocketGroup from "../../../../domain/Rule/Conditions/SocketGroup"
  import OrbSocketGroup from "./SocketGroupCondition/SocketGroup"

  export default {
    name: 'SocketGroupCondition',
    components: {OrbSocketGroup},
    props: {
      value: {
        type: SocketGroup,
        required: true
      },
      type: {
        type: Object,
      }
    },
    computed: {
      variants() {
        return this.value.constructor.getVariants()
      }
    },
    methods: {
      updateGroup(index, group) {
        this.value.value[index] = group
      }
    }
  }
</script>

<style scoped>

</style>