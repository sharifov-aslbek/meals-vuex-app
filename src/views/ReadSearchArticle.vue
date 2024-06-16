<template>
   <div>
   {{ filterCard }}   
   </div>
</template>


<script>
import { mapState } from 'vuex';
export default {
   computed: {
    ...mapState({
        article: state => state.api.searchArr,
     }),
     filterCard() {
      return this.article.find(item => item.idMeal === this.$route.params.id)
     }
  },
  
}
</script>

<style>
</style>