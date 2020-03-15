<template>
  <div class="home-container">
    <search />
    <navbar />
    <recommend />
  </div>
</template>

<script>
import search from '@/components/search'
import navbar from '@/containers/home/navbar'
import recommend from '@/containers/home/recommend'
export default {
  props: ['text', 'main'],
  components: {
    search,
    navbar,
    recommend
  }
}
</script>
