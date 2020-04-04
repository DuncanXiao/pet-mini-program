<template>
  <div class="pet-infor" :style="{backgroundColor: bgColor}">
    <div class="cover-image" :style="{backgroundImage: 'url(' + pet.coverImage + ')'}" />
    <div class="pet-name-cute">
      <div class="pet-name">{{pet.name}}</div>
      <div class="pet-cute-value">{{pet.cuteValue}}</div>
    </div>
    <div class="pet-detail">
      <div class="pet-type-sex-age">
        <div class="pet-type">{{pet.type}}</div>
        <div class="pet-sex">{{pet.sex}}</div>
        <div class="pet-age">{{pet.age}}</div>
      </div>
      <div class="button-add-cute" @click.stop="handleClick">
        +萌值
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['pet', 'bgColor'],
  methods: {
    handleClick: function () {
      this.$emit('addCuteValue', 'd')
    }
  }
}
</script>


<style scoped>
.pet-infor {
  padding: 10px 5px 10px 20px;
  display: flex;
}
.cover-image {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 70px;
  height: 70px;
  border-radius: 10px;
}
.pet-name-cute {
  width: 30%;
  min-width: 90px;
  margin-left: 20px;
}
.pet-name {
  font-size: 14px;
  overflow: hidden;
  white-space:nowrap;
  text-overflow:ellipsis;
}
.pet-cute-value {
  font-size: 12px;
}
.pet-detail {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.pet-type-sex-age {
  margin: 8px -14px 0;
  font-size: 12px;
}
.pet-type,
.pet-sex,
.pet-age {
  display: inline-block;
  margin: 0 14px;
}
.button-add-cute {
  width: 65px;
  border: 1px solid blue;
  font-size: 12px;
  color: blue;
  text-align: center;
  border-radius: 10px;
  margin-top: 10px;
}
</style>