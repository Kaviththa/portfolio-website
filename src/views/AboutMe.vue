<template>
  <v-row no-gutters>
    <v-col class="col-12 col-md-12">
      <v-card elevation="0" class="px-5 mx-5 my-5" flat>
        <v-row dense>
          <v-col class="col-12 col-md-8" v-for="user in users" :key="user.name">
            <v-card-title class="font-weight-bold text-h4">{{user.name}}</v-card-title>
            <v-card-subtitle class="mx-1 teal--text lighten-2">{{user.job}}</v-card-subtitle>

            <v-card-text
              class="font-weight-regular text-darken-1 mb-2 text-subtitle-2"
              v-html="user.info"
            ></v-card-text>
            <v-card-actions>
              <v-btn dark large color="teal lighten-2" class>
                <v-icon right dark class="mx-1">mdi-arrow-right-bold-circle-outline</v-icon>View portfolio
              </v-btn>
              <v-btn dark large class color="#2f435c">
                <v-icon right dark class="mx-1">mdi-book-open-outline</v-icon>View Resume
              </v-btn>
            </v-card-actions>
          </v-col>

          <v-col class="col-12 col-md-4 mx-auto text-center">
            <v-avatar size="200" class="my-5">
              <v-img src="/img/man.jpg" width="280px" class="img-hover-zoom" />
            </v-avatar>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <v-col class="col-12 col-md-12">
      <v-card class="px-5 py-7 mx-5 my-5" color flat>
        <v-row>
          <v-col class="col-12 col-md-12" >
          
            <h2
              
              
              color="teal lighten-2"
              class="text-h4 font-weight-bold px-5 border"
            >What I Do</h2>

            <v-card-text class="font-weight-regular text-darken-1 subtitle-2">
              I have more than 10 years' experience buliding software for
              clients all over the world.Below isd quick overview of
              my main technical skill sets and technologies i use.Want to find out more
              about my experience?.check out my
              <a
                router
                to
                class="teal--text lighten-2"
              >online resume</a> project
              <a router to class="teal--text lighten-2">portfolio.</a>
            </v-card-text>
          </v-col>

          <v-col class="col-6 col-md-3" v-for="post in posts" :key="post.title">
            <v-card elevation="0" class="">
              <v-avatar :size="post.size" tile v-for="img in post.src" :key="img" class="py-5">
                <v-img :src="img"></v-img>
              </v-avatar>

              <p class="text-h6 font-weight-bold mt-5">{{post.title}}</p>

              <p class="pb-3 font-weight-regular text-darken-1 caption">{{post.des}}</p>
            </v-card>
          </v-col>
        </v-row>
        <div class="text-center">
          <v-btn dark large color="teal lighten-2">
            <v-icon right dark class="mx-1">mdi-arrow-right-bold-box</v-icon>services & pricing
          </v-btn>
        </div>
      </v-card>
    </v-col>
    <v-divider class="mt-2"></v-divider>

    <v-col class="col-12 col-md-12 ">
     
      <Testimonial/>
      <Team/>
      
    </v-col>
    
  </v-row>
</template>

<script>
import Testimonial from "@/components/Testimonial.vue"
import Team from "@/components/Team.vue"
export default {
 
  name: "HelloWorld",
  components:{
    Testimonial,
    Team
  },

  data: () => ({
    users: [
      {
        name: "Simon Doe",
        job: "Senior Software Engineer",
        src: "",
        info:
          "I'm a senior software engineer.Specialised i frondend and backend development complex scalable web apps. I write about software development on my blog.want to know how i may help your project?.checkout my project<a class='teal--text lighten-2'> portfolio </a >and online <a class='teal--text lighten-2'>resume</a>.Welcome to my personal website"
      }
    ],
    posts: [
      {
        src: ["img/java.png"],
        size:30,
        title: "vanilla Javascript",
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/angular.svg", "/img/react.png", "/img/vue.png"],
        size:30,
        title: "Angular,React& vue",
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/nj.png"],
        size:40,
        title: "Node.js",
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/python.png"],
        title: "Python & Dyango",
        size:40,
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/php.png"],
        size:30,
        title: "PHP",
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/npm.png", "img/gulp.png", "img/grunt.png"],
        size:30,
        title: "npm, Gulp & Grunt",
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/html.png", "img/css -1.png"],
        title: "HTML & CSS",
        size:30,
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      },
      {
        src: ["img/sass.png", "img/less.png"],
        size:30,
        title: "Sass & LESS",
        des:
          "list Skill/technologies here you can change the icon above toany of the 1500+ fontAwesome free icons available.aenean commodo ligula eget."
      }
    ]
  })
};
</script>
<style scoped>
.border {
  border-left: solid;
  border-width: 6px;
  border-color: teal;
  padding-left: 12px;
}
.img-hover-zoom {
  transform-origin: 50% 65%;
  transition: transform 5s, filter 3s ease-in-out;
  filter: brightness(80%);
}

/* [3] Finally, transforming the image when container gets hovered */
.img-hover-zoom:hover {
  filter: brightness(100%);
  transform: scale(1.3);
}
</style>