<template>
  <div class="card-container">
    <img class="pet-image" :src="pet.url" mode="widthFix">
    <div class="pet-detail">
      <p class="pet-description">{{pet.description}}</p>
      <div class="profile-container">
        <img class="profile-photo" :src="pet.profilePhoto" >
        <span class="profile-name">{{pet.profileName}}</span>
        <span class="profile-love">{{pet.love}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pet']
}
</script>

<style scoped>
.card-container {
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 20px;
}
.pet-image {
  width: 100%;
  height: auto;
  display: block;
}
.pet-detail {
  padding: 10px;
  background-color: #e5e5e5;
}
.pet-description {
  font-size: 14px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  word-break:break-all;
}
.profile-container {
  display: flex;
}
.profile-photo {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin-left: 5px;
}
.profile-name {
  display: inline-block;
  flex-shrink: 0;
  font-size: 14px;
  margin-left: 15px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  word-break:break-all;
}
.profile-love {
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
  word-break:break-all;
}
</style>
