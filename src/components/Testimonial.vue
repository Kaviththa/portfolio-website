<template>
  <div class="mx-auto pa-5">
    <div class="ma-5" id="testimonial">
      <p class="px-5 font-weight-bold text-h4">Testimonal</p>
    </div>

    <v-row>
      <v-col class="col-12 col-md-12 hidden-sm-and-down">
        <div>
          <v-window v-model="onboarding" reverse>
            <v-row>
              <v-window-item v-for="(team) in teams" :key="team.windowitems">
                <v-col class="col-12 col-md-12">
                  <v-row>
                    <v-col
                      class="col-12 col-md-4"
                      v-for="windowitem in team.windowitems"
                      :key="windowitem.name"
                    >
                      <v-card class="pa-4 mx-4" flat outlined>
                        <v-card height="120px" :color="windowitem.color" elevation="5" id="c1">
                          <div class="text-center">
                            <v-avatar size="120" id="a1">
                              <v-img :src="windowitem.src"></v-img>
                            </v-avatar>
                          </div>
                        </v-card>
                        <div>
                          <h2 class="text-center">{{windowitem.name}}</h2>
                          <p class="text-center teal--text lighten-2 caption">{{windowitem.job}}</p>
                          <p class="my-4 text-darken-1 caption text-center">
                            <v-icon color="teal">mdi-comment-quote-outline</v-icon>
                            {{windowitem.dec}}
                            <v-icon color="teal">mdi-comment-quote-outline</v-icon>
                          </p>
                        </div>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-col>
              </v-window-item>
            </v-row>
          </v-window>

          <v-card-actions class="justify-space-between">
            <v-btn text @click="prev">
              <v-icon>mdi-chevron-left-box</v-icon>
            </v-btn>
            <v-item-group v-model="onboarding" class="text-center" mandatory>
              <v-item v-for="n in length" :key="`btn-${n}`" v-slot:default="{ active, toggle }">
                <v-btn :input-value="active" icon @click="toggle">
                  <v-icon>mdi-record</v-icon>
                </v-btn>
              </v-item>
            </v-item-group>
            <v-btn text @click="next">
              <v-icon>mdi-chevron-right-box</v-icon>
            </v-btn>
          </v-card-actions>
        </div>
      </v-col>
      <v-col class="col-12 col-md-12 hidden-md-and-up">
        <div>
          <v-carousel 
             cycle hide-delimiter-background
             :show-arrows="false"
             height="400" 
             light  
             touch>
            <v-row>
              <v-carousel-item
                v-for="(team1) in teams1"
                :key="team1.name"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-col class="col-12 col-md-12">
                  <v-card class="pa-4 mx-4" flat outlined>
                    <v-card height="120px" :color="team1.color" elevation="5" id="c1">
                      <div class="text-center">
                        <v-avatar size="120" id="a1">
                          <v-img :src="team1.src"></v-img>
                        </v-avatar>
                      </div>
                    </v-card>
                    <div>
                      <h2 class="text-center">{{team1.name}}</h2>
                      <p class="text-center teal--text lighten-2 caption">{{team1.job}}</p>
                      <p class="my-4 text-darken-1 caption text-center">
                        <v-icon color="teal">mdi-comment-quote-outline</v-icon>
                        {{team1.dec}}
                        <v-icon color="teal">mdi-comment-quote-outline</v-icon>
                      </p>
                    </div>
                  </v-card>
                </v-col>
              </v-carousel-item>
            </v-row>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({
    length: 2,
    onboarding: 0,
    teams: [
      {
        windowitems: [
          {
            color: "teal lighten-2",
            name: "James Lee",
            src: "/img/man1.jpg",
            job: "CTO, StartupHub",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },

          {
            color: "#2f435c",
            name: "Samuel Reyes",
            src: "/img/man2.jpg",

            job: "Project Manager",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },

          {
            color: "teal lighten-2",
            name: "Kate Sanders",
            src: "/img/man.jpg",
            job: "Software Engineer",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          }
        ]
      },
      {
        windowitems: [
          {
            color: "#2f435c",
            name: "Olivia White",
            src: "/img/women.jpg",
            job: "Product manager",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },
          {
            color: "teal lighten-2",
            name: "Kate Sanders",
            src: "/img/man.jpg",
            job: "Software Engineer",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },
          {
            color: "#2f435c",
            name: "Samuel Reyes",
            src: "/img/man2.jpg",

            job: "Project Manager",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          }
        ]
      }
    ],
    teams1: [
      {
        color: "teal lighten-2",
        name: "James Lee",
        src: "/img/man1.jpg",
        job: "CTO, StartupHub",
        dec:
          " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
      },

      {
        color: "#2f435c",
        name: "Samuel Reyes",
        src: "/img/man2.jpg",

        job: "Project Manager",
        dec:
          " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
      },
      {
            color: "teal lighten-2",
            name: "Kate Sanders",
            src: "/img/man.jpg",
            job: "Software Engineer",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },
           {
            color: "#2f435c",
            name: "Olivia White",
            src: "/img/women.jpg",
            job: "Product manager",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },
          {
            color: "teal lighten-2",
            name: "Kate Sanders",
            src: "/img/man.jpg",
            job: "Software Engineer",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          },
          {
            color: "#2f435c",
            name: "Samuel Reyes",
            src: "/img/man2.jpg",

            job: "Project Manager",
            dec:
              " Simon is a brilliant software engineer Lorem ipsum dolor sit amet, consectetuer adipiscing elit.Aenean commodo ligula eget dolor. Aenean massa. Cum sociisnatoque penatibus et magnis."
          }
    ]
  }),
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    }
  }
};
</script>

<style scoped>
#c1 {
  position: relative;
  transform: translateY(-40px);
}
#a1 {
  position: relative;
  transform: translateY(30px);
}

/* h2 {
  border-left: solid;
  border-width: 4px;
  border-color: teal;
  
} */
#testimonial {
  border-left: solid;
  border-width: 6px;
  border-color: teal;
}
</style>