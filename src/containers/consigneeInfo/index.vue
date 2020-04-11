<template>
  <div class="consignee-info-container">
    <div class="input-wrapper" v-for="(item, index) in list" :key="index">
      <div class="input-text">
        {{item.text}}:
      </div>
      <div class="input-value">
        <input v-model="item.value"/>
      </div>
    </div>
    <div class="button-container">
      <div class="cancle-button">取消</div>
      <div class="save-button" @click="save">保存</div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['info'],
  data () {
    const { info } = this
    return {
      list: [
        { text: '收件人', value: !info.name ? '' : info.name },
        { text: '收件人电话', value: !info.phone ? '' : info.phone },
        { text: '收件地址', value: !info.address ? '' : info.address }
      ]
    }
  },
  methods: {
    save: function () {
      console.log('保存', this.list)
    },
    cancel () {
      console.log('取消')
    }
  }
}
</script>

<style scoped>
.consignee-info-container {
  padding: 0 15px;
}
.input-wrapper {
  display: flex;
  margin-bottom: 25px;
}
.input-text {
  font-size: 18px;
  font-weight: 500;
  width: 100px;
  text-align: right;
  margin-right: 10px;
}
.input-value {
  font-size: 16px;
  border-bottom: 1px solid #BCBCBC;
  flex-grow: 1;
  padding-left: 5px;
}
.button-container {
  display: flex;
  justify-content: space-around;
}
.cancle-button, .save-button {
  padding: 5px 25px;
  border-radius: 10px;
  border: 1px solid #BCBCBC;
  font-size: 16px;
}
</style>
