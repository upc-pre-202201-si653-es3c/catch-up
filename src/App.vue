<template>
  <v-app theme="light">
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" class="white--text"></v-app-bar-nav-icon>
      <v-app-bar-title>CatchUp</v-app-bar-title>
      <v-spacer></v-spacer>
      <template v-slot:append>
        <language-switcher/>
      </template>
    </v-app-bar>
    <side-menu :drawer="drawer" v-on:source-selected="setSource"/>
    <v-main>
      <v-container fluid>
        <unavailable-content v-if="errors.count > 0" :errors="errors"/>
        <main-content v-else :articles="articles"></main-content>
      </v-container>
      <v-footer color="primary">
        <footer-content/>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
import MainContent from "./components/main-content.vue";
import { NewsApiService } from "./core/services/news-api.service";
import SideMenu from "./components/side-menu.vue";
import UnavailableContent from "./components/unavailable-content.vue";
import FooterContent from "./components/footer-content.vue";
import LanguageSwitcher from "./components/language-switcher.vue";

export default {
  name: 'App',


  components: {
    LanguageSwitcher,
    FooterContent,
    UnavailableContent,
    SideMenu,
    MainContent

  },

  data() {
    return {
      drawer: false,
      apiKey: 'fecf4feeffa64e4da682e7d268612ce5',
      articles: [],
      errors: [],
      newsApi: new NewsApiService()
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
      this.getArticlesForSourceWithLogo(source);
    },

    // Fetch Articles for given Source

    getArticlesForSource(sourceId) {
      this.newsApi.getArticlesForSource(sourceId)
          .then( response => {
            this.articles = response.data.articles;
            console.log(response.data);
          })
          .catch(error => {
            this.errors.push(error);
            console.log(this.errors);
          });

    },

    getArticlesForSourceWithLogo(source) {
      this.newsApi.getArticlesForSource(source.id)
          .then( response => {
            this.articles = response.data.articles;
            this.articles.forEach(article => article.source.url = source.url);
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
