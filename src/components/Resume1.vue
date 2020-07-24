<template>
<v-container class="mx-auto">
    <v-row no-gutters>
        <v-col class="col-12 col-md-12">
        <v-card flat color="black" dark>
            <v-card :class="[$vuetify.theme.dark ? 'teal ' : 'red elevation-16']">
                <v-row no-gutters>
                    <v-col class="col-3 col-md-3">
                        <v-avatar :size="[$vuetify.breakpoint.smAndDown ? '100' : '200']" tile>
                            <v-img src="img/man.jpg"></v-img>
                        </v-avatar>
                    </v-col>
                    <v-col class="col-9 col-md-9">
                        <h1>S I M O N D E O</h1>
                    </v-col>
                </v-row>
           
            </v-card>
            
            <h1>jooooo</h1>
        </v-card>
        </v-col>
        
        <v-col class="col-12 col-md-12"></v-col>
        
    </v-row>
     <v-col class="col-10 col-md-6">
          <v-card
      class="mx-auto"
      color="grey lighten-4"
      max-width="600"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
        
      ><v-expand-transition>
          <div
            
            class="d-flex transition-fast-in-fast-out teal darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            
          </div>
        </v-expand-transition></v-img>
        <v-sparkline
      :fill="fill"
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
    ></v-sparkline>
          </v-card>



  <v-container fluid>
    <v-sparkline
      :fill="fill"
      :gradient="gradient"
      :line-width="width"
      :padding="padding"
      :smooth="radius || false"
      :value="value"
      auto-draw
    ></v-sparkline>

    <v-divider></v-divider>

    <!-- <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-row class="fill-height" align="center">
          <v-item-group v-model="gradient" mandatory>
            <v-row>
              <v-item
                v-for="(gradient, i) in gradients"
                :key="i"
                v-slot:default="{ active, toggle }"
                :value="gradient"
              >
                <v-card
                  :style="{
                    background: gradient.length > 1
                      ? `linear-gradient(0deg, ${gradient})`
                      : gradient[0],
                    border: '2px solid',
                    borderColor: active ? '#222' : 'white'
                  }"
                  width="30"
                  height="30"
                  class="mr-2"
                  @click.native="toggle"
                ></v-card>
              </v-item>
            </v-row>
          </v-item-group>
        </v-row>
      </v-col>

     
    </v-row> -->

    <v-from  >
              <v-row no-gutters>
                <v-col class="col-12 col-md-6 px-1">
                  <v-text-field
                    v-model="name"
                    label="Name"
                    
                    placeholder=" Name"
                    
                    color="teal lighten-1"
                    solo-inverted
                    required
                    dense
                    style=" font-size:20px"
                  ></v-text-field>
                </v-col>
                <v-col class="col-12 col-md-6 px-1">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    color="teal lighten-1"
                    outlined
                    
                    filled
                    placeholder=" "
                    required
                     dense
                  ></v-text-field>
                </v-col>
                <v-col class="col-12 col-md-12">
                  <v-select
                    v-model="select"
                    :items="packages"
                    label="Package"
                    placeholder=" "
                    outlined
                    required
                    hint="Want to know what's included in each package? Check the Services & Pricing page."
                    persistent-hint
                    filled
                    color="teal lighten-1"
                    dense
                     
                  ></v-select>
                </v-col>
                <!-- <v-col class="col-12 col-md-12"></v-col> -->
                <v-col class="col-12 col-md-12 mt-3">
                  <v-textarea
                    outlined
                    name="input-7-4"
                    label="message"
                    placeholder=" "
                    value
                    filled
                     color="teal lighten-1"
                  ></v-textarea>
                </v-col>
                <v-col class="col-12 col-md-12 mb-16">
                  <v-btn block color="teal lighten-2" dark>Send Now</v-btn>
                </v-col>
              </v-row>
            </v-from>
  </v-container>





      </v-col>
</v-container>
</template>


<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]

  export default {
    data: () => ({
      fill: true,
      gradient: gradients[4],
      gradients,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
    }),
  }
</script>

<style>
/* .c1 { background: #40babd url(img/man.jpg) no-repeat center center;} */
</style>