<template>
  <TheSearchPage />
  <TheArticles />

</template>


<script>
import TheSearchPage from '@/components/TheSearchPage.vue'
import TheArticles from '@/components/TheArticles.vue'
import { mapState } from 'vuex'
export default {
  components: {TheSearchPage , TheArticles},
  mounted() {
    this.$store.dispatch("articles")
  },

}
</script>

<style>
</style>