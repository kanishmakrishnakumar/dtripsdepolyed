<template>
      <!-- <v-footer> -->
   <!-- <v-container class="grey lighten-5"> -->
    <v-row class="ml-6">
      <v-col
        cols="10"
        sm="3"
        class="ml-9"
      >
      Need Dtrips Help?<br>
      <br>
      <br>
      <v-row class="ml-1">
        <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        Got Questions ? Reach us 24/7! <br>
        <router-link to="/" style="text-decoration :none" 
        class="grey--text" :class="{ 'show-btns': hover }" icon>
          
          <v-icon class="grey--text" :class="{ 'show-btns': hover }" icon>mdi-at</v-icon>
          Mail Us: info@dtrips.com
        </router-link></div></v-hover></v-row>
      <br>
      <br>
      <div id="reachus">
      Contact Info</div> 
      <!-- <br> -->
     <div class="grey--text">Panampally Nagar,Cochin - 682 024</div> <br>
     <br>
     <v-hover v-slot="{ hover }">
          <!-- <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            > -->
        <v-btn
            class="mx-0  mb-5"
            color="grey"
            dark
            icon
          >
          <a href="https://www.facebook.com/" style="text-decoration: none">
            <v-icon size="28px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-facebook
            </v-icon></a>
          </v-btn></v-hover>
          <v-hover v-slot="{ hover }">
          <!-- <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            > -->
        <v-btn
            class="mx-0  mb-5 ml-1"
            color="grey"
            dark
            icon
          >
          <a href="https://twitter.com/" style="text-decoration: none">
            <v-icon size="28px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-twitter
            </v-icon></a>
          </v-btn></v-hover>
          <v-hover v-slot="{ hover }">
          <!-- <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            > -->
        <v-btn
            class="mx-0  mb-5 ml-1"
            color="grey"
            dark
            icon
          >
          <a href="https://www.linkedin.com/login" style="text-decoration: none">
            <v-icon size="28px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-linkedin
            </v-icon></a>
          </v-btn></v-hover>
          <v-hover v-slot="{ hover }">
          <!-- <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            > -->
        <v-btn
            class="mx-0  mb-5 ml-1"
            color="grey"
            dark
            icon
          >
          <a href="https://www.instagram.com/" style="text-decoration: none">
            <v-icon size="28px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-instagram
            </v-icon></a>
          </v-btn></v-hover>
      
      </v-col>
      <br>
      <v-col
        cols="10"
        sm="2" class="ml-9"
      >Company
      <br>
      <br>
      <!-- <br> -->
      <v-row>
        <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <router-link to="/aboutus" class="grey--text ml-3" :class="{ 'show-btns': hover }" icon>About Us</router-link>
        </div>
        </v-hover>
      </v-row>
      </v-col>
       <br><br>
      <v-col
        cols="10"
        sm="2" class="ml-9"
      >
      Support
      <br>
      <br>
      <!-- <br> -->
      <v-row>
      <p>
        <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <router-link to="/terms" class="grey--text ml-3" :class="{ 'show-btns': hover }" icon>Terms and Conditions</router-link>
        </div>
        </v-hover></p>
      </v-row>
      <v-row>
        <p>
        <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <router-link to="/refund" class="grey--text ml-3" :class="{ 'show-btns': hover }" icon>Refund Policy</router-link>
        </div>
        </v-hover></p>
      </v-row>
      <v-row>
        <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <router-link to="/privacy" class="grey--text ml-3" :class="{ 'show-btns': hover }" icon>Privacy Policy</router-link>
        </div>
        </v-hover>
      </v-row>
      </v-col>
      <br><br>
      <v-col
        cols="10"
        sm="2" class="ml-9"
      >Mailing List
      <br>
      <!-- <br> -->
      <div class="grey--text">Sign up for our mailing list to get latest updates and offers.</div>
      <br>
      <template>
  <!-- <v-form> -->
    <!-- <v-container> -->
      <!-- <v-row> -->
        <v-col
        cols="11"
        >
          <v-text-field
            dense
            label="Your Email"
            name="email"
            outlined
            class="mx-0"
          ></v-text-field>
          <v-btn color="#92278f" dark>Subscribes</v-btn>
        </v-col>
      <!-- </v-row> -->
      <!-- </v-container> -->
  <!-- </v-form> -->
  </template>


      </v-col>
    </v-row>
  <!-- </v-container> -->
      <!-- </v-footer> -->
</template>

<script>
  export default {
    data: () => ({
      menus: [
        {icon:'mdi-facebook',href:'https://www.facebook.com/'},
        {icon:'mdi-twitter',href:'https://twitter.com/'},
        {icon:'mdi-linkedin',href:'https://www.linkedin.com/login'},
        {icon:'mdi-instagram',href:'https://www.instagram.com/'}
      ],
      transparent: 'rgba(255, 255, 255, 0)',
    }),

    methods: { 
      scrollToTop() {
      window.scrollTo(0,0);
    }
}
  }
</script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  /* color: rgba(255, 255, 255, 1) !important; */
  color: purple !important;
}
</style>