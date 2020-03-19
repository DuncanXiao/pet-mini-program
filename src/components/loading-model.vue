<template>
  <div :class="['loading-container', !isLoading ? 'hide' : '']" >
    <div class="loading">loading...{{isLoading}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading
    })
  }
}
</script>

<style scoped>
.loading-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(255, 255, 255, 0.3);
}
.hide {
  display: none;
}
.loading {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 100%;
}
</style>
