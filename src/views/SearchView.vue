<template>
   <div class="container">
      <div class="top-content flex items-center flex-col gap-5">
         <h1>Search Meals</h1>
         <input type="text" v-model="inputValue" placeholder="Search meals .." class="outline-none border-2 rounded-md px-3 border-orange-400">
         <button class="searcher bg-orange-400 py-1 px-5" @click="navigateHandler">Search</button>
      </div>
      <div class="nothing flex items-center mt-10 gap-3 flex-col" v-if="!searchArr">
         <h1>There are no products found</h1>
         <img src="https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png" alt="#">
      </div>
      <div class="article-box flex flex-wrap gap-5 justify-center">
         <div class="articles flex items-center flex-col h-[400px]" v-for="item in searchArr">
            <h2 class="w-[300px]">{{ item.strMeal }}</h2>
            <div class="btn absolute mt-40 z-20" v-if="checkEnter == item.idMeal">
               <button class="text-black font-bold">Read more</button>
            </div>
            <div class="img relative cursor-pointer transition" @mouseenter="checkEnterId(item.idMeal)" @mouseleave="checkEnter = ''" @click="navigatePage(item.idMeal)">
               <img :src="item.strMealThumb" alt="" class="w-[300px] hover:opacity-70">
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import {mapState} from 'vuex'
export default {
   data() {
      return {
         inputValue: '',
         checkEnter: '',
      }
   },
   computed: {
      ...mapState({
        searchArr: state => state.api.searchArr,
     }),
   },
   methods: {
      navigateHandler() {
         return this.$store.dispatch('searchArticle' , this.inputValue)
      },
      checkEnterId(id) {
         this.checkEnter = id
      },
      navigatePage(id) {
         return this.$router.push(`/search-read/${id}`)
      }
   }

}
</script>

<style>
</style>