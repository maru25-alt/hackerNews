<template>
   <v-app-bar app
      color="primary"
      dark
      height="150">
            <v-row >
             <v-col md='2'> 
                 <v-card max-height="120" to="/">
                     <div class="d-flex flex-no-wrap justify-space-between">
                          <div>
                             <v-avatar style="top: 30%">
                              <v-img src="../assets/logo.jpg"></v-img>
                             </v-avatar> 
                         </div>
                         <div>
                              <v-card-text small
                                 class="headline">  
                                Search <br> Hacker News 
                              </v-card-text>
                         </div>
                        
                     </div>
                 </v-card> 
             </v-col>
             <v-col md='8' >
                 <v-form @submit.prevent="Submit">
                     <v-text-field
                    append-icon="mdi-search-web"
                     name="name"
                     v-model="input"
                     value="value"
                     placeholder="Search stories by url , title or author"
                     single-line
                     background-color="#000"
                     outlined
                     clearable
                 ></v-text-field>
                 </v-form>
                 
             </v-col>
             <v-col md='2'>
                <v-btn to="/about" color="000" darken-1>About Me</v-btn>
             </v-col>
            </v-row>
         
    
   </v-app-bar>
</template>

<script>
export default {

    data(){
        return{
            input: '',
        }
    },
    methods: {
        Submit(){
            if(this.input !== ''){
               console.log(this.input)
                this.$store.dispatch('getSearchStories', this.input);
            }
            
        }
    }

}
</script>

<style>

</style>
