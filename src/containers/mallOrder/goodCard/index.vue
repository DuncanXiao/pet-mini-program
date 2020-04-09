<template>
  <div class="card-container">
    <div class="card-wapper">
     <image class="card-image" :src="good.url" model="aspectFill"/>
      <div class="card-detail">
        <div class="name">{{good.name}}</div>
        <div class='price-total'>
          <div class="price">{{good.price}}</div>
          <div class="num">x {{good.num}}</div>
        </div>
      </div>
    </div>
    <div v-if="showTotal" class='total-contianer'>
      <div class="total">
        合计：
        <span>
          {{totalPrice}}
        </span>
        元
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['good', 'showTotal'],
  computed: {
    totalPrice () {
      return parseInt(this.good.price) * parseInt(this.good.num)
    }
  }
}
</script>

<style scoped>
.card-container:nth-child(1){
  margin-top: 0px;
}
.card-container {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #e5e5e5;
}
.card-wapper {
  display: flex;
  padding: 0 20px;
}
.card-image {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
}
.card-detail {
  margin-left: 10px;
  width: 100%;
}
.name {
  font-size: 15px;
  text-align: left;
}
.price-total {
  display: flex;
  justify-content: center;
}
.price {
  color: red;
  text-align: left;
  width: 50%;
  display: block;
}
.num {
  width: 50%;
  text-align: right;
  display: block;
}

.total-contianer {
  text-align: right;
}
.total {
  width: 80%;
  padding: 10px 20px;
  border-bottom: 1px solid #e5e5e5;
  display: inline-block;
}
.total span{
  color: red;
}
</style>
