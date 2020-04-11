<template>
  <addressManage :addresses="addresses"/>
</template>

<script>
import mock from './mock'
import addressManage from '@/containers/addressManage'

export default {
  data: function () {
    return {
      addresses: mock.addresses
    }
  },

  components: {
    addressManage
  }
}
</script>

<style>
page {
  height: 100%;
  background-color: #F7F7F7;
}
</style>
