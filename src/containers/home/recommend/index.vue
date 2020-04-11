<template>
  <div class="wrapper">
    <div class="recommend-container">
      <div id="left-column" class="left-column">
        <template v-for="pet in listLeft">
          <card :pet="pet" :key="pet.id" />
        </template>
      </div>
      <div id="right-column" class="right-column">
        <template v-for="pet in listRight">
          <card :pet="pet" :key="pet.id" />
        </template>
      </div>
    </div>
    <div class="button-container">
      <image class="add-image" @click="add" src="../../static/images/like.png" model="aspectFill"/>
    </div>
  </div>
</template>

<script>
import Waterfalls from '@/utils/waterfallsFlow'
import card from './card'
import mock from './mock'

export default {
  data: function () {
    return {
      listLeft: [],
      listRight: []
    }
  },
  components: {
    card
  },
  methods: {
    handleClick: function (e) {
      this.selectedIndex = e.target.dataset.index
    },
    add () {
      const url = '../../pages/publish/main'
      wx.navigateTo({ url })
    }
  },
  onShow: function () {
    console.log('show')
  },
  onLoad: function () {
    return 'aaa'
  },
  mounted: function () {
    const WaterfallsA = Waterfalls.bind(this)
    const waterfalls = new WaterfallsA()
    waterfalls.start(mock.pets, this)
  }
}
</script>

<style scoped>
.recommend-container {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  line-height: 30px;
  margin-bottom: 30px;
}
.left-column, .right-column {
  padding: 5px;
  width: 50%;
}
.tab {
  padding: 0 25px;
  font-size: 18px;
}
.selectedTab {
  font-weight: 500;
  font-size: 20px;
}
.button-container {
  position: fixed;
  width: 100%;
  text-align: center;
  bottom: 0px;
  background-color: white;
}
.add-image {
  width: 30px;
  height: 30px;
}
</style>
