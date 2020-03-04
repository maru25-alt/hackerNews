<template>
  <div class="home">
    <SearchBy />
    <Stories />
   <NextPage />
  </div>
</template>

<script>
// @ is an alias to /src

import SearchBy from '@/components/SeachBy.vue'
import NextPage from '@/components/NextPage.vue'
import Stories from '@/components/Stories.vue'
export default {
  name: 'Home',
  components: {
   SearchBy,
   NextPage,
   Stories
  },
  data(){
    return{

    }
  }
}
</script>
