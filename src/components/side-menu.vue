<template>
  <v-navigation-drawer v-model="drawer" fixed app clipped>
    <v-list density="comfortable" class="pt-3 white--text">
      <v-list-item v-for="source in sources"
                   :key="source.id"
                   @click="onSourceSelected(source)">
        <v-list-item-avatar start rounded>
          <v-avatar>
            <v-img class="elevation-7 mb-1"
                   :src="source.urlToLogo"
                   :alt="source.name"/>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-title class="mx-2">{{ source.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { NewsApiService } from "../core/services/news-api.service";

export default {
  name: "side-menu",
  props: {
    drawer: Boolean
  },

  data() {
    return {
      sources: [],
      errors: [],
      newsApi: new NewsApiService()
    }
  },

  created() {
    this.newsApi.getSources()
        .then(response => {
          this.sources = response.data.sources;
          this.sources.forEach(source => source.urlToLogo = this.newsApi.getUrlToLogo(source));
          console.log(`data: ${ response.data.sources }`);
        })
        .catch(e => {
          this.errors.push(e);
        });
  },

  methods: {
    onSourceSelected(source) {
      this.$emit('source-selected', source);
    }
  }

}
</script>
