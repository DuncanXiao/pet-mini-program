<template>
  <home></home>
</template>

<script>
import home from '@/containers/home'

export default {
  data () {
    return {
      text: '12'
    }
  },

  components: {
    home
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
    console.log('pages home creacted')
  }
}
</script>

<style scoped>

</style>
