<template lang="pug">
  span.title.co
    span Chromatic
    span
      div.orb
    span rb
</template>
<script>
  export default {
    name: "Orb"
  }
</script>

<style scoped lang="sass">

  @keyframes gradientBG
    0%
      background-position: 0 0
    50%
      background-position: 100% 100%
    100%
      background-position: 0 0
  .co
    color: #e8bf6a !important
  .orb
    margin-right: 1px
    margin-left: 6px
    display: inline-block
    border-radius: 50%
    border: 2px solid #f2c462
    border-right-width: 3px
    border-left-width: 3px
    height: 16px
    width: 15px
    background: linear-gradient(-45deg, #ff0057, #d900ff, #00e5e7, #42ff00)
    background-size: 400%
    animation: gradientBG 7s infinite
    box-shadow: inset 0 0 3px black




</style>