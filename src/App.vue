<template>
  <router-view
    :imageList="imageList"
    :loading="loading"
    :fetchData="fetchData"
    :searchQuery="searchQuery"
    :goToSearchPage="goToSearchPage"
  />
</template>

<script>
import Unsplash from './services/Unsplash'

export default {
  data: function () {
    return {
      imageList: [],
      loading: false,
      searchQuery: '',
      error: ''
    }
  },
  watch: {
    $route: function () {
      this.fetchData(this.$route.query.q)
    }
  },
  methods: {
    fetchData (q) {
      this.loading = true
      Unsplash.search
        .getPhotos({
          query: q || 'Africa',
          page: 1,
          perPage: 8,
          orientation: 'portrait'
        })
        .then((result) => {
          if (result.errors) {
            console.log('error occurred: ', result.errors[0])
          } else {
            const photo = result.response
            this.imageList = photo.results
          }
        })
        .catch((e) => {
          console.log(e)
        })
        .finally(() => {
          this.loading = false
        })
    },
    goToSearchPage (query) {
      this.$router.push({ path: 'result', query: { q: query } })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
