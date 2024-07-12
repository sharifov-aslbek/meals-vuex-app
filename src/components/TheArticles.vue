<template>
   <section>
      <div class="container">
         <h1 class="text-[40px] text-orange-400 font-bold">{{ $t('random') }}</h1>
         <div class="loader flex flex-wrap justify-center gap-5 mt-12" v-if="loader">
            <div
         class="flex flex-col bg-neutral-300 w-[321px] h-[279px] animate-pulse rounded-sm p-4 gap-4" v-for="item in 14">
         <div class="bg-neutral-400/50 w-full h-32 animate-pulse rounded-sm"></div>
         <div class="flex flex-col gap-2">
         <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
         <div class="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
         <div class="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
         <div class="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
         </div>
      </div>
         </div>

         <div class="cards flex flex-wrap items-center justify-center gap-5 mt-12 text-center" v-else>
            <div class="card border border-orange-400 hover:bg-orange-300 cursor-pointer" v-for="meal in card">
               <img :src="meal.strCategoryThumb" alt="#">
               <h3>{{ meal.strCategory }}</h3>
               <button class="btn mt-3 mb-4 border border-red-400 px-4 hover:bg-red-600" @click="navigateHandler(meal.strCategory)">{{ $t('read') }}</button>
               <!-- <p>{{ meal.strCategoryDescription }}</p> -->
            </div>
         </div>
      </div>
   </section>
</template>

<!-- <script>
import { mapState } from 'vuex';
export default {
   computed: {
    ...mapState({
        card: state => state.api.data,
        loader: state => state.api.isLoading
     }),
  },
  methods: {
   navigateHandler(name) {
      console.log(name);
      return this.$router.push(`/read/${name}`)
   }
  },
}
</script> -->


<script setup>
   import { computed } from 'vue';
   import { useStore } from 'vuex';
   import { useRouter } from 'vue-router';
   import { onMounted } from 'vue';

   const store = useStore()
   const route = useRouter()
   const card = computed(() => store.state.api.data)
   const loader = computed(() => store.state.api.isLoading)
   function navigateHandler (name) {
      route.push(`/read/${name}`)
   }

   onMounted(() => {
  console.log('Component has been mounted');
});

</script>
<style></style>