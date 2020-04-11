<template>
  <consigneeInfo :info="info"/>
</template>

<script>
import consigneeInfo from '@/containers/consigneeInfo'

export default {
  data: function () {
    return {
      info: {}
    }
  },
  components: {
    consigneeInfo
  },
  onLoad: function (options) {
    this.info = JSON.parse(options.info)
  }
}
</script>

<style scoped>

</style>
