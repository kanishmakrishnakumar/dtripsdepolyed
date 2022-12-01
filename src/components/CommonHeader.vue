<template>
    <div>
    <!-- <v-toolbar color="#3e154e" flat max-height="45">
        <div class="grey--text ml-12 mb-5"><v-icon>mdi-phone</v-icon> +91 7356 352111</div><v-icon color="white">mdi-phone</v-icon> 
        <div class="grey--text  mb-5"><v-icon >mdi-email</v-icon> info@dtrips.com</div>  
        <v-spacer></v-spacer>
        <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <v-btn
            class="mx-0  mb-5"
            color="grey"
            dark
            icon
          >
          <a href="https://www.facebook.com/" style="text-decoration: none">
            <v-icon size="20px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-facebook
            </v-icon></a>
          </v-btn></div></v-hover>
          <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <v-btn
            class="mx-0  mb-5"
            color="grey"
            dark
            icon
          >
          <a href="https://twitter.com/" style="text-decoration: none">
            <v-icon size="20px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-twitter
            </v-icon></a>
          </v-btn></div></v-hover>
          <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <v-btn
            class="mx-0  mb-5"
            color="grey"
            dark
            icon
          >
          <a href="https://www.linkedin.com/login" style="text-decoration: none">
            <v-icon size="20px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-linkedin
            </v-icon></a>
          </v-btn></div></v-hover>
          <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
        <v-btn
            class="mx-0  mb-5"
            color="grey"
            dark
            icon
          >
          <a href="https://www.instagram.com/" style="text-decoration: none">
            <v-icon size="20px" class="grey--text" :class="{ 'show-btns': hover }" icon>
              mdi-instagram
            </v-icon></a>
          </v-btn></div></v-hover>|
          <v-hover v-slot="{ hover }">
          <div
              :elevation="hover ? 12 : 2"
              :class="{ 'on-hover': hover }"
            >
          <v-btn outlined color="#3e154e" class="mr-12  mb-5" >
         <router-link to="/loginCard" style="text-decoration :none" class="grey--text" :class="{ 'show-btns': hover }" >
          <v-icon>mdi-account</v-icon>Join our Club</router-link> </v-btn>
         </div></v-hover>
      </v-toolbar> -->
  
      <!-- <v-divider></v-divider> -->
      <!-- <v-app-bar
      color="white" flat
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-toolbar color="#3e154e" height="100px" flat>
        <router-link to="/" style="text-decoration :none">
        <v-img src="logo.png" class="ml-12" max-width="200"></v-img> </router-link>
        <v-spacer/>
        
      <v-list color="#3e154e" class="d-none d-sm-flex align-center justify-center rounded mr-12">
        <v-list-item class="white--text" link v-for="(menu,i) in menus" :key="i" :to="menu.route">
          <v-list-item-title>{{menu.title}}</v-list-item-title>
        </v-list-item>
        <!-- <v-btn color="#92278f">
         <router-link to="/" style="text-decoration :none" class="white--text">Become Local Expert</router-link> </v-btn> -->
      </v-list>
      </v-toolbar>
      <!-- </v-app-bar>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
    <v-list class="align-center justify-center rounded">
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="logo_black.jpg"></v-img>
        </v-list-item-avatar>
      </v-list-item>

      <v-divider></v-divider>
        <v-list-item link v-for="(menu,i) in menus" :key="i" :to="menu.route">
          <v-list-item-title>{{menu.title}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
  
      <v-divider></v-divider>
      </div>
  </template>   
  
  <script>
    export default {
      data: () => ({
        // drawer: false,

      //   images: [
      //   {icon:'mdi-facebook',href:'https://www.facebook.com/'},
      //   {icon:'mdi-twitter',href:'https://twitter.com/'},
      //   {icon:'mdi-linkedin',href:'https://www.linkedin.com/login'},
      //   {icon:'mdi-instagram',href:'https://www.instagram.com/'}
      // ],
        menus: [
                  { title: "Welcome", /*route: "welcome" */},
                  { title: "Flights", /*route: "flights"*/ },
                  { title: "Hotels", /*route: "hotels"*/ },
                  { title: "About Us",route: "aboutus"},
                  { title: "Reach Us", /*route: "reachus"*/ }
              ]
      }),
    }
  </script>

<style scoped>
.v-card {
  transition: opacity .4s ease-in-out;
  /* justify-content: center; */
}

.v-card:not(.on-hover) {
  opacity: 0.6;
 }

.show-btns {
  /* color: rgba(255, 255, 255, 1) !important; */
  color: purple !important;
}
</style>
