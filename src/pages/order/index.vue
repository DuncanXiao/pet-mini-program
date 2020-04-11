<template>
  <order :receiver="orderData.receiver" :good="orderData.good"/>
</template>

<script>
import mock from './mock'
import order from '@/containers/order'

export default {
  data: function () {
    return {
      orderData: mock.order
    }
  },

  components: {
    order
  }
}
</script>

<style scoped>

</style>
