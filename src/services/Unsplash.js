import { createApi } from 'unsplash-js'

const Unsplash = createApi({
  accessKey: process.env.VUE_APP_ACCESS_KEY
})

export default Unsplash
