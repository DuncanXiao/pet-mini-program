<template>
  <div class="cloud-raise-news-container">
    <providePetInfor
      :bgColor="'#55555'"
      :pet="pet"
    />
    <providePetFans
      :bgColor="'#e5e5e5'"
      :fans="pet.fans"
      :borderBottomColor="'#ffffff'"
      :recentProvider="pet.recentProvider"
      :name="pet.name"
    />
    <div v-for="(activesItem, index) in pet.actives" :key="index">
      <providePetActive
        :content="activesItem.content"
        :images="activesItem.images"
      >
        <div class="icons-container">
          <div class="comment-button">
            <image src="../../static/images/comment-icon.svg"  class="comment-icon" /> {{activesItem.comments}}
          </div>
          <div class="like-button">
            <image src="../../static/images/love-icon.svg" class="love-icon" /> {{activesItem.likes}}
          </div>
        </div>
      </providePetActive>
    </div>
  </div>
</template>

<script>
import providePetInfor from '@/components/providePetInfor'
import providePetFans from '@/components/providePetFans'
import providePetActive from '@/components/providePetActive'
export default {
  props: ['pet'],
  components: {
    providePetInfor,
    providePetFans,
    providePetActive
  }
}
</script>

<style scoped>
.icons-container {
  display: flex;
  justify-content: flex-end;
  padding-right: 15px;
  padding-bottom: 5px;
  border-bottom: 1px solid #e5e5e5;
}
.comment-button {
  font-size: 12px;
  margin-right: 20px;
}
.like-button {
  font-size: 12px;
}
.comment-icon {
  width: 19px;
  height: 19px;
}
.love-icon {
  width: 19px;
  height: 19px;
}
</style>
