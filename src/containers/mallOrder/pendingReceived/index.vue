<template>
  <div class="received-container">
    <block v-for="(item, index) in goods" :key="index">
      <card :good="item" :showTotal="true"/>
      <div class="button-container">
        <div class="cancel" @click="cancel(item)">申请售后</div>
        <div class="sumbit">确认收货</div>
      </div>
    </block>
  </div>
</template>

<script>
import card from '../goodCard'

export default {
  props: ['goods'],
  data: function () {
    return {
      haha: 'bbbb'
    }
  },
  components: {
    card
  },
  methods: {
    cancel: function (good) {
      console.log(good)
    }
  }
}
</script>

<style scoped>
.button-container {
  text-align: right;
  margin-top: 15px;
}
.cancel, .sumbit {
  text-align: center;
  font-size: 16px;
  width: 80px;
  line-height: 30px;
  margin: 0 10px;
  display: inline-block;
  border: 1px solid;
  border-radius: 10px;
}
</style>
