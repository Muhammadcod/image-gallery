<template>
  <div class="grid-item">
    <div
      v-lazyload="item?.urls?.full"
      class="image"
      :style="{ paddingBottom: getAspectRatio, background: item.color }"
    >
      <img
        class="image__item thumb"
        :alt="item?.alt_description"
        :src="item?.urls?.thumb"
      />
      <img
        class="image__item full"
        :alt="item?.alt_description"
      />
      <div class="image-info border">
        <p class="author">{{ item.user?.name }}</p>
        <p class="">{{ item.user?.location || "..." }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { item: Object, loading: Boolean },
  data: function () {
    return {
      count: 0
    }
  },
  computed: {
    getAspectRatio () {
      const ratio = (this.item.height / this.item.width) * 278
      return `${ratio}px`
    }
  }
}
</script>
