<template>
  <div class="edit-user-container">
    <div class="uploader-wapper">
      <uploader
        :currentImage="avatar"
      />
    </div>
    <div class="name">{{nickname}}</div>
    <div class="botton-container">
      <div class="cancel-button" @click="cancel">
        取消
      </div>
      <div class="save-button" @click="save">
        保存
      </div>
    </div>
  </div>
</template>

<script>
import uploader from '@/components/uploader'
export default {
  props: ['avatar', 'nickname'],
  methods: {
    save: function () {
      console.log('保存')
    },
    cancel () {
      console.log('取消')
    }
  },
  components: {
    uploader
  }
}
</script>

<style scoped>
.edit-user-container {
  padding: 20px 10px;
}
.name {
  background-color: #e5e5e5;
  font-size: 18px;
  margin-top: 20px;
}
.botton-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}
.cancel-button,
.save-button {
  width: 80px;
  text-align: center;
  font-size: 15px;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
  margin: 0 20px;
  line-height: 25px;
}
</style>
