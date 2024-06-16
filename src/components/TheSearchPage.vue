<template>
  <header class="head">
    <div class="container">
      <div class="menu flex justify-between">
        <h3 class="logo">Home</h3>
        <ul class="flex justify-between w-[300px]">
          <li>
            <router-link to="search">{{ $t('search') }}</router-link>
          </li>
          <li>
            <select v-model="$i18n.locale">
               <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
                  {{ locale }}
               </option>
            </select>
          </li>
        </ul>
      </div>

    </div>
  </header>
</template>


<script>
export default {
   
}
</script>


<style></style>