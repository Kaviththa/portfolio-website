<template>
  <div>
    <v-container>
    <v-row no-gutters>
      <v-col class="col-12 col-md-12">
        <div class="text-center mx-16 my-5">
          <h1 class="teal--text">Services & prices</h1>
          <p>
            I have 10+ years of development experience building software for the web and mobile devices. You can take a look at my
            <router-link to="/portfolio" class="teal--text lighten-2">project portfolio</router-link> and
            <router-link to="#" class="teal--text lighten-2">online resume</router-link>to find out more about my skills and experiences.
          </p>

          <p>I'm currently taking on freelance software development work. You're welcome to contact me for a custom quote for your project. I also offer development service packages with fixed pricing.</p>
          <v-divider class="mt-7"></v-divider>
        </div>
      </v-col>
      <v-col class="  col-12 col-md-9 mx-auto my-5">
        <h1 class="text-center mb-5">Service Packages</h1>

        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left "></th>
                <th  class="text-center text-subtitle-1">Basic</th>
                <th class="text-center text-subtitle-1">Standard</th>
                <th class="text-center text-subtitle-1">Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in desserts" :key="item.name">
                
                <td v-html="item.name" class="font-weight-light text-subtitle-1"></td>
                <td v-html="item.Basic" class="text-center"></td>
                <td v-html="item.Standard" class="text-center"></td>
                <td v-html="item.Premium" class="text-center"></td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
 <v-col  class=" col-12 col-md-9 mx-auto my-5">
 <faqs/>
 </v-col>

  


    </v-row>
    </v-container>
  </div>
</template>

<script>
import Faqs from "@/components/Faqs.vue"
export default {
    components:{
   Faqs
  },
  data() {
    return {
      desserts: [
        {
          name: "<b>Package datails<b>",
          Basic: "<h2 class='teal--text style='font-size:15px'>159$</h2>",
          Standard: "<h2 class='teal--text'>300$</h2>",
          Premium: "<h2 class='teal--text'>400$</h2>"
        },
        {
          name:
            "<b>Details</b>",

          Basic:
            "<p>A small app lorem ipsum dolor sit amet, <br>consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>",
          Standard:
            "<p>A small app lorem ipsum dolor sit amet, <br>consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>",
          Premium:
            "<p>A small app lorem ipsum dolor sit amet, <br>consectetuer adipiscing elit. <br>Aenean commodo ligula eget dolor.</p>"
        },
        {
          name:
            "<b>Feature Lorem</b><p style='font-size:13px'>Optional feature description goes here.<br> Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit.</p>",
          Basic: '<img src="img/tick.png" width="30px"></img>',
          Standard: '<img src="img/tick.png" width="30px"></img>',
          Premium: '<img src="img/tick.png" width="30px"></img>'
        },
        {
          name: "<b>Feature Ipsum</b><p style='font-size:13px'>Optional feature description goes here.<br> Lorem ipsum dolor sit amet,<br> consectetuer adipiscing elit.",
          Basic: "<h1>__</h1>",
          Standard: '<img src="img/tick.png" width="30px"></img>',
          Premium: '<img src="img/tick.png" width="30px"></img>'
        },
        {
          name: "<b>Feature Commodo</b>",
          Basic: '<img src="img/tick.png" width="30px"></img>',
          Standard: "<h1>__</h1>",
          Premium: '<img src="img/tick.png" width="30px"></img>'
        },
        {
          name: "<b>Feature Consectetuer</b>",
          Basic: '<img src="img/tick.png" width="30px"></img>',
          Standard: '<img src="img/tick.png" width="30px"></img>',
          Premium: "<h1>__</h1>"
        },
        {
          name: "<b>Revisions<b>",
          Basic: '<img src="img/tick.png" width="30px"></img>',
          Standard: '<img src="img/tick.png" width="30px"></img>',
          Premium: "<h1>__</h1>"
        },
        {
          name: "<b>Delivery Time</b>",
          Basic: '<img src="img/tick.png" width="30px"></img>',
          Standard: "<h1>__</h1>",
          Premium: "<h1>__</h1>"
        },
        {
          name: "",
          Basic: "<button class='btn'>Book Now</button>",
          Standard: "<button  class='btn'>Book Now</button>",
          Premium: "<button  class='btn'>Get A Quote</button>"
        }
      ]
    };
  }
};
</script>

<style>
.btn {
  background-color: teal; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border-radius: 4px;
  font-size: 16px;
}
</style>