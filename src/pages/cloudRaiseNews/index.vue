<template>
  <div v-if="pet !== ''">
    <cloudRaiseNews :pet="pet" />
  </div>
</template>

<script>
import cloudRaiseNews from '@/containers/cloudRaiseNews'

export default {
  data: function () {
    return {
      pet: ''
    }
  },
  components: {
    cloudRaiseNews
  },
  onLoad: function (options) {
    this.pet = JSON.parse(options.pet)
    console.log(this.pet)
  }
}
</script>

<style scoped>

</style>
