<template>
  <div class="recommend-container">
    
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      images: []
    }
  },
  methods: {
    handleClick: function (e) {
      this.selectedIndex = e.target.dataset.index
    }
  }
}
</script>

<style scoped>
.recommend-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  line-height: 30px;
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
