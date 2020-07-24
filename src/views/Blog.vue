<template>
  <div>
    <v-row>
      <v-col
        class="col-12 col-md-12 pb-7"
        :class="[$vuetify.theme.dark ? 'grey darken-3' : 'teal lighten-5']"
      >
        <div class="text-center" flat>
          <h1 class="font-weight-bold mt-5">A Blog About Software Development And Life</h1>
          <p>Welcome to my blog. Subscribe and get my latest blog post in your inbox.</p>
        </div>
        <div class="d-flex justify-center">
          <div class="col-md-4 px-2">
            <v-text-field solo-inverted flat label="Enter Your Email"></v-text-field>
          </div>
          <div class="col-md-2 px-2">
            <v-btn
              medium
              dark
              depressed
              block
              class="text-capitalize font-weight-bold teal lighten-2 my-1"
            >subscrib</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row class="d-flex justify-center mx-10 my-10">
      <v-col class="col-10 col-md-4" v-for="(blog,i) in blogs" :key="i">
        <v-hover v-slot:default="{ hover }">
          <v-card class="mx-auto" color max-width="600" height="500px">
            <v-img :aspect-ratio="16/9" :src="blog.banner">
              <v-fab-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out v-card--reveal white--text px-3"
                  :class="[$vuetify.theme.dark ? 'black' : 'teal']"
                  style="height: 100%;"
                >
                  <div class="d-flex">
                    <v-avatar size="80">
                      <v-img :src="blog.author"></v-img>
                    </v-avatar>
                    <ul class="text-body-2" style="list-style-type: none;">
                      <li>
                        <v-icon medium color="white">mdi-calendar-month</v-icon>
                        Published:{{blog.publish}}
                      </li>
                      <li>
                        <v-icon medium color="white">mdi-account-box</v-icon>
                        By: {{blog.by}}
                      </li>
                      <li>
                        <v-icon medium color="white">mdi-message</v-icon>
                        Comments:{{blog.comment}}
                      </li>
                    </ul>
                  </div>
                </div>
              </v-fab-transition>
            </v-img>
            <div class="pa-7">
              <a
                href="#"
                class="text-h6"
                :class="[$vuetify.theme.dark ? 'white--text' : 'black--text']"
              >{{blog.title}}</a>
              <p class="text-body-2 font-weight-regular mt-3">{{blog.des}}</p>
              
              <v-footer absolute class="font-weight-medium">
                <v-col class="text-center" cols="12">
                  <v-btn text>Read More <v-icon class="mx-3">mdi-eye</v-icon></v-btn>
                </v-col>
              </v-footer>
            </div>
          </v-card>
        </v-hover>
      
      </v-col>
    </v-row>
      <div class="text-center mb-16">
    <v-pagination
      v-model="page"
      :length="4"
      prev-icon="mdi-menu-left"
      next-icon="mdi-menu-right"
      color="teal"
    ></v-pagination>
  </div>
  </div>
</template>
<script>
export default {
  data: () => ({
     page: 1,
    blogs: [
      {
        banner: "img/blog-card-2.jpg",
        title: "Top 3 javascript framework",
        des:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
        author: "img/women.jpg",
        publish: "Feb 18, 2020",
        by: "Jacob Austin | CEO, Atom",
        comment: "5"
      },
      {
        banner: "img/blog-card-4.jpg",
        title: "About Remote Working",
        des:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
        author: "img/man1.jpg",
        publish: "Feb 18, 2020",
        by: "Jacob Austin | CEO, Atom",
        comment: "5"
      },
      {
        banner: "img/post-3.jpg",
        title: "A Guide to Becoming a Full-Stack Developer",
        des:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
        author: "img/man2.jpg",
        publish: "Feb 18, 2020",
        by: "Jacob Austin | CEO, Atom",
        comment: "5"
      },
      {
        banner: "img/post-4.jpg",
        title: "How to Build Desktop Apps with HTML, CSS and JavaScript",
        des:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
        author: "img/man3.jpg",
        publish: "Feb 18, 2020",
        by: "Jacob Austin | CEO, Atom",
        comment: "5"
      },
      {
        banner: "img/post-2.jpg",
        title: "Top 3 javascript framework",
        des:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
        author: "img/man.jpg",
        publish: "Feb 18, 2020",
        by: "Jacob Austin | CEO, Atom",
        comment: "5"
      },
      {
        banner: "img/blog-9.jpg",
        title: "Top 3 javascript framework",
        des:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...",
        author: "img/man.jpg",
        publish: "Feb 18, 2020",
        by: "Jacob Austin | CEO, Atom",
        comment: "5"
      }
    ]
  })
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.7;
  position: absolute;
  width: 100%;
}

a:link {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
  
}

</style>