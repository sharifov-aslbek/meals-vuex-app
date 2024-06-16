import ArticleService from "../service/article"

const state = {
   data: [],
   searchArr: null,
   letterArticle: null,
   isLoading: false
}


const mutations = {
   getArticleStart(state) {
      state.data = null,
      state.isLoading = true
   },
   getArticleSuccess(state , payload) {
      console.log('Payload' , payload)
      state.data = payload
      state.isLoading = false
   },
   getArticleFailure(state) {
      state.isLoading = false
   },
   getStartSeacher(state) {
      state.searchArr = null
   },
   getSearchArticleSuccess(state , payload) {
      state.searchArr = payload
   },
   getLetterArticleStart(state) {
      state.letterArticle = null
   },
   getLetterArticleSuccess(state , payload) {
      state.letterArticle = payload
   }
}

const actions = {
   articles(context) {
      return new Promise((resolve, reject) => {
         context.commit('getArticleStart')
         ArticleService.articles()
         .then(response => {
            context.commit('getArticleSuccess' , response.data.categories)
         })
         .catch(() => context.commit('getArticleFailure'))
      })
   },
   searchArticle(context, value) {
      return new Promise((resolve, reject) => {
         context.commit("getStartSeacher")
         ArticleService.searchArticle(value).then(response => {
            console.log(response.data.meals)
            context.commit('getSearchArticleSuccess' , response.data.meals)
         })
      })
   },
   letterArticle(context, value) {
      return new Promise((resolve, reject) => {
         context.commit("getLetterArticleStart")
         ArticleService.letterArticle(value).then(response => {
            console.log(response.data.meals)
            context.commit('getLetterArticleSuccess' , response.data.meals)
         })
      })
   }
}



export default {
   state , mutations , actions
}