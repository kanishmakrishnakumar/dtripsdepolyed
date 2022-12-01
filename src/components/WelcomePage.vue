<template>
  <!-- <div> -->
    <v-row class="back" align="center" justify="center">
    <v-card color="#3e154e">
  <v-container color="#3e154e" >
    <!-- <v-card
      color="#3e154e"
      height="480px"
      tile
      flat> -->
    <!-- <v-row align="center" justify="center"> -->
     
    <!-- <br>https://i.pinimg.com/originals/95/c4/32/95c432ec12a48c48e6ba23ba8fd26311.gif
    https://cdn.dribbble.com/users/1492844/screenshots/3307274/travel.gif-->

    <!-- <v-img max-height="480" src="https://img.freepik.com/free-vector/purple-fluid-background-frame_53876-99020.jpg?w=2000"> -->

    <!-- <v-card
      color="#3e154e"
      height="480px"
      tile
      flat
    > -->
  <!-- <v-col class="ml-12"> -->
       <!-- <v-row> -->
      <v-card color="#3e154e" class="mx-auto mt-7">


      <div class="tabs mt-10"> 
        <div class="nav-tabs mt-8">
          <div class="nav-item" @click="setActive('tab-1')" :class="{ 'active' : isActive('tab-1') }">
            <v-icon color="white">mdi-home-city</v-icon>
            <!-- <v-avatar><img
        src="hotel2.png"></v-avatar> -->
         <strong>Hotels</strong>   
          </div>
          <div class="nav-item"  @click="setActive('tab-2')" :class="{ 'active' : isActive('tab-2') }">
            <v-icon color="white">mdi-airplane</v-icon>
            <!-- <v-avatar><img
        src="icons/airplane1.png"></v-avatar> -->
         <strong>Flights</strong>  
          </div>
          <!-- <v-spacer></v-spacer>
          <v-btn class="search" text><v-icon>mdi-magnify</v-icon><span>Search</span></v-btn> -->

          <!-- <div class="nav-item" @click="setActive('tab-3')" :class="{ 'active' : isActive('tab-3') }">
            <v-icon color="white">mdi-train</v-icon>Trains
          </div>
          <div class="nav-item" @click="setActive('tab-4')" :class="{ 'active' : isActive('tab-4') }">
            <v-icon color="white">mdi-bus</v-icon>Buses
          </div>
          <div class="nav-item" @click="setActive('tab-5')" :class="{ 'active' : isActive('tab-5') }">
            <v-icon color="white">mdi-car</v-icon>Cabs
          </div> -->
        </div>
        <div class="tab-content mt-4">
          <div class="tab-pane" v-show="isActive('tab-1')">
            <!-- <div class="for-example"> -->
               <hotel-book/>
            <!-- </div> -->
          </div>
          <div class="tab-pane" v-show="isActive('tab-2')">
            <!-- <div class="for-example"> -->
              <flight-book/>
            <!-- </div> -->
          </div>
          <div class="tab-pane" v-show="isActive('tab-3')">
            <!-- <div class="for-example"> -->
                <train-book/>
            <!-- </div> -->
          </div>
          <div class="tab-pane" v-show="isActive('tab-4')">
            <!-- <div class="for-example"> -->
                <buses-book/>
            <!-- </div> -->
          </div>
          <!-- <div class="tab-pane" v-show="isActive('tab-5')">
            <div class="for-example">
                <h2>Cabs</h2>
            </div>
          </div> -->
        </div>
      </div>
      
    <!-- </v-col>
      <v-col>
        <v-img max-width="480" src="https://i.pinimg.com/originals/95/c4/32/95c432ec12a48c48e6ba23ba8fd26311.gif">
        </v-img> 
      </v-col> -->
    </v-card>
<!-- </v-row>  -->
  <!-- </v-card> -->
<!-- </v-img> -->

    <!-- </div>
            </v-card> -->
        
          <!-- </v-card> -->

    </v-container>
  </v-card>
    <!-- https://www.kindpng.com/picc/m/26-266037_travel-png-free-download-8-de-maio-dia.png -->
    <!-- https://www.transparentpng.com/thumb/travel/Yz4LYk-travel-symbol-transparent-image.png -->

  <!-- </div> -->
</v-row>
</template>

<script>
import BusesBook from './buses/BusesBook.vue';
import FlightBook from './flight/FlightBook.vue';
import HotelBook from './hotel/HotelBook.vue';
import TrainBook from './train/TrainBook.vue';



  export default {
    components:{FlightBook, HotelBook, TrainBook, BusesBook },
    data() {
        return {
            activeTab: "tab-1",
            // menus: [
            //     { title: "Welcome", /*route: "welcome" */},
            //     { title: "Flights", /*route: "flights"*/ },
            //     { title: "Hotels", /*route: "hotels"*/ },
            //     { title: "About Us", to: '/aboutus' },
            //     { title: "Reach Us", /*route: "reachus"*/ }
            // ]
        };
    },
    methods: {
        setActive(tab) {
            this.activeTab = tab;
        },
        isActive(tab) {
            return this.activeTab === tab;
        }
    },
}
</script>

<style>
.back{
/* height: 40%; */
/* width: 10; */
background-color: #3e154e;
}

.tabs{
  /* width: 1200px; */
  margin: 0 auto;
  color:"#3e154e";
  justify-content: center;
}

.nav-tabs{
  display: flex;
  border-radius: 70px;
  border-color: #f04e6e;
  border-style: solid;
  border-width: 1px;
  width: 300px;
  height: 70px;
  background-color: #92278f;
  /* width: 950px; */
  margin: 0 auto;
  position:100 ;
  justify-content: center;
}

.nav-item{
  color:black;
  transition: all 150ms;
  cursor: pointer;
  /* background-color:#3e154e; */
  /* height: 80px; */
  height: 80px;
  width: 150px;
  /* width: 14.5%; */
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-top-left-radius: 6px ;
  border-top-right-radius: 6px;
}

.tab-content{
  background-color:#f04e6e;
  padding: 2px;
  justify-content: center;
  border-top-left-radius: 40px ;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  /* width: 100%; */
  /* box-shadow: rgba(225,225,225,0.1); */
}

.for-example h2{
  margin-top: 0;
  color: purple;
  justify-content: center;
}

.active{
  /* color: rgb(0, 0, 0); */
  color: white;
  /* background-color:#ece8ed; */
  justify-content: center;
  /* background-color: rgba(225,225,225,0.1); */
}

.tab-pane{
  background-color: white;
  padding: 12px;
  /* height: 200px; */
  border-top-left-radius: 40px ;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  justify-content: center;
}

#no-background-hover::before {
   background-color: transparent !important; 
   justify-content: center;
}

/* .search span{
  background: purple;
  color: #fff;
  display: inline-block;
  padding: .5rem 3rem;
  clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%,0% 0%);
} */
</style> 
