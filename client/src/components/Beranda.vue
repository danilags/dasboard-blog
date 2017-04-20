<template lang="html">
  <div class="beranda">
    <h3>Welcome Home</h3>
    <div class="list-article">
      <ul v-for="article in articles">
        <li> {{ article.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      articles : []
    }
  },
  methods: {
    getArticles() {
      let self = this
      axios.get('http://localhost:3000/articles')
            .then(function(res) {
              // console.log(res);
              self.articles.push(res.data)
            }).catch(function(err) {
              console.log(err);
            })
            console.log(self.articles);
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style lang="css">
</style>
