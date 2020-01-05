<template lang="pug">
  v-card
    v-card-title {{type.key}}
    v-card-text
      v-layout(v-if="value")
        v-flex
          v-layout(align-center)
          v-combobox(
              solo,
              multiple,
              chips,
              deletable-chips,
              hide-details,
              label="Фильтр",
              :items="variants",
              v-model="value.value"
            ).mx-2.full-width
              template(v-slot:prepend)
                v-tooltip(bottom, style="border-radius: 20px", color="black")
                  template(v-slot:activator="{on}")
                    v-icon(v-on="on", :color="matches.length ? 'primary' : 'error'").px-1.mx-5 mdi-filter
                  template(v-if="matches.length")
                    div(v-for="match in matchesSlice")
                      div().my-1 {{match}}
                    div(v-if="overflow")
                      div ...
                      div И еще {{matches.length - 5}}
                  template(v-else) нет совпадений по этотому фильтру :(
</template>
<script>
  import PartialMatch from "../../../../domain/Rule/Conditions/Behaviour/PartialMatch"

  export default {
    name: 'OPartialMatchCondition',
    props: {
      value: {
        type: PartialMatch,
        required: true
      },
      type: {
        type: Object,
      }
    },
    computed: {
      variants() {
        return this.value.constructor.getVariants()
      },
      overflow () {
        return this.matches.length > 7
      },
      matchesSlice() {
        return this.overflow ? this.matches.slice(0, 5) : this.matches
      },
      matches() {
        return this.value.matches()
      }
    }
  }
</script>

<style scoped>

</style>