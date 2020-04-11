<template>
  <div class="oder-card-container">
    <div class="good-container">
      <image class="photo" :src="good.url" mode="aspectFill" />
      <div class="name">
        {{good.name}}
      </div>
    </div>
    <div class="price-container">
      <div class="price">
        ¥ {{good.price}}
      </div>
      <div class="num">
        x {{good.num}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['good']
}
</script>

<style>
.good-container {
  display: flex;
}
.photo {
  width: 80px;
  height: 80px;
  margin-right: 15px;
  margin-bottom: 10px;
}
.name {
  flex-grow: 1;
}
.price-container {
  display: flex;
  justify-content: space-between;
}

</style>
