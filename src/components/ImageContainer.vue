<template>
  <div v-lazyload="item?.urls?.full" class="grid-item" :style="{ paddingBottom: getAspectRatio }">
    <img
      class="image__item thumb"
      :alt="item?.alt_description"
      :src="item?.urls?.thumb"
    />
    <img
      @load="setLoad"
      class="image__item full"
      :alt="item?.alt_description"
    />
    <!--    <div class="image-info">-->
    <!--      <p class="author">{{ item.user?.name }}</p>-->
    <!--      <p class="">{{ item.user?.location || "..." }}</p>-->
    <!--    </div>-->
  </div>
</template>

<script>
export default {
  props: { item: Object, loading: Boolean },
  data: function () {
    return {
      isLoaded: false
    }
  },
  computed: {
    getAspectRatio () {
      const ratio = (this.item.height / this.item.width) * 278
      return `${ratio}px`
    }
  },
  methods: {
    setLoad () {
      this.isLoaded = true
    }
  }
}
</script>

<style lang="scss">

</style>
