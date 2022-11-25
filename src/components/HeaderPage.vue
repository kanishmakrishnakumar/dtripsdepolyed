<template>
  <div> 
 <!-- <v-app> -->
  <!-- <hotel-flight/> -->
  <!-- style="padding: 0px 90px" app -->
  <v-app-bar flat
   color="#3e154e" 
    height="100px"
  >
  <v-app-bar-nav-icon class="hidden-lg-and-up white--text"  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-img src="logo.png" max-width="200"></v-img> 
      <v-spacer/>
      <!-- <v-btn  @click="scroll('reachus')">about</v-btn> -->
    <v-list class="d-none d-sm-flex align-center rounded" color="#3e154e" dark permanent>
      <v-list-item link v-for="(menu,i) in menus" :key="i" :to="menu.route">
        <v-list-item-title class="white--text">{{menu.title}}</v-list-item-title>
      </v-list-item>
      <v-btn color="white" style="textTransform: none" @click="scroll('reachus')" text>Reach Us</v-btn>
      <!-- <v-btn color="#92278f" icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <v-btn dark color="#3e154e">
       <router-link to="/logincard" style="text-decoration :none" class="white--text"><v-icon>mdi-account</v-icon>Join our Club</router-link> </v-btn>
    </v-list>
    <!-- <div>
      <form action="" class="login-from">
        <h3>Login Now</h3>
        <input type="email" placeholder="Your Email" class="box">
        <input type="password" placeholder="Password" class="box">
        <input type="submit" value="login now" class="btn">
      </form>
    </div> -->
  </v-app-bar>
  <v-navigation-drawer
      v-model="drawer"
      absolute 
      height="350"
      top 
      temporary
    >
    <v-list class="align-center justify-center rounded">
      <v-list-item>
        <!-- <v-list-item-avatar> -->
          <v-img src="logo.png" max-width="120"></v-img>
        <!-- </v-list-item-avatar> -->
      </v-list-item>

      <v-divider></v-divider>
      <v-list-item link v-for="(menu,i) in menus" :key="i" :to="menu.route">
        <v-list-item-title class="black--text">{{menu.title}}</v-list-item-title>
      </v-list-item>
      <v-btn color="black" style="textTransform: none" @click="scroll('reachus')" text>Reach Us</v-btn>
      <v-btn dark color="#92278f">
       <router-link to="/logincard" style="text-decoration :none" class="white--text"><v-icon>mdi-account</v-icon>Join our Club</router-link> </v-btn>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.17/vue.js"></script>
<script>
// import HotelFlight from './HotelFlight.vue';

export default {
  // components: { HotelFlight },
  
    data() {
        return {
          drawer: false,
            menus: [
                { title: "Welcome", /*route: "welcome" */},
                { title: "Flights", /*route: "flights"*/ },
                { title: "Hotels", /*route: "hotels"*/ },
                { title: "About Us",route: "aboutus" , /*align: ' d-none d-lg-table-cell'*/},
                // { title: "Reach Us", /*route: "reachus"*/ }
            ]
        };
    },
    methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
   
}
</script>

<!-- <style>
  .active_list .v-list-item .v-list-item--active {
    color: #f4f4f4 !important;
  }
</style> -->

<!-- <style>
.btn{
  margin-top: 1rem;
  display: inline-block;
  padding: 8rem 3rem;
  font-size: 1.7rem;
  border-radius: .5rem;
  border: .2rem solid var(--white);
  color: var(--white);
  cursor: pointer;
  background: none;
}

.login-form{
  position: absolute;
  top: 110%; right: 2rem;
  width: 30rem;
  box-shadow: var(--box-shadow);
  padding: 2rem;
  border-radius:.5rem ;
  background: #fff;
}
</style> -->