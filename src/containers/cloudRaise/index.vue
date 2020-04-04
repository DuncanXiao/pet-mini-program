<template>
  <div class="cloud-raise-container">
    <div v-for="pet in pets" :key="pet" >
      <div class="content-wapper" @click="entryDetail(pet)">
        <providePetInfor :pet="pet" :bgColor='"#e5e5e5"' @addCuteValue="addCuteValue" />
        <providePetFans
          :bgColor="'#ffffff'"
          :fans="pet.fans"
          :borderBottomColor="'#e5e5e5'"
          :recentProvider="pet.recentProvider"
          :name="pet.name"
        />
        <providePetActive
          :content="pet.actives[0].content"
          :images="pet.actives[0].images"
        />
      </div>
    </div>
  </div>
</template>

<script>
import mock from './mock'
import providePetInfor from '@/components/providePetInfor'
import providePetFans from '@/components/providePetFans'
import providePetActive from '@/components/providePetActive'
export default {
  data: function () {
    return {
      pets: mock.pets
    }
  },
  methods: {
    entryDetail: function (pet) {
      const url = `../../pages/cloudRaiseNews/main?pet=${JSON.stringify(pet)}`
      wx.navigateTo({ url })
    },
    addCuteValue: function (value) {
      console.log('Add cute value', value)
    }
  },
  components: {
    providePetInfor,
    providePetFans,
    providePetActive
  }
}
</script>

<style scoped>
.content-wapper {
  margin-bottom: 10px;
}
</style>
