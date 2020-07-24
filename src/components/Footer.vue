<template>
    <v-footer
      inset="footer.inset"
      app
       color="teal lighten-2"
       padless
       absolute
    >
     <v-row
      justify="center"
      no-gutters
    >
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
      
         icon
        class="my-2"
      >
       <v-icon dark>{{link}}</v-icon>
       
      </v-btn>
      <!-- <v-col
        class="teal lighten-1 py-4 text-center white--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Semon Doe</strong>
      </v-col> -->
    </v-row>
    </v-footer>
</template>
<script>
  export default {
    data: () => ({
      links: [
         "mdi-twitter",
      "mdi-linkedin",
      "mdi-github",
      "mdi-instagram",
      "mdi-mail ",
      "mdi-stack-overflow",
      "mdi-codepen"
      ],
    }),
  }
</script>