<template>
  <div class="actived-card-container">
    <div>
      <a :href="card.href">
        <img mode="widthFix" :src="card.image"/>
      </a>
    </div>
    <div class="detail">
      <p class="description">{{card.description}}</p>
      <p class="local">
        {{local}}
        <span class="time">
          {{card.time}}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['card'],
  computed: {
    local () {
      const { province, city, area } = this.card
      const _p = province ? `${province}-` : ''
      const _c = city ? `${city}-` : ''
      return `${_p}${_c}${area}`
    }
  }
}
</script>

<style scoped>
.actived-card-container {
  border-radius: 10px;
  background-color: #e5e5e5;
  overflow: hidden;
  margin-bottom: 20px;
}
.detail {
  padding: 5px 10px 10px;
}
.description {
  font-size: 15px;
  font-weight: 500;
}
.local {
  font-size: 13px;
}
.time {
  margin-left: 10px;
}
</style>
