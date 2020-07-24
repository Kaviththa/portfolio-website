<template>
  <v-row no-gutters>
    <v-col class="col-12 col-md-12">
      <div class="text-center">
        <p class="font-weight-bold text-h4 teal--text mt-5">Portfolio</p>

        <p class="font-weight-light text-darken-1 mb-2 text-subtitle-2 mx-16">
          Welcome to my online portfolio.
          Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit.
          Aenean commodo ligula eget dolor.
          I'm taking on freelance work at the moment.
          Want some help building your software?
        </p>
        <v-btn dark large color="teal lighten-2">
          <v-icon right dark class="mx-1">mdi-telegram</v-icon>Hire Me
        </v-btn>
      </div>
      <v-divider class="my-10 mx-5"></v-divider>
    </v-col>

    <v-col class="col-12 col-md-12">
      <v-container>
         <v-sheet elevation="0">
        <v-tabs
          v-model="tab"
          color="teal lighten-2"
          centered
          next-icon="mdi-arrow-right-bold-box-outline"
          prev-icon="mdi-arrow-left-bold-box-outline"
          show-arrows
          
        >
          <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="item in items" :key="item.tab" transition="scale-transition" reverse-transition="scale-transition">
            <v-row class="pt-16" no-gutters> 
              <v-col
                v-for="(content, index) in item.contents"
                :key="index"
                cols="12"
                md="6"
                class="px-5 py-4"
              >
                <v-hover>
                  <template v-slot:default="{ hover }">
                    <v-card  outlined :elevation="hover ? 16 : 0 ">
                      <v-row no-gutters>
                        <v-col class="col-4">
                          <v-img :src="content.src" height="100%"></v-img>
                        </v-col>
                        <v-col class="col-8 px-4 pt-3">
                          <p
                            class="dark text-h6 font-weight-bold text-decoration-underline"
                          >{{content.heading}}</p>
                          <p
                            class="font-weight-light text-darken-1 mb-2 text-subtitle-2"
                          >{{content.dec}}</p>

                          <p class="caption">Client:Google</p>
                          <v-fade-transition>
                            <v-overlay v-if="hover" absolute color="teal" class="ma-1" opacity= 0.7 elevation= "5">
                              <v-btn dark large class color="#2f435c">
                                <v-icon right dark class="mx-1">mdi-eye</v-icon>View Case Study
                              </v-btn>
                            </v-overlay>
                          </v-fade-transition>
                        </v-col>
                      </v-row>
                    </v-card>
                  </template>
                </v-hover>
              </v-col>
            </v-row>
          </v-tab-item>
        </v-tabs-items>
         </v-sheet>
      </v-container>
      
    </v-col>
    
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      tab: null,
      overlay: false,
      items: [
        {
          tab: "All",
          contents: [
            {
              src: "img/blog-1.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-2.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-3.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-4.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-10.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-6.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-7.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-8.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            }
          ]
        },
        {
          tab: "Web app",
          contents: [
            {
              src: "img/blog-1.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-2.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-3.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            }
          ]
        },
        {
          tab: "moblieApp",
          contents: [
            {
              src: "img/blog-4.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-10.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-6.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-7.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            }
          ]
        },
        {
          tab: "Frond End",
          contents: [
            {
              src: "img/blog-6.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },

            {
              src: "img/blog-8.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            }
          ]
        },
        {
          tab: "Back End",
          contents: [
            {
              src: "img/blog-6.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-7.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            },
            {
              src: "img/blog-8.jpg",
              heading: "Project Heading",
              dec:
                "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
            }
          ]
        }
      ]
    };
  }
};
</script>