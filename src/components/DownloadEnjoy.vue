<template>
  <!-- <v-app> -->
    <v-container align="center" justify="center" fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-card flat color="#3e154e" class="rounded-xl mtop mbottom mx-10 pa-4">
            <v-row>
              <!-- <v-col cols="12" xs="12" sm="12" md="4" class="ml-12"> -->
                <v-col class="d-none d-sm-flex align-center">
                <v-card color="#E2F2E5" class="rounded-xl mt-n16 ml-10 mobile" outlined flat width="200">
                  <v-img src="mobile1.png"></v-img>
                </v-card>
              </v-col>
              <v-col class="mt-12 mr-14">
                <h1 class="intro-text white--text" >Download & Enjoy</h1>
                <br>
            <p class="description white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quia vitae omnis maxime, 
                debitis sed iste, excepturi nam porro dolor minima beatae tenetur repellendus ipsum. Amet libero hic itaque! Odio.</p>
                <br>

            <!-- <v-btn outlined class="white--text mx-3" large>
              <a href="https://play.google.com/store/apps/details?id=com.makemytrip"></a>
              <v-icon>mdi-apple</v-icon>App Store
              <br>Available now on the</v-btn> -->
              <a href="https://play.google.com/store/apps/details?id=com.makemytrip" style="text-decoration: none">
                 <v-btn outlined class="white--text" large>
                  
                <v-icon>mdi-google-play</v-icon>Google Play
                <br>Get in on</v-btn>  </a>

              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  <!-- </v-app> -->
</template>

<style>
.do{
  font-size: 2vw;
  color: white;
}
</style>

<!-- <template>
   color="#E2F2E5"
      <v-card
      color="#3e154e"
      height="450px"
      tile
      flat
    > <v-container fluid>
        <v-row>
         <v-col lg="6">
            <h1 class="intro-text white--text" >Download & Enjoy</h1><br>
            <p class="description white--text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quia vitae omnis maxime, 
                debitis sed iste, excepturi nam porro dolor minima beatae tenetur repellendus ipsum. Amet libero hic itaque! Odio.</p>
                <br>
            <v-btn outlined class="white--text"><v-icon>mdi-apple</v-icon>App Store
              <br>Available now on the</v-btn> <v-spacer></v-spacer>
            <v-btn outlined class="white--text">
                <v-icon>mdi-google-play</v-icon>Google Play
                <br>Get in on</v-btn>   
         </v-col> 
         <v-col lg="4">
            <v-img src="https://img.lovepik.com/element/45006/9421.png_300.png"></v-img>
         </v-col>
        </v-row>
      </v-container>
        </v-card>
    
</template> -->
<!-- <template>
    <v-card
      color="#3e154e"
      height="450px"
      tile
      flat
    >
     <v-row>
      <v-col>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
        Facilis tempora voluptate modi fugit, provident quia corporis nisi aliquam illum saepe? 
        Fugiat reiciendis nulla neque molestias ducimus delectus similique deleniti blanditiis.</v-col>
      <v-col>
        <img src="https://img.lovepik.com/element/45006/9421.png_300.png" >
      </v-col>
     </v-row>   
    </v-card>
</template> -->