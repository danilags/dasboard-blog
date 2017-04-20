<template lang="html">
  <div class="beranda">
    <h3>Welcome Home</h3>
    <div class="list-article">
      <ul v-for="article in articles">
        <li><h3>{{ article.title }}</h3></li>
        <li><p>{{ article.content }}</p></li>
        <li><span>By: {{ article.author.name }}</span></li>
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
              res.data.forEach(function(data) {
                self.articles.push(data)
              })
            }).catch(function(err) {
              console.log(err);
            })
    }
  },
  mounted() {
    this.getArticles()
  }
}
</script>

<style lang="css">
.list-article ul {
    list-style: none;
    text-align: left;
}

.list-article p {
    width: 60%;
    text-align: justify;
}
</style>
