<template>
<div class="container">
  <span class="app-title">{{title}}</span>
  <div class="row">
    <div class="col-md-6">
     <ul>
       <router-link v-for="source in newSources" :key="source.id" :to="{path:'headlines', query:{source: source.id}}">
         {{source.name}}
         </router-link>
       </ul>
      </div>
      <div class="col-md-6">
        <input type="text" placeholder="search sources" v-on:keyup="searchSources">
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Source',
  data () {
    return {
      title: 'News Central',
      newSources: null
    }
  },
  created () {
    this.fetchSources()
  },
  methods: {
    fetchSources: function () {
      const baseUrl = process.env.BASEURL
      const apiKey = process.env.APIKEY
      this.$http.get(`${baseUrl}/sources?apiKey=${apiKey}`).then(response => {
        this.newSources = response.data.sources
      })
    },
    searchSources: function (e) {
      const searchString = e.target.value.trim().toLowerCase()
      if (searchString.length > 0) {
        this.newSources = this.newSources.filter(function (source) {
          const itemName = source.name.trim().toLowerCase()
          return itemName.match(searchString)
        })
      } else {
        this.fetchSources()
      }
    }
  }
};
</script>

<style>
.app-title {
  text-align: center;
}
</style>
