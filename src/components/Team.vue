<template>

  <div class="text-body-2 font-weight-bold mx-6 mb-5">
    <v-img src="img/bg-2.jpg">
    <v-row>
      <v-col class="col-12 col-md-3 mx-auto">
        <div>
          <v-hover  v-slot:default="{ hover }">
          <v-card flat :elevation="hover ? 16 : 1 " class="border-top">
            <div class="text-center pt-5">
              <p><v-icon>mdi-comment-quote-outline</v-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit <v-icon>mdi-comment-quote-outline</v-icon></p>
            </div>
            <div class="teal text-center pa-5">
              
              <p class="my-auto white--text">Adam Smith, App Developer</p>
            </div>
          </v-card>
          </v-hover>
          <div>
            <v-card height="30px" width="30px" class="mx-auto teal pointer" tile flat></v-card>
          </div>

        </div>
        <div class="text-center">
        <v-avatar size="60">
                <v-img src="img/profile.png"></v-img>
              </v-avatar>
        </div>
      </v-col>
      <v-col class="col-12 col-md-3 mx-auto pt-md-16">
       <div>
          <v-hover  v-slot:default="{ hover }" class="border-top">
          <v-card flat :elevation="hover ? 16 : 0 ">
            <div class="text-center pt-5">
              <p><v-icon>mdi-comment-quote-outline</v-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit <v-icon>mdi-comment-quote-outline</v-icon></p>
            </div>
            <div class="teal text-center pa-5">
              
              <p class="my-auto white--text">Adam Smith, App Developer</p>
            </div>
          </v-card>
          </v-hover>
          <div>
            <v-card height="30px" width="30px" class="mx-auto teal pointer" tile flat></v-card>
          </div>

        </div>
         <div class="text-center">
        <v-avatar size="60">
                <v-img src="img/man.jpg"></v-img>
              </v-avatar>
        </div>
      </v-col>
       <v-col class="col-12 col-md-3 mx-auto">
        <div>
          <v-hover  v-slot:default="{ hover }" class="border-top">
          <v-card flat :elevation="hover ? 16 : 0 ">
            <div class="text-center pt-5">
              <p><v-icon>mdi-comment-quote-outline</v-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit <v-icon>mdi-comment-quote-outline</v-icon></p>
            </div>
            <div class="teal text-center pa-5">
              
              <p class="my-auto white--text">Adam Smith, App Developer</p>
            </div>
          </v-card>
          </v-hover>
          <div>
            <v-card height="30px" width="30px" class="mx-auto teal pointer" tile flat></v-card>
          </div>

        </div>
        <div class="text-center">
        <v-avatar size="60">
                <v-img src="img/profile.png"></v-img>
              </v-avatar>
        </div>
      </v-col>

    </v-row>
    <v-row>
      
       <v-col class="col-12 col-md-3 mx-auto mt-md-n5">
         <div>
          <v-hover  v-slot:default="{ hover }">
          <v-card flat :elevation="hover ? 16 : 0 " class="border-top">
            <div class="text-center pt-5">
              <p><v-icon>mdi-comment-quote-outline</v-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit <v-icon>mdi-comment-quote-outline</v-icon></p>
            </div>
            <div class="teal text-center pa-5">
              
              <p class="my-auto white--text">Adam Smith, App Developer</p>
            </div>
          </v-card>
          </v-hover>
          <div>
            <v-card height="30px" width="30px" class="mx-auto teal pointer" tile flat></v-card>
          </div>

        </div>
         <div class="text-center">
        <v-avatar size="60">
                <v-img src="img/women.jpg"></v-img>
              </v-avatar>
        </div>
      </v-col>
     <v-col class="col-12 col-md-3 mx-auto mt-n5">
 <div>
          <v-hover  v-slot:default="{ hover }">
          <v-card flat :elevation="hover ? 16 : 0 " class="border-top">
            <div class="text-center pt-5">
              <p><v-icon>mdi-comment-quote-outline</v-icon>Lorem ipsum dolor sit amet, consectetur adipiscing elit <v-icon>mdi-comment-quote-outline</v-icon></p>
            </div>
            <div class="teal text-center pa-5">
              
              <p class="my-auto white--text">Adam Smith, App Developer</p>
            </div>
          </v-card>
          </v-hover>
          <div>
            <v-card height="30px" width="30px" class="mx-auto teal pointer" tile flat></v-card>
          </div>

        </div>
         <div class="text-center">
        <v-avatar size="60">
                <v-img src="img/man3.jpg"></v-img>
              </v-avatar>
        </div>
      </v-col>
    </v-row>
    </v-img>
  </div>
</template>
<style scoped>
.pointer {
  position: relative;
  top: -20px;

  transform: rotate(225deg);
}
.border-top{
  border-top: solid;
  border-width: 3px;
  border-color: teal;
}
</style>