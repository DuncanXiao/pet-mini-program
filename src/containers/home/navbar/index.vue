<template>
  <div class="navbar-container">
    <div v-for="(item, key) in tabs" :key="key">
      <div :class="['tab', key === selectedIndex ? 'selectedTab': '' ]" @click="handleClick" :data-index="key">{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['contentType'],
  data: function () {
    return {
      tabs: {
        0: '活动',
        1: '推荐',
        2: '附近'
      },
      selectedIndex: this.contentType
    }
  },
  methods: {
    handleClick: function (e) {
      this.selectedIndex = e.target.dataset.index
      this.$emit('switchContent', this.selectedIndex)
    }
  },
  onShow: function () {
    console.log('show: ', this.selectedIndex)
  }
}
</script>

<style scoped>
.navbar-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  line-height: 30px;
  padding: 0 10px;
}
.tab {
  padding: 0 25px;
  font-size: 18px;
}
.selectedTab {
  font-weight: 500;
  font-size: 20px;
}
</style>
