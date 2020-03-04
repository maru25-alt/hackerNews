<template>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="pageNumbers"
      circle
      @input="Next"
    ></v-pagination>
   
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    data () {
      return {
        page: 1,
      }
    },
     computed: {
     ...mapState({
      pageNumbers: state => state.pageNumbers
      }),
   },
   methods: {
       Next(){
           console.log('next', this.page)
           this.$store.dispatch('getPageStories', this.page);
           window.scrollTo({ top: 0});

       }
   }

}
</script>

<style>

</style>
