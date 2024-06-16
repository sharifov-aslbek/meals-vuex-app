import axios from "axios";

const ArticleService = {
   articles() {
      return axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
   },
   searchArticle(name) {
      return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
   },
   letterArticle(name) {
      return axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${name}`)
   }
}

export default ArticleService