<template>
  <div>
    <div class="fans" :style="{borderBottom: '1px solid' + borderBottomColor, backgroundColor: bgColor}">
      <div class="fans-text">粉丝榜</div>
      <div class="fans-avatars-container">
        <div class="fans-avatars">
          <div v-for="(fanItem, index) in fans" :key="index">
            <div :style="{backgroundImage: 'url(' + fanItem.avatarUrl + ')'}" class="avatar-url"/>
          </div>
        </div>
        <img :src="arrowLeftImage" class="arrow-left" />
      </div>
    </div>
    <div class="eat-infor" :style="{backgroundColor: bgColor}">
      <div>
        刚刚
        <div class="custom-name">
          {{recentProvider.provider}}
        </div>
        给
        <div class="eat-name">
          {{name}}
        </div>
        投喂了猫粮
      </div>
      <div class="eat-value">+{{recentProvider.value}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['fans', 'recentProvider', 'bgColor', 'name', 'borderBottomColor'],
  data: function () {
    return {
      arrowLeftImage: require('@/static/images/arrow-left.svg')
    }
  }
}
</script>

<style scoped>
.fans {
  display: flex;
  padding: 0 5px;
  border-bottom: 1px solid #e5e5e5;
}
.fans-text {
  width: 16px;
  flex-shrink: 0;
  font-size: 12px;
  line-height: 14px;
  font-weight: 500;
}
.fans-avatars-container {
  display: flex;
}
.fans-avatars {
  width: 100%;
  height: 30px;
  overflow: hidden;
  align-self: center;
}
.avatar-url {
  margin: 0 5px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: inline-block;
}
.arrow-left {
  width: 20px;
  height: 20px;
  align-self: center;
}

.eat-infor {
  padding: 5px 10px 5px 20px;
  font-size: 12px;
  position: relative;
}
.custom-name {
  color: blue;
  max-width: 60px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  display: inline-block;
  vertical-align: -4px;
  text-align: center;
}
.eat-name {
  font-weight: 500;
  max-width: 60px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: -4px;
  text-align: center;
}
.eat-value {
  color: red;
  position: absolute;
  right: 30px;
  top: 5px;
}
</style>