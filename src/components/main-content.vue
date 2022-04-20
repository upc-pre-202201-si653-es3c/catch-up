<template>
  <v-container>
    <v-row>
      <v-col v-for="article in articles" :key="article.title">
        <article-card :article="article"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ArticleCard from "./article-card.vue";
export default {
  name: "MainContent",
  components: {
    ArticleCard
  },
  props: {
    articles: Array
  }
}
</script>

