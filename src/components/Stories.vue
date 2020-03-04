<template>
    <div class="stories">
       <v-container  grid-list-xs v-for="story in stories" :key="story.objectID">
           
           <div v-if="search === 'comment'" >
             <h3>{{story.story_title}}</h3>
             <h5>by: {{story.author}}</h5>
             <a :href="story.story_url">{{story.story_url}}</a>
             <p>{{story.comment_text}}</p>
              <h6>{{story.created_At_i | CreatedAt}}   | {{story.points}} points   </h6>
           </div>
           <div v-else >
               <h2>{{story.title}}</h2>
               <a :href="story.url">{{story.url}}</a> 
               <h4>by: {{story.author}}</h4>     
               <h4>{{story.story_title}}</h4>  
               <h6>{{story.created_At_i | CreatedAt}}   | {{story.points}} points   | {{story.num_comments}} comments</h6>
           </div>
       </v-container> 


    </div>
</template>

<script>
import {mapState} from 'vuex'
import moment from 'moment'
export default {
   
    created(){
       this.$store.dispatch('getStories') 
    },
    filters:{
       CreatedAt(){
         return  moment().startOf('day').fromNow();
       }
    },
    computed: {
     ...mapState({
      stories: state => state.stories,
      search: state => state.searches
      }),
   },
}
</script>

<style>

</style>
