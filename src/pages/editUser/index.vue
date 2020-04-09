<template>
  <editUser :avatar="avatar" :nickname="nickname" />
</template>

<script>
import editUser from '@/containers/editUser'

export default {
  data () {
    return {
      avatar: 'https://dss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/qrcode/zbios_old_x2-5869f49078.png',
      nickname: 'hahha'
    }
  },
  components: {
    editUser
  }
}
</script>

<style scoped>

</style>
