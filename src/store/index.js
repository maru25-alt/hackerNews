import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    stories: [],
    pageNumbers: '',
    page: 1,
    query: '',
    searches: '',
    sort: '',
    dateRange: '',
  },
  mutations: {
    SET_STORIES(state, stories){
      state.stories = stories
    },
    SET_PAGE_NUMBERS(state, pageNumbers){
      state.pageNumbers = pageNumbers
    },
    SET_PAGE(state, page){
       state.page = page
    },
    SET_QUERY(state, query){
      state.query = query
    },
    SET_SEARCHES(state, search){
        state.searches = search
    },
    SET_SORT(state, sort){
      state.sort = sort
    },
    SET_DATE_RANGE(state, dateRange){
      state.dateRange = dateRange
    }

    
  },
  actions: {
   async getStories({commit,state}){
     let page = state.page
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=30&page=${page}`);
       const stories  = response.data.hits
       const pageNumbers = response.data.nbPages
       // console.log(response)
       commit('SET_STORIES', stories)
       commit('SET_PAGE_NUMBERS', pageNumbers)
    },
    async getPageStories({commit}, page){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?tags=story&hitsPerPage=30&page=${page}`);
       const stories  = response.data.hits
        //console.log(response)
       commit('SET_STORIES', stories)
       commit('SET_PAGE', page)

    },
    async getSearchStories({commit, state}, query){
      let page = state.page
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&tags=story&page=1`);
       const stories  = response.data.hits
      
       commit('SET_STORIES', stories)
       commit('SET_QUERY', query)
    },
    async getSearches({commit, state},search){
      let query= state.query
      if(search === 'all'){
        search = '';
      }
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${search}&page=1`);
       const stories  = response.data.hits
       console.log(stories)
       commit('SET_STORIES', stories)
       commit('SET_SEARCHES',search)
    },
   
    async getSearchBy({commit, state}, sort){
        var query, search
        query = state.query;
        search = state.searches;
        let response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&tags=${search}&page=1&sort=${sort}`);
        const stories  = response.data.hits
       //console.log(stories)
       commit('SET_STORIES', stories)
       commit('SET_SORT',sort)


    },

   

    async SearchTime({commit, state}, daterange){
      var query, search, sort
      query = state.query;
      search = state.searches;
      sort = state.sort

      var seconds;
    
      switch(daterange){
        case 'last24h': 
         seconds = 24 * 60 * 60;
         break;

         case 'pastWeek':
          seconds = 24 * 60 * 60 *24 *7;
          break;

         case 'pastMonth':
          seconds = 24 * 60 * 60 *24 * 30;
          break;
         case 'pastYear':
          seconds = 24 * 60 * 60 *24 * 30 * 12;
          break;

          default: 
          seconds = 0;
          break;
      }

      let response = await axios.get(`http://hn.algolia.com/api/v1/search?search_by_date?&query=${query}&tags=${search}&page=1&sort=${sort}&numericFilters=created_at_i > ${seconds}, `);
      const stories  = response.data.hits
     //console.log(stories)
     commit('SET_STORIES', stories)
     commit('SET_DATE_RANGE',daterange)
    }
  },
  modules: {
  }
})
