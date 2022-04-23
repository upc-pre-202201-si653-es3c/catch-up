<template>
  <v-btn-toggle v-model="$i18n.locale">
    <v-btn size="small" class="text-white"
           v-for="lang in languages"
           :value="lang">{{ lang }}</v-btn>
  </v-btn-toggle>
</template>

<script>
export default {
  name: "language-switcher",
  data() {
    return {
      languages: ['en', 'es']
    }
  }
}
</script>

