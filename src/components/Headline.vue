<template>
<div class="container">
  <div class= "row">
    <h2 v-if="showTitle">{{title}} Headlines</h2>
    <ul>
      <li v-for="headline in headlines" :key="headline.source.id">{{headline.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getQueryString } from '../utils/service'
export default {
  name: 'Headlines',
  data () {
    return {
      title: null,
      headlines: null,
      showTitle: false
    }
  },
  created () {
    this.getHeadlines()
  },
  methods: {
    getHeadlines: function () {
      const baseUrl = process.env.BASEURL
      const apiKey = process.env.APIKEY
      const queryString = getQueryString(window.location.hash)
      this.$http.get(`${baseUrl}/top-headlines?sources=${queryString}&apiKey=${apiKey}`).then(response => {
        this.headlines = response.data.articles
        this.title = response.data.articles[0].author
        this.showTitle = true
      })
    }
  }
}
</script>
