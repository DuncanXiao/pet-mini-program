<template>
  <div class="profile-container">
    <headerProfile :userInfo="userInfo"/>
    <actionList />
  </div>
</template>

<script>
import headerProfile from './header'
import actionList from './actionList'
export default {
  props: ['userInfo'],
  methods: {
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
</style>
