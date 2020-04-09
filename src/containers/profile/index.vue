<template>
  <div class="profile-container">
    <headerProfile :userInfo="userInfo"/>
    <div class="user-box">
      <image class="user-photo" :src="userInfo.avatarUrl" />
      <div class="user-name">{{userInfo.nickname}}</div>
      <div class="user-cute">可用萌值: {{userInfo.personCuteValue}}</div>
      <image class="user-edit" :src="'../../static/images/post.png'" @click="entryEditUserPage" />
    </div>
    <actionList />
  </div>
</template>

<script>
import headerProfile from './header'
import actionList from './actionList'
export default {
  props: ['userInfo'],
  methods: {
    entryEditUserPage: function () {
      const url = `../../pages/editUser/main`
      wx.navigateTo({ url })
    }
  },
  onShow: function () {
    console.log('每次重新进来就call 一次use api，更新当前页面信息')
  },
  components: {
    headerProfile,
    actionList
  }
}
</script>

<style scoped>
.content-wapper {
  margin-bottom: 10px;
}
.user-box {
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 25px;
}
.user-photo {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
}
.user-name {
  font-size: 13px;
  font-weight: bold;
  margin-right: 20px;
  vertical-align: middle;
  width: 70px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-cute {
  font-size: 13px;
}
.user-edit {
  position: absolute;
  width: 10px;
  height: auto;
  right: 20px;
  bottom: 0;
  top: 0;
}
</style>
