<template>
  <div>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="item in items" :key="item.tab">{{ item.tab }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in items" :key="item.tab">
        <v-row>
          <v-col v-for="(content, index) in item.contents" :key="index" cols="12" md="6">
            <v-hover>
              <template v-slot:default="{ hover }">
                <v-card elevation="0" outlined>
                  <v-row no-gutters>
                    <v-col class="col-4">
                      <v-img :src="content.src" height="100%"></v-img>
                    </v-col>
                    <v-col class="col-8 pa-4">
                      <p
                        class="dark text-h6 font-weight-bold my-4 text-decoration-underline"
                      >{{content.heading}}</p>
                      <p
                        class="font-weight-light text-darken-1 mb-2 text-subtitle-2"
                      >{{content.dec}}</p>

                      <p class="caption mt-9">Client:Google</p>
                      <v-fade-transition>
                        <v-overlay v-if="hover" absolute color="#2f435c">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        {tab:"All",
        contents:[
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
         
          src: "img/blog-5.jpg",
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
            },
           
        
          ]
        },
        { 
        tab: "moblieApp", 
        contents: [ {
         
          src: "img/blog-4.jpg",
          heading: "Project Heading",
          dec:
            "Project intro goes here. In the intro it's a good idea to answer a potential client's need/problem so it's more likelyto land your next project or job."
        },
        {
         
          src: "img/blog-5.jpg",
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
        
        ] 
        },
        { tab: "Frond End", contents: [
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
        ] },
        { tab: "Back End", contents: [
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