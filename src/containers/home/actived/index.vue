<template>
  <div class="actived-container">
    <template v-for="card in activeCards">
      <activeCard :card="card" />
    </template>
  </div>
</template>

<script>
import activeCard from './activeCard'
import mock from './mock'
export default {
  data: function () {
    return {
      activeCards: mock.actives
    }
  },
  components: {
    activeCard
  }
}
</script>

<style scoped>
.actived-container {
  padding: 0 10px;
}
</style>
