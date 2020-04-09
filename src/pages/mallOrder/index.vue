<template>
  <mallOrder :goods="goods"/>
</template>

<script>
import mock from './mock'
import mallOrder from '@/containers/mallOrder'

export default {
  data () {
    return {
      goods: mock
    }
  },
  components: {
    mallOrder
  }
}
</script>

<style scoped>

</style>
