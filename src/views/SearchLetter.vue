<template>
   <div class="letters flex items-center justify-center gap-5 mt-40">
      <button v-for="letter in lettersArray" @click="checkName(letter.name)">
         {{ letter.name }}
      </button>
   </div>
   <div class="cards flex flex-wrap justify-center gap-5 mt-40">
      <div class="card" v-for="item in letterArr">
      <h2>{{ item.strMeal }}</h2>
      <div class="category flex gap-3">
         <span>Category meal:</span>
         <h3>{{ item.strCategory }}</h3>
      </div>
      <img class="w-[350px]" :src="item.strMealThumb" alt="#">
   </div>
   <h3 class="flex justify-center mt-40">Click letter to view meals</h3>
   </div>
</template>


<!-- <script>
import {mapState} from 'vuex'
export default {
   computed: {
      ...mapState({
         letterArr: state => state.api.letterArticle
      })
   },
   data() {
      return {
         lettersArray: [
            {
               name: 'a',
            },
            {
               name: 'b',
            },
            {
               name: 'c',
            },
            {
               name: 'd',
            },
            {
               name: 'e',
            },
            {
               name: 'f',
            },
            {
               name: 'g',
            },
            {
               name: 'h',
            },
            {
               name: 'i',
            },
            {
               name: 'j',
            },
            {
               name: 'k',
            },
            {
               name: 'l',
            },
            {
               name: 'm',
            },
            {
               name: 'n',
            },
            {
               name: 'o',
            },
            {
               name: 'p',
            },
            {
               name: 'z',
            },
            {
               name: 'y',
            },
         ]
      }
   },
   methods: {
      checkName(name) {
         return this.$store.dispatch('letterArticle' , name)
      }
   },
}
</script> -->

<script setup>
import { computed, ref } from 'vue';  
import { useStore } from 'vuex';
let store = useStore()
let lettersArray = ref([
{
               name: 'a',
            },
            {
               name: 'b',
            },
            {
               name: 'c',
            },
            {
               name: 'd',
            },
            {
               name: 'e',
            },
            {
               name: 'f',
            },
            {
               name: 'g',
            },
            {
               name: 'h',
            },
            {
               name: 'i',
            },
            {
               name: 'j',
            },
            {
               name: 'k',
            },
            {
               name: 'l',
            },
            {
               name: 'm',
            },
            {
               name: 'n',
            },
            {
               name: 'o',
            },
            {
               name: 'p',
            },
            {
               name: 'z',
            },
            {
               name: 'y',
            },
]) 

let letterArr = computed(() => store.state.api.letterArticle)
const checkName = async (name) => {
   await store.dispatch('letterArticle' , name)
}

</script>
<style>
</style>