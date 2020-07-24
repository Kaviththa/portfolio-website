<template>
  <v-app >
    <Darkmode/> 

    <v-content>
       <router-view></router-view>
       
    </v-content>
    <!-- <Footer/> -->
  </v-app>
</template>

<script>
 import Darkmode from '@/components/Darkmode.vue'
//  import Footer from '@/components/Footer.vue'

export default {

  name: "App",

  components: {
   Darkmode,
  //  Footer
  },

  data: () => ({
    //
  })
};
</script>
