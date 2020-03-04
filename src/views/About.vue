<template>
  <v-container class="about">
    <v-row>
      <v-col>
        <v-btn to="/" color="primary"> Back</v-btn>
      </v-col>
    </v-row>
   


<v-row id="colorlib-page">
		<v-col class="col-4">
			
				<div >
					<h3>Subscribe for newsletter</h3>
					<form  v-if="subscribe === false" @submit.prevent="Subscribe" class="colorlib-subscribe-form" >
            <div class="form-group d-flex">
              <v-text-field v-model="email" type="email" prepend-inner-icon="fas fa-paper-plane" outlined class="form-control" placeholder="Enter Email Address"></v-text-field>
            </div>
          </form>
          <div v-if="subscribe">
            <h6>You are successfully subscribe</h6>
            <v-btn @click="unsubscribe" color="primary">UnSuscribe</v-btn>

          </div>
          
				</div>
				
		  <div class="col-lg-4 mb-4">
                            <h4>Follow me on social media:</h4>
                            <div class="row">
                                 <v-btn text  href="https://www.facebook.com/rudo.mapfumba"> <v-icon>fab fa-facebook</v-icon> @Rudo Mapfumba  </v-btn>
                                    <v-btn text href="https://www.linkedin.com/in/rudo-maru-6023a9167/"><v-icon>fab fa-linkedin</v-icon>  @rudo Mapfumba </v-btn>
                                    <v-btn text href="https://www.instagram.com/mapfurudo/"><v-icon>fab fa-instagram</v-icon>   @mapfurudo</v-btn>
                                    <v-btn text href="https://twitter.com/MapfumbaRudo"><v-icon>fab fa-twitter</v-icon>  @mapfumbarudo </v-btn>
                            </div>
                                    
                          </div>
		</v-col> <!-- END COLORLIB-ASIDE -->


        <v-col class="col-8">
	    
	    	   	<v-avatar
               size="300"
               class="profile"
               color="#fff"
             >
               <img src="../assets/pro.jpg" width="300" alt="alt">
             </v-avatar>
	    		
	    				<div >
		            <h2 >I'm <span>Rudo Mapfumba</span> a Developer </h2>
		            <p>I am a Computer Science student at Ocean University.I'm passionate about  building fascinating apps with new technologies </p>
	            </div>
		     
	
        </v-col>
</v-row>




        

  </v-container>
</template>



<script>

export default {
  data() {
    return {
      email: '',
      subscribe: false
    }
  },
  methods: {
    Subscribe(){
       alert(`${this.email}, thanks for subscribing`)
       this.email = '',
       this.subscribe = true
    },
    unsubscribe(){
      this.subscribe = false

    }
}
}
</script>
