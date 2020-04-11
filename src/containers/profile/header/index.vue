<template>
  <swiper
    indicator-dots="true"
    autoplay="true"
    circular="true"
    class="swiper-container"
  >
    <div v-for="(item, index) in userInfo.pets" :key="index">
      <swiper-item>
        <image class="pet-box" :src="item.coverImage" mode="center"/>
        <div class="pet-detail" @click="editPet">
          <text class="pet-name">{{item.name}}</text>
          <div class="pet-info">
            <text class="pet-type">{{item.type}}</text>
            <text class="pet-sex">{{item.sex}}</text>
            <text class="pet-age">{{item.age}}岁</text>
          </div>
          <text class="pet-cuteValue">{{item.cuteValue}}</text>
          <image class="pet-edit" :src="petEditImage" />
        </div>
      </swiper-item>
    </div>
  </swiper>
</template>

<script>
export default {
  props: ['userInfo'],
  data: function () {
    return {
      petEditImage: require('@/static/images/post.png')
    }
  },
  methods: {
    editPet () {
      console.log('edit')
    }
  }
}
</script>

<style scoped>
.swiper-container {
  height: 300px;
  width: 100%;
  margin-bottom: 25px;
}
.pet-box {
  height: 100%;
  width: 100%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.pet-detail {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: rgba(255,255,255,0.3);
  padding: 5px 20px;
  display: flex;
}
.pet-name {
  width: 20%;
  min-width: 70px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  font-size: 15px;
  font-weight: bold;
}
.pet-info {
  font-size: 12px;
  line-height: 22px;
  margin-right: 30px;
}
.pet-type {
  margin-right: 5px;
}
.pet-sex {
  border-left: 1px solid black;
  border-right: 1px solid black;
  padding-right: 5px;
}
.pet-age {
  margin-left: 5px;
}
.pet-edit {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 18px;
  height: auto;
  right: 20px;
}
</style>
