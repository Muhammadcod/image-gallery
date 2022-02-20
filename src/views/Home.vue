<template>
  <div class="home">
    <div class="container-fluid header">
      <div class="search-bar">
        <input
          v-model="query"
          v-on:keyup.enter="goToSearchPage(query)"
          placeholder="Enter Search"
          class="search-string"
        />
      </div>
    </div>
    <div class="container" :style="{ marginTop: '-50px' }">
      <div class="grid">
        <div v-if="loading">Loading...</div>
        <template v-else>
          <ImageContainer
            v-for="item in imageList"
            v-bind:key="item.id"
            :item="item"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from '@/components/ImageContainer'

export default {
  name: 'Home',
  data: function () {
    return {
      query: ''
    }
  },
  props: {
    imageList: Array,
    loading: Boolean,
    fetchData: Function,
    goToSearchPage: Function
  },
  components: {
    ImageContainer
  }
}
</script>

<style lang="scss">
.home {
  min-height: 100vh;
}
</style>
