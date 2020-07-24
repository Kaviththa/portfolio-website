<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      :permanent="permanent"
      :src="bg"
      dark
      app
    >
      <v-list dense nav class="">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="mx-16" size>SIMON DOE</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item-avatar size="100" class="mx-14 my-0">
          <img src="/img/man.jpg" />
        </v-list-item-avatar>

       
          <p class="text-center caption font-weight-thin" >
            Hi my name is Simon Doe and I'm a senior software engineer.
            Welcome to my personal website
          </p>
        

        <div class="text-center">
          <v-btn
            class="mx-1"
            fab
            depressed
            outlined
            x-small
            color="white"
            flex
            v-for="icon in icons"
            :key="icon"
          >
            <v-icon :color="white">{{icon}}</v-icon>
          </v-btn>
        </div>

        <v-divider class="mt-2"></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon class="mx-5">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="text-Body-2 font-weight-thin">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-btn class="mt-1 mx-14 text-capitalize" small outlined dark depressed color="white">
          <v-icon right dark class="mx-1">mdi-telegram</v-icon>Hire me
        </v-btn>
        <v-divider class="mt-4"></v-divider>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="caption font-weight-thin">Background</v-list-item-title>
          </v-list-item-content>
          <v-switch v-model="background"></v-switch>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="#fff" flat>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "About Me", icon: "mdi-account-tie" },
      { title: "Services", icon: "mdi-toolbox-outline" },
      { title: "Resume", icon: "mdi-file-outline" },
      { title: "Blog", icon: "mdi-post" },
      { title: "Contact", icon: "mdi-phone-outline" }
    ],

   icons: [
      "mdi-youtube",
      "mdi-linkedin",
      "mdi-twitter",
      "mdi-github",
      "mdi-chat"
    ],

    color: "black",
    right: false,
    permanent: false,
    miniVariant: false,
    expandOnHover: false,
    background: true
  }),

  computed: {
    bg() {
      return this.background
        ? "https://www.alialabs.com/boomerang/assets/sky-forms/img/bg-cyan.jpg"
        : undefined;
    }
  }
};
</script>
