<template>
  <div class="search-container">
    <div class='input-wapper'>
      <input type='text' v-model='searchValue' />
    </div>
    <div class='button' @click="handleClick">🔍</div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      isActive: false,
      searchValue: ''
    }
  },
  methods: {
    handleClick: function () {
      if (this.searchValue) {
        console.log('searchValue: ', this.searchValue)
      }
    }
  }
}
</script>

<style>
.search-container {
  position: relative;
}
.input-wapper {
  padding: 5px 50px 5px 10px;
  border-radius: 50px;
  background: #e5e5e5;
}

.button {
  padding: 5px;
  border: 1px;
  position: absolute;
  right: 10px;
  top: 0;
  box-sizing: border-box;
  text-align: center;
}
</style>
