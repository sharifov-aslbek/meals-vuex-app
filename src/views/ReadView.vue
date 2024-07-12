<template>
   <div class="container">
      <div class="about-card flex flex-col items-center text-center" v-if="card">
         <h1 class="text-[35px] font-bold text-orange-400">{{ filterCard.strCategory }}</h1>
         <img :src="filterCard.strCategoryThumb" alt="#">
         <p class="text-orange-400 w-[600px]">{{ filterCard.strCategoryDescription }}</p>
         <button class="button bg-orange-400 text-white border-none py-2 px-5 mt-4 rounded-md" @click="$router.push('/')">{{ $t('home') }}</button>
      </div>

   </div>
</template>

<!-- <script>
import { mapState } from 'vuex';
export default {
   computed: {
    ...mapState({
        card: state => state.api.data,
        loader: state => state.api.isLoading
     }),
     filterCard() {
      return this.card.find(item => item.strCategory === this.$route.params.slug)
     }
  },
}
</script> -->

<script setup>
import {ref , computed} from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
let router = useRoute()
let store = useStore()
let card = computed(() => store.state.api.data)
let loader = computed(() => store.state.api.isLoading)
const filterCard = computed(() => {
   return card.value.find(item => item.strCategory === router.params.slug)
})
</script>


<style>
</style>