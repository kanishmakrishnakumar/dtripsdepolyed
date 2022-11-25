<template>
  <div>
    <!-- <secction class="features" id="features"> -->
            <h1 class="heading">Top <span>Destinations</span></h1>
          <!-- </secction> -->
    <!-- <h1 class="text-center font-weight-medium text-decoration-underline">Top Destination</h1>
    <br> -->
    <v-row align="center" justify="center">
        <v-col cols="4" >
          <v-hover>
           <template v-slot:default="{ hover }">
          <v-card
          class="mx-auto"
            max-width="440"
          >
            <!-- <v-card-text > -->
            <v-img src="https://images.thrillophilia.com/image/upload/s--bejISfVD--/c_fill,g_auto,h_600,q_auto,w_975/f_auto,fl_strip_profile/v1/images/photos/000/126/889/original/1522671846_Munnar.jpg.jpg"
              gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
              max-height="250">
              <v-card-text class=" white--text"><h2>Munnar</h2> </v-card-text>
            </v-img>
            <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                  >
                  <v-card-text class="text-white">30 Hotel</v-card-text>
           <v-card-text class="text-white">46 Packages</v-card-text>
                  </v-overlay>
                </v-fade-transition>

            <!-- </v-card-text> -->
          
           </v-card>
          </template>
          </v-hover>
         </v-col>

         <v-col cols="4" >
          <v-hover>
           <template v-slot:default="{ hover }">
            <v-card
              class="mx-auto"
              max-width="444"
            >
              <v-img src="https://www.thekkady.com/files/slides/989730.jpg"
              gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
              max-height="300">
              <v-card-text class=" white--text"><h2>Thekkady</h2></v-card-text></v-img>
                <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                  >
                  <v-card-text class="text-white">30 Hotel</v-card-text>
           <v-card-text class="text-white">46 Packages</v-card-text>
                  </v-overlay>
                </v-fade-transition>
            </v-card>
           </template>
          </v-hover>
         </v-col>

         <v-col cols="4" >
          <v-hover>
           <template v-slot:default="{ hover }">
          <v-card
            class="mr-5"
            max-width="444"
          >
            <!-- <v-card-text > -->
            <v-img src="https://pix10.agoda.net/geo/city/17283/1_17283_02.jpg?ca=6&ce=1&s=1920x822"
            gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)">
            <v-card-text class="white--text"><h2>Kovalam</h2></v-card-text></v-img>
            <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                  >
                  <v-card-text class="text-white">30 Hotel</v-card-text>
           <v-card-text class="text-white">46 Packages</v-card-text>
                  </v-overlay>
                </v-fade-transition>
            <!-- </v-card-text> -->
            <!-- <v-card-actions>
             
             </v-card-actions> -->
           </v-card>
          </template>
          </v-hover>
         </v-col>
        </v-row>
     <v-row>
         <v-col cols="4" >
          <v-hover>
           <template v-slot:default="{ hover }">
          <v-card
           class="mx-auto"
            max-width="444"
          >
            <!-- <v-card-text > -->
              <v-img src="https://www.aanmeegam.in/en/wp-content/uploads/2021/11/madurai-meenakshi-temple-gopuram.jpg"
              gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
              max-height="250">
              <v-card-text class="white--text"><h2>Wayanad</h2></v-card-text></v-img>
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                  >
                  <v-card-text class="text-white">30 Hotel</v-card-text>
           <v-card-text class="text-white">46 Packages</v-card-text>
                  </v-overlay>
                </v-fade-transition>

            <!-- </v-card-text> -->
            <!-- <v-card-actions> -->
              <!-- <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/lateapprove'>
                Late Approval</router-link>
              </v-btn> -->
             <!-- </v-card-actions> -->
           </v-card>
          </template>
          </v-hover>
         </v-col>
   
        <v-col cols="4" >
          <v-hover>
           <template v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            max-width="444"
          >
            <!-- <v-card-text > -->
            <v-img src="https://www.tamilnadutourism.com/images/chennai/card/chennai-monuments.jpg"
            gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
            max-height="250">
            <v-card-text class=" white--text"><h2>Chennai</h2></v-card-text></v-img>
            <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                  >
                  <v-card-text class="text-white">30 Hotel</v-card-text>
           <v-card-text class="text-white">46 Packages</v-card-text>
                  </v-overlay>
                </v-fade-transition>
            <!-- </v-card-text> -->
            <!-- <v-card-actions> -->
              <!-- <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/lateapprove'>
                Late Approval</router-link>
              </v-btn> -->
             <!-- </v-card-actions> -->
           </v-card>
          </template>
          </v-hover>
         </v-col>
         <v-col cols="4" >
          <v-hover>
           <template v-slot:default="{ hover }">
          <v-card
            class="mr-5"
            max-width="444"
          >
            <!-- <v-card-text > -->
              <v-img src="https://chaloghumane.com/wp-content/uploads/2021/08/Wayanad-Tourism.jpg"
              gradient="to top right, rgba(144,146,150,.06), rgba(25,32,72,.7)"
              max-height="250">
              <v-card-text class=" white--text"><h2>Madhurai</h2></v-card-text></v-img>
              <v-fade-transition>
                  <v-overlay
                    v-if="hover"
                    absolute
                    color="#036358"
                  >
                  <v-card-text class="text-white">30 Hotel</v-card-text>
           <v-card-text class="text-white">46 Packages</v-card-text>
                  </v-overlay>
                </v-fade-transition>
            <!-- </v-card-text> -->
            <!-- <v-card-actions> -->
              <!-- <v-btn
                text
                color="deep-purple accent-4"
              ><router-link to='/lateapprove'>
                Late Approval</router-link>
              </v-btn> -->
             <!-- </v-card-actions> -->
           </v-card>
          </template>
          </v-hover>
         </v-col>
     </v-row>
     </div>
</template>


<script>
  export default {
    data: () => ({
      overlay: false,
    }),
  }
</script>

<style>
.heading{
  text-align: center;
  padding: 3rem;
  padding-bottom: 3rem;
  font-size: 1.5rem;
  color: purple;
}
.heading span{
  background: purple;
  color: #fff;
  display: inline-block;
  padding: .5rem 3rem;
  clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%,0% 0%);
}
</style>