<template>
  <div class="home border">
    <div class="container-fluid header">
      <div class="search-bar">
        <h1>Searching for "{{ $route.query?.q }}"</h1>
      </div>
    </div>
    <div class="container" :style="{ marginTop: '-50px' }">
      <div class="grid">
        <ImageContainer
          v-for="item in imageList"
          v-bind:key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ImageContainer from '@/components/ImageContainer'

export default {
  name: 'Result',
  props: {
    imageList: Array,
    dummyList: Array,
    loading: Boolean,
    searchQuery: String
  },
  components: {
    ImageContainer
  }
}
</script>
