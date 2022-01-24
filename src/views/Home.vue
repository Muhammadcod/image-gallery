<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SkeletonElement type="author" />
    <SkeletonElement type="author" />
    <SkeletonElement type="author" />
    <Shimmer/>
  </div>
</template>

<script>
import SkeletonElement from '@/components/SkeletonElement'
import Shimmer from '@/components/Shimmer'

export default {
  name: 'Home',
  components: {
    SkeletonElement,
    Shimmer
  }
}
</script>
