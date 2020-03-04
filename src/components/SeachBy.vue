<template>
   <v-container grid-list-xs>
       <v-row  justify-space-between>
           <v-col sm='1'>
               <h3>Search</h3>
           </v-col>
        <v-col class="d-flex"  sm="3">
          <v-select
          :items="search"
          label="Stories"
          dense
          solo
          v-model="searchBy.search"
          v-on:change="Searches"
          ></v-select>
      </v-col>
      <v-col sm='1'>
          <h3>By</h3>
      </v-col>
      <v-col class="d-flex" sm='3'>
          <v-select dense solo label='Date' :items='by' v-model="searchBy.by" v-on:change="SearchBy"> </v-select>
      </v-col>
      <v-col sm='1'>
          <h3>for</h3>
      </v-col>
      <v-col class="d-flex" sm='3'>
          <v-select dense solo :items='time'  label="All time" v-model="searchBy.time" v-on:change="SearchTime"></v-select>
      </v-col>
    
       </v-row>
       
        
   </v-container>
</template>

<script>
export default {
    data(){
        return{
            search: ['all', 'story', 'comment'],
            by: ['Date', 'Popularity'],
            time: ['All time', 'Last 24h', 'Past Week', 'Past Month', 'Past Year'],
            searchBy: [{
                search: '',
                by: '',
                time: '',
            }]
        }
    },
    methods: {
        Searches(){
            //console.log('change', this.searchBy.search)
            this.$store.dispatch('getSearches', this.searchBy.search);
        },
        SearchBy(){
            //console.log('change', this.searchBy.by);
            var apply = 'by'
            var sort = apply.concat(this.searchBy.by)
            this.$store.dispatch('getSearchBy', sort);
        },
        SearchTime(){
            //console.log('change', this.searchBy.time);
            var element = this.searchBy.time;
            element = element.replace(/\s/g, '');
            var firstLetter  = element.charAt(0).toLowerCase();
            var dateRange = firstLetter  + element.slice(1);
            console.log(dateRange)
            this.$store.dispatch('SearchTime', dateRange);
        }
    }

}
</script>

<style>

</style>
