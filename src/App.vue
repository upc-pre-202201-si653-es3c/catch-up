<template>
  <v-app>
    <v-main>
      <HelloWorld/>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from "axios";

export default {
  name: 'App',


  components: {
    HelloWorld,
  },

  data() {
    return {
      //
      apiKey: 'fecf4feeffa64e4da682e7d268612ce5',
      articles: [],
      errors: [],
    };
  },
  created() {
    console.log('Created');
    this.getArticlesForSource('bbc-news');
  },

  methods: {

    // Fetch Articles for given Source

    getArticlesForSource(sourceId) {
      axios.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`)
          .then( response => {
            this.articles = response.data.articles;
            console.log(response.data);
          })
          .catch(error => {
            this.errors.push(error);
            console.log(this.errors);
          });

    }
  }
}
</script>
