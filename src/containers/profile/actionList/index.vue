<template>
  <div class="list-container">
    <div v-for="(item, index) in list" :key="index">
      <div class="list-wapper">
        <p class="title"><span class="other"/>{{item.title}}</p>
        <div class="actions-container">
          <div class="actions-wapper" v-for="(action, i) in item.actions" :key="i">
            <image class="action-icon" :src="action.icon" model="center"/>
            <p class="text">{{action.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from './list'
export default {
  data: function () {
    return {
      list: list
    }
  }
}
</script>

<style scoped>
.list-wapper {
  margin-bottom: 20px;
}
.title {
  padding-bottom: 10px;
  margin-bottom: 10px;
  font-size: 15px;
  border-bottom: 1px solid #e5e5e5;
  padding-left: 17px;
}
.other {
  border: 2px solid black;
  height: 13px;
  display: inline-block;
  vertical-align: -3px;
  margin-right: 5px;
}
.actions-container {
  display: flex;
  justify-content: center;
  text-align: center;
}
.actions-wapper {
  flex-grow: 1;
  display: inline-block;
  width: 50px;
}
.action-icon {
  width: 20px;
  height: 20px;
}
.text {
  font-size: 13px;
}
</style>
