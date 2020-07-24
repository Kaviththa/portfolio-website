<template>
  <div>
    <v-container>
      <v-row>
        <v-col class="col-12 col-md-12" >
          <div class="text-center">
            <h1 class="mb-5">Online Resume</h1>
            <v-btn large color="teal lighten-2" class="text-capitalize" dark>
              <v-icon class="mr-1">mdi-file-pdf-outline</v-icon>Download PDF Version
            </v-btn>
            <v-divider class="mt-10"></v-divider>
          </div>
        </v-col>
        <v-col class="col-12 col-md-10 mx-auto">
           <v-hover
        v-slot:default="{ hover }">
          <v-card class="px-10 py-5" :elevation="hover ? 16 : 2">
            <v-row>
              <v-col class="col-12 col-md-8">
                <p class=" teal--text font-weight-black  spacing"  :class="[$vuetify.breakpoint.smAndDown ? 'text-h4' : 'text-h3']">{{first}} {{last}}</p>
                <p class="text-h5 font-weight-thin">{{job}}</p>
              </v-col>
              <v-col class="col-12 col-md-4">
                <ul class="caption" style="list-style-type: none;">
                  <li>
                    <v-icon class="mr-5">mdi-phone-classic</v-icon>
                    <a href="#" class=" text-decoration-none black--text">
                    {{phone}}</a>
                  </li>
                  <li>
                    <v-icon class="mr-5">mdi-email</v-icon>
                    <a href="#" class=" text-decoration-none black--text">{{gmail}}</a>
                  </li>
                  <li>
                    <v-icon class="mr-5">mdi-wan</v-icon>
                    <a href="#" class=" text-decoration-none black--text">{{website}}</a>
                  </li>
                  <li>
                    <v-icon class="mr-5">mdi-map-marker</v-icon>
                     <a href="#" class=" text-decoration-none black--text">{{location}}</a>
                  </li>
                </ul>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col class="col-12 col-md-3 my-auto">
                <v-avatar size="160">
                  <v-img :src="image"></v-img>
                </v-avatar>
              </v-col>
              <v-col class="col-12 col-md-9">
                <p class="text-body-2">{{ summarise}}</p>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row class="text-body-2">
              <v-col class="col-12 col-md-8 mx-auto">
                <h3 class="border">WORK EXPERIENCES</h3>
                <v-row>
                  <v-col
                    class="col-12 col-md-12"
                    v-for="(workexperience,index) in workexperiences"
                    :key="index"
                  >
                    <div>
                      <div
                        class="float-left mt-5 text-body-1 font-weight-bold"
                      >{{workexperience.work}}</div>
                      <div
                        class="float-right mt-5 text-body-2 text--secondary"
                      >{{workexperience.compnay}} | {{workexperience.year}}</div>
                    </div>
                    <div class="float-left mt-5 text-body-2 mb-3">{{workexperience.dec}}</div>
                  </v-col>
                </v-row>

                <!-- <div class="mr-8">
                  <ul>
                    <li>Lorem ipsum dolor sit amet, consectetuer.</li>
                    <li>Aenean commodo ligula eget dolor</li>
                    <li>Etiam ultricies nisi vel augue.</li>
                  </ul>
                </div>-->
              </v-col>
            
              <v-divider vertical inset></v-divider>
              <v-col class="col-12 col-md-3 mx-auto">
                <h3 class="border">SKILLS</h3>
                <p class="text-body-1 font-weight-bold mt-5">Technical</p>
                <v-list dense>
                  <v-list-item
                    v-for="(Technical,index) in Technicals"
                    :key="index"
                    style="padding:0px 0px "
                  >{{Technical}}</v-list-item>
                </v-list>
                <p class="text-body-1 font-weight-bold mt-5">Professional</p>
                <v-list dense>
                  <v-list-item
                    v-for="(Professional,index) in Professionals"
                    :key="index"
                    style="padding:0px 0px"
                  >{{Professional}}</v-list-item>
                </v-list>
                <div>
                  <h3 class="border mb-4">EDUCATION</h3>
                  <ul
                    style="list-style-type: none; padding:0px 0px"
                    v-for="(education,index) in educations"
                    :key="index"
                  >
                    <li class="text-bady-1 font-weight-bold">{{education.program}}</li>
                    <li class="text-body-2 text--secondary">{{education.university}}</li>
                    <li class="text-body-2 text--secondary pb-5">{{education.year}}</li>
                  </ul>
                </div>
                <h3 class="border my-3">AWARDS</h3>
                <ul
                  style="list-style-type: none; padding:0px 0px"
                  v-for="(award,index) in awards"
                  :key="index"
                >
                  <li class="text-bady-1 font-weight-bold">{{award.name}}</li>
                  <li class="text-body-2 text--secondary">{{award.by}}</li>
                  <li class="text-body-2 text--secondary pb-5">{{award.year}}</li>
                </ul>

                <h3 class="border my-3">LANGUAGES</h3>
                <div v-for="(language,index) in languages" :key="index">
                  <div class="d-inline text-bady-1 font-weight-bold">{{language.name}}</div>
                  <div class="d-inline text-body-2 text--secondary">{{language.sub}}</div>
                </div>

                <h3 class="border my-3">INTERESTS</h3>
                <v-list dense>
                  <v-list-item v-for="(interst,index) in intersts" :key="index">{{interst}}</v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <v-col class="col-12 col-md-9 mx-auto text-center"></v-col>
            <v-divider></v-divider>
            <v-card flat class="text-center">
              <v-card-text>
                <v-btn class="mx-1 caption text-lowercase text--secondary" small text>
                  <v-icon class="mr-2">mdi-github</v-icon>github.com/username
                </v-btn>
                <v-btn small class="mx-1 caption text-lowercase text--secondary" text caption>
                  <v-icon class="mr-2">mdi-linkedin</v-icon>linkedin.com/in/username
                </v-btn>
                <v-btn class="mx-1 caption text-lowercase text--secondary" text small caption>
                  <v-icon class="mr-2">mdi-twitter</v-icon>twitter.com
                </v-btn>
              </v-card-text>
            </v-card>
          </v-card>
           </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    first: "SIMON ",
    last: " DOE",
    job: "Senior Software Engineer",
    phone: "213567876",
    gmail: "simandoe@gmail.com",
    website: "www.appslanka.com",
    location: "jaffna",
    image: "/img/man.jpg",
    summarise:
      " Summarise your career here. You can make a PDF version of your resume using our free Sketch template here. Donec quam felis,ultricies nec, pellentesque eu. Lorem ipsum dolor sit amet,consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis,sem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh.",
    workexperiences: [
      {
        work: "Senior Software Engineer",
        compnay: "Google",
        year: " 2019 - Present",
        dec:
          "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis."
      },
      {
        work: "Lead Software Developer",
        compnay: "Apple",
        year: " 2016 - 2019",
        dec:
          "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Donec pede justo, fringilla vel."
      },
      {
        work: "Senior Software Developer",

        year: " 2014 - 2016",
        dec:
          "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      },
      {
        work: "Senior Developer",
        compnay: "Uber",
        year: " 2013 - 2014",
        dec:
          "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.."
      },
      {
        work: "Backend Developer",
        compnay: "Amazon  ",
        year: "2014 - 2016",
        dec:
          "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.."
      },
      {
        work: "Frontend Developer",
        compnay: "Startup   ",
        year: " 2013 - 2014",
        dec:
          "Role description goes here ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus.."
      }
    ],
    Technicals: [
      "JavaScript/Angular/React/Vue",
      "Python/Ruby/PHP",
      "Node.js/ASP.NET",
      "PostgreSQL/MySQL",
      "Object-orienteddesign",
      "Design and implement database structures",
      "Leadanddelivercomplexsoftware system"
    ],
    Professionals: [
      "Effective communication",
      "Team player",
      "Strong problem solver",
      "Good time management"
    ],
    educations: [
      {
        program: "MSc in Computer Science",
        university: "University College London",
        year: "2010 - 2011"
      },
      {
        program: "BSc Maths and Physics",
        university: "Imperial College London",
        year: "2007 - 2010"
      }
    ],
    awards: [
      {
        name: "Award Lorem Ipsum",
        by: "Microsoft lorem ipsum",
        year: "(2019)"
      },
      {
        name: "Award Donec Sodales",
        by: "Microsoft lorem ipsum",
        year: "(2020)"
      }
    ],
    languages: [
      { name: "english ", sub: "(native)" },
      { name: "Spanish", sub: "(Professional)" }
    ],

    intersts: ["Climbing", "Snowboarding", "Photography", "Travelling"]
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
.spacing {
  letter-spacing: 20px !important;
}
.v-list-item {
  padding: 0px 0px !important;
  margin: 0px 0px;
}
</style>