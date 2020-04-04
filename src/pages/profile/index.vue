<template>
  <profile :userInfo="profileData"/>
</template>

<script>
import mock from './mock'
import profile from '@/containers/profile'

export default {
  data: function () {
    console.log(mock.profile)
    return {
      profileData: mock.profile
    }
  },

  components: {
    profile
  }
}
</script>

<style scoped>

</style>
