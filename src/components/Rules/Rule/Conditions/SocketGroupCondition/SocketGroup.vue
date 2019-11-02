<template lang="pug">
  v-flex(shrink)
    v-card(outlined).pr-2.pl-3.mr-2
      v-layout
        v-chip(@click="$emit('drop')", v-if="deletable").my-2.mr-2.px-0
          v-icon(small, right).mx-2 mdi-close
        v-chip-group
          draggable(:value="value", handle=".handle" , @input="$emit('input', $event)")
            span(v-for="(element, index) in value", :key="index")
              v-menu(:value="open[index]", @input="$set(open, index, $event)", origin="top")
                template(v-slot:activator="{on}")
                  v-chip(
                    active-class="",
                    :color="resolveColor(element)",
                    style="width: 32px;",
                    v-on="on"
                  ).px-0.handle
                    div(v-if="element", style="width: 32px;").text-center {{element}}
                    v-icon(v-else, small, right) mdi-plus
                div(
                  v-for="variant in variants",
                  :key="variant.value"
                ).grey.darken-3.px-1.py-1
                  v-chip(
                    :color="variant.color",
                    @click="$set(value, index,  variant.value)",
                    style="width: 32px;"
                  ).px-0
                    div(v-if="variant.value", style="width: 32px;").text-center {{variant.value}}
                    v-icon(v-else, small, right) mdi-close
</template>

<script>
  import draggable from 'vuedraggable'

  export default {
    name: "OrbSocketGroup",
    components: {draggable},
    props: {
      value: {
        type: Array,
        required: true,
      },
      variants: {
        type: Array,
        required: true,
      },
      deletable: {
        type: Boolean,
        required: true,
      }
    },
    data: () => ({
      open: [],
    }),
    watch: {
      value: {
        handler(value) {
          let emptyLength = value.filter(element => element === this.variants[0].value).length
          if (!emptyLength) {
            value.push(this.variants[0].value)
            this.$emit('input', value)
            return
          } else if (emptyLength > 1) {
            value = value.filter(element => element !== this.variants[0].value)
            this.$emit('input', value)
            return
          }

          if (value.indexOf(this.variants[0].value) !== (value.length - 1)) {
            value = value.filter(element => element !== this.variants[0].value)
            this.$emit('input', value)
          }
        },
        immediate: true,
      }
    },
    methods: {
      resolveColor(value) {
        return this.variants.find(variant => variant.value === value).color
      },
    }
  }
</script>

<style scoped>

</style>