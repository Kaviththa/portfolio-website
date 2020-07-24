<template>
  <div class="px-0" :class="[$vuetify.theme.dark ? 'none' : 'grey lighten-3']">
    <v-row no-gutters>
      <v-col
        class="col-12 col-md-12 mx-auto mb-5"
        :class="[$vuetify.theme.dark ? 'grey darken-3' : 'none']"
      >
        <div class="text-center mx-10 my-5 dark">
          <h1>Contact</h1>
        </div>
      </v-col>
      <v-col class="col-10 col-md-8 mx-auto mb-5 text-center">
        <div class="text-center">
          <v-avatar size="100" class="mb-8">
            <v-img src="img/man.jpg"></v-img>
          </v-avatar>
        </div>
        <v-card class="pa-5 border-buttom">
          <v-row>
            <v-col class="col-2 col-md-1 mx-auto">
              <v-card height="40px" width="40px" class="pointer" tile flat></v-card>
            </v-col>
          </v-row>
          <p class="text--secondary">
            Interested in hiring me for your project or just want to say hi? You can fill in the contact form below or send me an email to
            <a
              href="#"
              class="teal--text text-decoration-none"
            >simon.doe@yourwebsite.com</a>
          </p>
          <p class="text--secondary">Want to get connected? Follow me on the social channels below.</p>
          <div class="text-center">
            <v-icon
              dark
              v-for="(item,i) in items"
              :key="i"
              medium
              :class="item.color"
              class="pa-2 mr-2"
              style="border-radius: 10%"
            >{{item.name}}</v-icon>
          </div>
        </v-card>
      </v-col>
      <v-col class="col-10 col-md-9 mx-auto mb-8 px-6">
        <div >
          <v-card  flat  :class="[$vuetify.theme.dark ? 'none' : 'grey lighten-3']" class="px-5">
           
              <div class="pt-5">
                <h2 class="text-center my-3 teal--text">Get In Touch</h2>
                <v-row>
                  <v-col class="col-12 col-md-12 mx-auto">
                   
                      <v-from >
                        <v-row  class=" pt-5">
                          <v-col class="col-12 col-md-6 ">
                            <v-text-field
                              v-model="name"
                              label="Name"
                              outlined
                              color="teal lighten-1"
                              
                              required
                              dense
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12 col-md-6">
                            <v-text-field
                              v-model="email"
                               label="Email"
                              color="teal lighten-1"
                              outlined
                              required
                              dense
                            ></v-text-field>
                          </v-col>
                          <v-col class="col-12 col-md-12">
                            <v-select
                              v-model="select"
                              :items="packages"
                             lable="Packages"
                             outlined
                              required
                              hint="Want to know what's included in each package? Check the Services & Pricing page."
                              
                              persistent-hint
                              
                              dense
                               color="teal lighten-1"
                            ></v-select>
                          </v-col>
                          <!-- <v-col class="col-12 col-md-12"></v-col> -->
                          <v-col class="col-12 col-md-12 mt-3">
                            <v-textarea
                              name="input-7-4"
                              label="message"
                              
                              value
                              outlined
                               color="teal lighten-1"
                            ></v-textarea>
                          </v-col>
                          <v-col class="col-12 col-md-12 mb-5">
                            <v-btn block solo dark class="teal">Send Now</v-btn>
                          </v-col>
                        </v-row>
                      </v-from>
                  
                  </v-col>
                </v-row>
              </div>
          
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      { name: "mdi-twitter", color: "blue" },
      { name: "mdi-linkedin", color: "indigo " },
      { name: "mdi-github", color: "blue-grey lighten-1" },
      { name: "mdi-instagram", color: "orange" },
      { name: "mdi-mail ", color: "green" },
      { name: "mdi-stack-overflow", color: "blue" },
      { name: "mdi-codepen", color: "black" }
    ],
    packages: ["Basic", "Standard", "Premium", "Not sure"]
  })
};
</script>

<style scoped>
.pointer {
  position: absolute;

  top: -16px;
  transform: rotate(225deg);
}
.border-buttom{
  border-bottom: solid;
  border-width: 3px;
  border-color: teal;
}
</style>