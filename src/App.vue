<template>
  <v-app light>
    <!--TODO: Add Side Menu -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-app-bar-title class="white--text">CatchUp</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <main-content :articles="articles"></main-content>
      </v-container>
      <v-footer class="secondary" app>
        <v-row justify="center" no-gutters>
          <div class="white--text ml-3">
            Made with <v-icon class="red--text">mdi-heart</v-icon> using <a class="white--text" href="https://next.vuetifyjs.com/" target="_blank">Vuetify</a> by ACME Studio Developer Team
          </div>
        </v-row>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>

import axios from "axios";
import MainContent from "./components/main-content.vue";

export default {
  name: 'App',


  components: {
    MainContent

  },

  data() {
    return {
      drawer: false,
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

    // On Source selected
    setSource(source) {
      this.drawer = !this.drawer;
      this.getArticlesForSource(source.id);
    },

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
