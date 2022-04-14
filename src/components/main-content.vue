<template>
  <v-layout row wrap align-center>
    <div class="xs8 offset-md-2">
      <div v-for="article in articles" :key="article.title">
        <v-card class="my-3" hover>
          <v-img :src="article.urlToImage"></v-img>
          <v-container fill-height fluid>
            <v-layout>
              <div class="xs12 align-end d-flex">
                <span class="headline">{{ article.title }}</span>
              </div>
            </v-layout>
          </v-container>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-actions>
            <v-chip small color="secondary" class="white--text">
              {{ article.source.name }}
            </v-chip>
            <v-spacer></v-spacer>
            <v-btn icon="mdi-reddit" color="red--text"></v-btn>
            <v-btn icon="mdi-twitter" color="light-blue--text"></v-btn>
            <v-btn icon="mdi-facebook" color="blue--text text--darken-4"></v-btn>
            <v-btn icon="mdi-google-plus" color="red--text"></v-btn>
            <v-btn icon="mdi-linkedin" color="blue--text text--darken-4"></v-btn>
            <v-spacer></v-spacer>
            <v-btn small replace color="info" v-bind:href="article.url" target="_blank">Read More</v-btn>
          </v-card-actions>
        </v-card>
      </div>
    </div>
  </v-layout>
</template>

<script>
export default {
  name: "MainContent",
  props: {
    articles: Array
  }
}
</script>

