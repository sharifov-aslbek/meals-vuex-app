<template>
   <div class="container mt-12">
      <div class="box flex items-center my-12 justify-around">
      <div class="img">
         <img class="rounded-lg h-[600px]" :src="filterCard.strMealThumb" alt="#">
      </div>

      <div class="text-content">
         <h2 class="text-orange-400 font-bold text-[30px] w-[400px]">{{ filterCard.strMeal }}</h2>
         <h4><span class="text-orange-400 font-bold">Category:</span> {{ filterCard.strCategory }}</h4>
         <div class="recipe">
            <h3>Product Recipe:</h3>
            <p class="w-[500px] text-orange-400">{{ filterCard.strInstructions }}</p>
         </div>
         <h4>Youtube click to watch > <a :href="filterCard.strYoutube" class="text-orange-400 font-bold">Watch</a></h4>
      </div>

   </div>
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