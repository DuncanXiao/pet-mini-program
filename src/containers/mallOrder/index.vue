<template>
  <div class="page">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-navbar">
          <block v-for="(item,index) in tabs" :key="index">
            <div
              :id="index"
              :class="['weui-navbar__item', activeIndex === index ? 'weui-bar__item_on' : '']"
              @click="tabClick"
            >
              <div class="weui-navbar__title">{{item}}</div>
            </div>
          </block>
        </div>
        <div class="weui-tab__panel">
          <div class="weui-tab__content" :hidden="activeIndex != 0">
            <pendingPayment :goods="goods.pendingPayment"/>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 1">
            <pendingReceived :goods="goods.pendingReceived"/>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 2">
            <afterSale :goods="goods.afterSale"/>
          </div>
          <div class="weui-tab__content" :hidden="activeIndex != 3">
            <completed :goods="goods.completed"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import pendingPayment from './pendingPayment'
import pendingReceived from './pendingReceived'
import afterSale from './afterSale'
import completed from './completed'
export default {
  props: ['goods', 'state'],
  data () {
    const { state } = this
    return {
      tabs: ['待付款', '待收货', '已完成', '售后'],
      activeIndex: state
    }
  },
  components: {
    pendingPayment,
    pendingReceived,
    afterSale,
    completed
  },
  methods: {
    tabClick (e) {
      console.log(e)
      this.activeIndex = Number(e.currentTarget.id)
    }
  }
}
</script>

<style scoped>
.page,
.page__bd {
  height: 100%;
}
.page__bd {
  padding-bottom: 0;
}
.weui-navbar {
  display: flex;
  justify-content: center;
}
.weui-navbar__item {
  flex-grow: 1;
  border-right: 1px solid #e5e5e5;
}
.weui-navbar__item:nth-last-child(1) {
  border-right: 0px;
}
.weui-bar__item_on {
  background-color: #e5e5e5;
  color: white;
}
.weui-navbar__title {
  display: block;
  text-align: center;
  padding: 8px 0;
}
.weui-tab__content {
  text-align: center;
}
</style>