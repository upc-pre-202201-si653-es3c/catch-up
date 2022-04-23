<template>
    <v-card class="ma-2 elevation-1" hover>
      <v-img class="white--text align-end" cover
          :src="article.urlToImage"
          :alt="article.title"
          gradient="to bottom, rgba(0, 0, 0, .1), rgba(0, 0, 0, .5)">
        <v-card-title class="ma-3 text-white" v-text="article.title"></v-card-title>
      </v-img>
      <v-card-text class="ma-2">
        {{ article.description }}
      </v-card-text>
      <v-card-actions class="ma-2">
        <v-chip v-if="article.source.url" size="x-small" color="primary" link :href="article.source.url" target="_blank">
          {{ article.source.name }}
        </v-chip>
        <v-chip v-else size="x-small" color="primary">
          {{ article.source.name }}
        </v-chip>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-reddit" color="red--text"></v-btn>
        <v-btn icon="mdi-twitter" color="light-blue--text"></v-btn>
        <v-btn icon="mdi-facebook" color="blue--text text--darken-4"></v-btn>
        <v-btn icon="mdi-google-plus" color="red--text"></v-btn>
        <v-btn icon="mdi-linkedin" color="blue--text text--darken-4"></v-btn>
        <v-spacer></v-spacer>
        <v-btn small replace color="info" :href="article.url" target="_blank">{{ $t('read-more') }}</v-btn>
      </v-card-actions>
    </v-card>

</template>

<script>
export default {
  name: "article-card",
  props: {
    article: null,
  }
}
</script>
