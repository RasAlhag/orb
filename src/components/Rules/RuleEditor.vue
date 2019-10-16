<template lang="pug">
  v-card
    v-toolbar(dense).elevation-1
      v-text-field(
        solo, flat,
        hide-details,
        v-model="rule.name",
        prepend-icon="mdi-pencil"
      ).full-width
      v-tabs(v-model="activeTab", right)
        v-tab(v-for="tab in tabs", :key="tab.title") {{tab.title}}
    v-card-text.py-4
      v-tabs-items(:value="activeTab")
        v-tab-item(v-for="tab in tabs", :key="tab.title")
          component(:is="tab.component", :rule="rule")
    v-card-actions
      v-spacer
      v-btn(color="primary darken-2", @click="saveRule") Сохранить
      v-btn(color="grey", text, @click="$emit('close')") Отмена
</template>
<script>
  import Rule from '../../domain/Rule'
  import ResultCode from './RuleEditor/ResultCode'
  import Conditions from './RuleEditor/Conditions'
  import Styles from './RuleEditor/Styles'
  import Effects from './RuleEditor/Effects'

  export default {
    name: 'NewRuleDialog',
    props: {
      rule: {
        type: Rule,
        required: true,
      }
    },
    data: () => ({
      activeTab: 0,
      tabs: [
        {
          component: Conditions,
          title: 'Условия'
        },
        {
          component: Styles,
          title: 'Стили'
        },
        {
          component: Effects,
          title: 'Эффекты'
        },
        {
          component: ResultCode,
          title: 'Код'
        },
      ]
    }),
    methods: {
      saveRule () {
        this.$emit('input', this.rule)
        this.$emit('close')
      }
    }
  }
</script>

<style scoped>

</style>