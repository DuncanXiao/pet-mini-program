<template>
  <div class="actives">
    <div class="actives-contents">
      {{content}}
    </div>
    <div class="actives-images-container">
      <div v-for="(activeImage, index) in images" :key="index">
        <div class="actives-image" :style="{backgroundImage: 'url('+activeImage.url+')'}"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['images', 'content']
}
</script>

<style scoped>
.news {
  font-size: 12px;
  font-weight: 500;
  background-color: #e5e5e5;
  padding-left: 20px;
}
.actives-contents {
  font-size: 12px;
  padding: 5px 10px 0px 20px;
}
.actives-images-container {
  padding: 5px 10px;
  overflow: hidden;
  height: 115px;
}
.actives-image {
  width: 70px;
  height: 100px;
  margin: 0 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: inline-block;
  margin-bottom: 10px;
}
</style>