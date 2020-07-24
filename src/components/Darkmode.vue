<template>
  <div>
    <v-navigation-drawer
      v-model="primaryDrawer.model"
      :floating="primaryDrawer.floating"
      app
      overflow
      :src="bg"
    >
      <div class="text-center mx-3 white--text">
        <p class="text-h6 font-weight-bold my-4">Simon Doe</p>
        <p>
          <v-avatar size="130" class="mx-auto">
            <img src="/img/man.jpg" />
          </v-avatar>
        </p>
        <p class="text-body-2 font-weight-light">
          Hi my name is Simon Doe and I'm a senior software engineer.
          Welcome to my personal website
        </p>
      </div>
      <div class="text-center">
        <v-btn
          class="mx-1"
          fab
          depressed
          x-small
          flex
          v-for="icon in icons"
          :key="icon"
          :class="[$vuetify.theme.dark ? 'teal lighten-2 ' : 'white']"
        >
          <v-icon :class="[$vuetify.theme.dark ? 'white--text ' : 'teal--text']" medium>{{icon}}</v-icon>
        </v-btn>
      </div>

      <v-divider class="mt-2"></v-divider>
      <v-list dense nav class flat dark>
        <v-list-item v-for="item in items" :key="item.title" :to="item.path" color="teal">
          <v-list-item-icon class="mx-5">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-subtitle-2 font-weight-bold">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn class="mt-1 mx-14 text-capitalize font-weight-bold teal lighten-1" medium depressed>
          <v-icon right class="mx-1">mdi-telegram</v-icon>Hire me
        </v-btn>
        <v-divider class="mt-4"></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-body-2">Dark Mode</v-list-item-title>
          </v-list-item-content>
          <v-switch v-model="$vuetify.theme.dark" color="teal" inset></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar flat app>
      <v-app-bar-nav-icon @click.stop="primaryDrawer.model = !primaryDrawer.model"></v-app-bar-nav-icon>
    </v-app-bar>

    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Footer
  },
  data: () => ({
    primaryDrawer: {
      model: null,

      floating: true
    },
    background: true,
    color: "teal",
    items: [
      { title: "About Me", icon: "mdi-account-tie", path: "/" },
      { title: "Portfolio", icon: "mdi-desktop-mac", path: "/portfolio" },
      { title: "Services", icon: "mdi-bag-personal", path: "/service" },
      { title: "Resume", icon: "mdi-post", path: "/resume" },
      { title: "Blog", icon: "mdi-format-bold", path: "/blog" },
      { title: "Contact", icon: "mdi-tablet-cellphone", path: "/contact" }
    ],
    icons: [
      "fab fa-twitter",
      "fab fa-linkedin-in",
      "fab fa-github-alt",
      "fab fa-stack-overflow",
      "fab fa-codepen"
    ]
  }),
  computed: {
    bg() {
      return this.background && !this.$vuetify.theme.dark
        ? "img/bg-cyan.jpg"
        : "img/bg-cyan-3.jpeg";
    }
  }
};
</script>
<style>
::-webkit-scrollbar {
  width: 6px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: teal;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>