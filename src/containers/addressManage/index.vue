<template>
  <div class="page">
    <radio-group @change="radioChange">
      <label class="radio-wrapper" :class="item.default? 'select-raido' : ''" v-for="item in radioItems" :key="index">
        <div class="address-container">
          <div class="info">
            <div>{{item.name}}</div>
            <div>{{item.phone}}</div>
          </div>
          <div class="address">
            {{item.address}}
          </div>
        </div>
        <div class="radio-box">
          <div class="radio-container">
            <radio class="weui-check" :value="item.id" :checked="item.default" color="#1800F5" />
            <div class="checked-text" v-if="item.default">
              已设为默认
            </div>
            <div class="no-checked-text" v-else>
              设为默认
            </div>
          </div>
          <div class="button-container">
            <div class="edit-button" @click="entryConsigneeInformation(item)">
              编辑
            </div>
            <div class="delete-button" @click="handelDelete(item)">
              删除
            </div>
          </div>
        </div>
      </label>
    </radio-group>
    <div class="add-button" @click="entryConsigneeInformation">
      添加收件信息
    </div>
  </div>
</template>

<script>
export default {
  props: ['addresses'],
  data () {
    console.log('2')
    return {
      radioItems: [].concat(this.addresses)
    }
  },
  methods: {
    radioChange (e) {
      const radioItems = this.radioItems
      for (let i = 0; i < radioItems.length; ++i) {
        radioItems[i].default = radioItems[i].id === parseInt(e.mp.detail.value)
        console.log(radioItems[i].default)
      }
      this.radioItems = radioItems
    },
    handelDelete (item) {
      console.log('删除: ', item)
    },
    entryConsigneeInformation (item) {
      const info = !item ? {} : item
      const url = `../../pages/consigneeInfo/main?info=${JSON.stringify(info)}`
      wx.navigateTo({ url })
    }
  }

}
</script>

<style scope>
.page {
  padding: 15px;
}
.select-raido {
  border: 1px solid #1800F5;
}
.radio-wrapper {
  background-color: white;
  padding: 15px 0px 0px;
  margin-bottom: 10px;
  display: block;
}
.radio-container {
  display: flex;
  font-size: 16px;
  align-content: center;
  align-items: center;
}
.checked-text {
  color: #1800F5;
}
.no-checked-text {
  color: #666666;
}
.address-container {
  padding: 0 20px 10px;
  border-bottom: 1px solid #E4E4E4;
}
.info {
  display: flex;
  justify-content: space-between;
  font-size: 16px;
}
.address {
  font-size: 16px;
  margin-top: 10px;
}
.radio-box {
  padding: 10px 20px 10px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
}
.weui-check {
  transform: scale(0.7);
}
.button-container {
  display: flex;
  font-size: 16px;
}
.edit-button {
  margin-right: 15px;
}
.add-button {
  margin-top: 10px;
  background-color: white;
  font-size: 16px;
  text-align: center;
  padding: 20px 0px;
}
</style>