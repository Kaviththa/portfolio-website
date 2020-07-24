<template>
  <v-container>
    <v-row>
      <v-col class="col-12 col-md-3 mx-auto">
        <v-card class="pa-4" flat outlined>
          <v-card height="120px" color="teal" elevation="5" id="c1">
            <div class="text-center">
              <v-avatar size="120" id="a1">
                <v-img src="img/man.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>
         <div >
          <h1 class="text-center" >James Lee</h1>
          <p>
            Simon is a brilliant software engineer!
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis.
          </p>
         </div>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-3 mx-auto">
        <v-card color="none" flat  id="c21" >
          <v-card height="60px" color="pink darken-4" elevation="7" id="c2">
            <div class="text-center">
              <v-avatar size="80" id="a2">
                <v-img src="img/man.jpg"></v-img>
              </v-avatar>
            </div>
          </v-card>

          <v-card class="pa-5 mx-3" tile elevation="3" outlined >
            <h2 class="px-5">Card title</h2>
            <p>
              Simon is a brilliant software engineer!
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
              natoque penatibus et magnis.
            </p>
          </v-card>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-3 mx-auto">
        <v-card class="" flat outlined>
          <v-card height="150px" color="orange darken-4" elevation="5" id="c3"></v-card>

          <h1 class="mx-4">Card title</h1>
          <p class="mx-4">
            Simon is a brilliant software engineer!
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
            natoque penatibus et magnis.
          </p>
        </v-card>
      </v-col>
      <v-col class="col-12 col-md-6 py-0">
        <v-card elevation="0" outlined>
        <v-row no-gutters>
          <v-col class="col-4">
            <v-img src="img/phone.jpg"></v-img>
          </v-col>
           <v-col class="col-8 pa-4">
             <p class=" teal--text text-h6 font-weight-bold ">Project heading</p>
             <p class="text-body-2 ">Project intro goes here. In the intro it's a good idea to answer 
               a potential client's need/problem so it's more likely 
               to land your next project or job.</p>
               <p class="caption">Client:Google</p>
           </v-col>
        </v-row>
        </v-card>

        <v-icon>fas fa-lock</v-icon>
      </v-col>

    </v-row>
  </v-container>
    

</template>
<style scoped>
#c1 {
  position: relative;
  transform: translateY(-40px);
}
#a1 {
  position: relative;
  transform: translateY(30px);
}
#a2{
   position: relative;
  transform: translateY(-20px);
}
#c2 {
  position: relative;
  transform: translatey(2px);
  z-index: 1;
 
}
h2{
   
  border-left: solid;
  border-width: 4px;
  border-color: teal;
}
</style>