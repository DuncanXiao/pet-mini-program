<template>
  <div class="home-container">
    <loadingModel />
    <search />
    <navbar @switchContent="handleSwitch" :contentType="contentType" />
    <div v-if="contentType == '0'">
      <actived />
    </div>
    <div v-if="contentType == '1'">
      <recommend />
    </div>
    <div v-if="contentType == '2'">
      2
    </div>
  </div>
</template>

<script>
import search from '@/components/search'
import navbar from '@/containers/home/navbar'
import recommend from '@/containers/home/recommend'
import actived from '@/containers/home/actived/index.vue'
import loadingModel from '@/components/loading-model'

export default {
  data: function () {
    return {
      contentType: '0'
    }
  },
  components: {
    search,
    navbar,
    recommend,
    loadingModel,
    actived
  },
  methods: {
    handleSwitch: function (type) {
      this.contentType = type
    }
  }
}
</script>

<style scoped>
.hide {
  display: none;
}
</style>
