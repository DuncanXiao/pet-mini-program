<template>
  <mallOrder :goods="goods" :state="state"/>
</template>

<script>
import mock from './mock'
import mallOrder from '@/containers/mallOrder'
const state = {
  pendingPayment: 0,
  pendingReceived: 1,
  afterSale: 2,
  completed: 3
}

export default {
  data () {
    return {
      goods: mock,
      state: state.pendingPayment
    }
  },
  components: {
    mallOrder
  },
  onLoad (options) {
    console.log('options: ', options)
    this.state = state[options.state]
  }
}
</script>

<style scoped>

</style>
