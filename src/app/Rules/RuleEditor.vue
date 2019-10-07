<template lang="pug">
  v-card
    v-toolbar(dense)
      v-text-field(
        solo,
        hide-details,
        flat,
        v-model="rule.name",
        prepend-icon="mdi-pencil"
      )
      v-spacer
      v-flex(shrink)
        v-tabs(v-model="activeTab")
          v-tab(v-for="tab in tabs", v-text="tab.title")
    v-card-text.py-4
      v-tabs-items(:value="activeTab")
        v-tab-item(v-for="tab in tabs")
          component(:is="tab.component", :rule="rule")
    v-card-actions
      v-spacer
      v-btn(color="success lighten-1", text, @click="$emit('input', rule) && $emit('close')") Сохранить
      v-btn(color="grey", text, @click="$emit('close')") Отмена
</template>
<script>
  import Rule from '../../Domain/Rule'
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
  }
</script>

<style scoped>

</style>