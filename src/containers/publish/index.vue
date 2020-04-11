<template>
  <div class="page">
    <div class="weui-uploader__bd">
      <div class="weui-uploader__files" id="uploaderFiles">
        <div v-for="item in files" :key="index">
          <div class="weui-uploader__file" @click="predivImage" :id="item">
            <image class="weui-uploader__img" :src="item" mode="aspectFill" />
            <div class="delete-icon" @click.stop="deleteImg" :id="item" :data-index="index" :key="index"></div>
          </div>
        </div>
      </div>
      <div class="content">
        <textarea v-model="content"/>
      </div>
      <div class="weui-uploader__input-box">
        <div class="weui-uploader__input" @click="chooseImage"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      files: [],
      content: ''
    }
  },
  methods: {
    chooseImage (e) {
      var _this = this
      wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success: function (res) {
          _this.files = _this.files.concat(res.tempFilePaths)
        },
        fail: function () {
          console.log('fail')
        },
        complete: function () {
          console.log('commplete')
        }
      })
    },
    predivImage (e) {
      wx.previewImage({
        current: e.currentTarget.id,
        urls: this.files
      })
    },
    deleteImg (e) {
      const deletIndex = this.files.indexOf(e.currentTarget.id)
      this.files.splice(deletIndex, 1)
      // const uploadDeleteObj = {
      //   src: e.currentTarget.id,
      //   index: e.currentTarget.dataset.index,
      //   files: this.files
      // }
      // this.$emit('uploadDelete', uploadDeleteObj)
    }
  }
}
</script>

<style scoped>
.weui-uploader__bd {
  margin-bottom: -4px;
  margin-right: -9px;
  overflow: hidden;
}

.weui-uploader__files {
  display: flex;
}

.weui-uploader__file {
  margin-right: 9px;
  margin-bottom: 9px;
  position: relative;
}

.weui-uploader__img {
  display: block;
  width: 79px;
  height: 79px;
  border-radius: 50%;
}

.weui-uploader__file_status {
  position: relative;
}

.weui-uploader__file_status:before {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.weui-uploader__file-content {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  color: #fff;
}

.weui-uploader__input-box {
  float: left;
  position: relative;
  margin-right: 9px;
  margin-bottom: 9px;
  width: 77px;
  height: 77px;
  border: 1px solid #d9d9d9;
}

.weui-uploader__input-box:after,
.weui-uploader__input-box:before {
  content: " ";
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: #d9d9d9;
}

.weui-uploader__input-box:before {
  width: 2px;
  height: 39.5px;
}

.weui-uploader__input-box:after {
  width: 39.5px;
  height: 2px;
}

.weui-uploader__input-box:active {
  border-color: #999;
}

.weui-uploader__input-box:active:after,
.weui-uploader__input-box:active:before {
  background-color: #999;
}

.weui-uploader__input {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.delete-icon {
  background-image: url('../../static/images/delete.png');
  width: 30px;
  height: 30px;
  background-size: contain;
  position: absolute;
  right: 0;
  bottom: 0;
}
.content {
  border-top: 1px solid #BCBCBC;
  border-bottom: 1px solid #BCBCBC;
}
</style>