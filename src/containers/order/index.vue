<template>
  <div class="order-container">
    <div class="receiver-wrapper">
      <div class="title">
        收件信息
      </div>
      <div class="info-container">
        <div class="userName">
          {{receiver.userName}}
        </div>
        <div class="phone">
          {{receiver.phone}}
        </div>
      </div>
      <div class="address">
        {{receiver.address}}
      </div>
      <div class="button-container">
        <div class="address-button" @click="entryAddressPage">更换地址 >></div>
      </div>
    </div>
    <div class="order-card-wrapper">
      <orderCard :good="good"/>
    </div>
    <div class="summary-container">
      <div>
        <span>优惠</span>
      </div>
      <div class="summary-wrapper">
        <span class="summary-item">原价</span>
        {{good.price}}元
      </div>
      <div class="summary-wrapper">
        <span class="summary-item">运费</span>
        {{good.freight}}元
      </div>
      <div class="summary-wrapper">
        <span class="summary-item">优惠</span>
        {{good.price}}元
      </div>
      <div class="summary-wrapper">
        <span class="summary-item">合计</span>
        {{good.price}}元
      </div>
    </div>
  </div>
</template>

<script>
import orderCard from '@/components/orderCard'

export default {
  props: ['receiver', 'good'],
  data () {
    const { good } = this
    return {
      summary: [{
        text: '优惠',
        select: []
      }, {
        text: '原价',
        momey: good.price
      }]
    }
  },
  methods: {
    entryAddressPage: function () {
      const url = `../../pages/addressManage/main`
      wx.navigateTo({ url })
    }
  },
  components: {
    orderCard
  }
}
</script>

<style scoped>
.receiver-wrapper {
  background-color: #F2F2F2;
  padding: 20px 30px;
  font-size: 15px;
}
.title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 10px;
}
.info-container {
  display: flex;
  margin-bottom: 10px;
}
.userName {
  flex-grow: 1;
}
.phone {
  width: 100px;
  text-align: right;
}
.address {
  margin-bottom: 10px;
}
.button-container {
  text-align: right;
}
.address-button {
  display: inline-block;
  width: auto;
  padding: 5px 15px;
  background-color: white;
  border-radius: 20px;
  font-size: 13px;
  border: 1px solid #AFAFAF;
}
.order-card-wrapper {
  padding: 20px 30px;
  border-bottom: 1px solid #AFAFAF;
}
.summary-container {
  padding: 0 30px;
  margin-top: 20px;
}
.summary-wrapper {
  font-size: 17px;
  margin-bottom: 20px;
}
.summary-item {
  margin-right: 15px;
  font-size: 18px;
  font-weight: 500;
}
</style>
