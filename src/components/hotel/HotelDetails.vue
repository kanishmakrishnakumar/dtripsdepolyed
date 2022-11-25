<template>
    <div>
      <common-header></common-header>
      <!-- <v-dialog
      v-model="dialoghotel"
      persistent
      max-width="600px"
    > -->
    <br>
      <v-card
        :loading="loading"
        class="mx-auto"
        width="820px"
      
      >
        <v-row
            align="center"
            class="mx-0"
          >
          <v-card-title>
          <h2>{{ HotelName }}</h2>
        </v-card-title>
            <v-rating
              :value="Rating"
              color="amber"
              dense background-color="grey darken-1"
              half-increments
              readonly
              size="25"
            ></v-rating>

            <div class="grey--text ms-4">
              {{Rating}}
            </div>
          </v-row>
        <v-card-text>
          

          <!-- <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-currency-rupee</v-icon>
           {{ Price}}
          </div> -->
          
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-map-marker</v-icon>
           {{ Address}}
          </div>
          <div class="my-4 text-subtitle-1">
           <v-icon color="#92278f">mdi-phone-plus</v-icon>
           {{ HotelContactNo}}
          </div>

          <!-- <div>No: Rooms</div> -->
        </v-card-text>   
        <!-- <template slot="progress">
          <v-progress-linear
            color="#92278f"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template> -->
        <!-- <v-card> -->
          <v-row>
            <v-col cols="12" sm="7">
              <v-img height="380" src="https://m.economictimes.com/thumb/msid-90724647,width-1254,height-836,resizemode-4,imgsize-28786/indian-hotels.jpg"></v-img>
            </v-col>
            <v-col cols="12" sm="5">
              <v-img height="380" :src="Images"></v-img>
            </v-col>
          </v-row> 
        <!-- </v-card> -->
        

           

        <v-divider class="mx-4"></v-divider>
 
        <v-card-title> Hotel Description </v-card-title>
          <v-card-text><div>
            {{Description}}
          </div></v-card-text>

          <v-card-title>Hotel Facilities  
             <!-- <v-card-text><div>
            {{HotelFacilities}}
          </div></v-card-text> -->
          </v-card-title>
            <v-list dense>
                <!-- <v-subheader>REPORTS</v-subheader> -->
                <!-- <v-list-item-group
                  v-model="selectedItem"
                  color="primary"
                > -->
                  <v-list-item
                    v-for="(item, i) in HotelFacilities"
                    :key="i"
                  >
                  <v-list-item-icon>
                    <v-icon color="#92278f">mdi-checkbox-multiple-marked</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              <!-- </v-list-item-group> -->
            </v-list>
         

          <!-- <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="purple white--text"
              column
            >
              <v-chip>1</v-chip>

              <v-chip>2</v-chip>

              <v-chip>3</v-chip>

              <v-chip>4</v-chip>
            </v-chip-group>
          </v-card-text> -->

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue"
            text
            @click="reserve"
          >
            Reserve
          </v-btn> 
          <v-btn
              text
              color="red"
              @click="dialoghotel = false"
            >
              Cancel
            </v-btn>
        </v-card-actions>
        </v-card>
    <!-- </v-dialog> -->
    </div>
</template>

<script>
import CommonHeader from '../CommonHeader.vue';

    export default {
      components:{CommonHeader},
      data:()=>({
        loading: false,
        selection: 1,
        hotelDetails:[],
        HotelName:'',
        Rating:'',
        Address:'',
        Description:'',
        HotelFacilities:[],
        HotelPicture:'',
        Images:'',
        HotelContactNo:'',
        // dialoghotel: false,
    }),

    created() {
          this.hotelDetails = JSON.parse(localStorage.getItem("HotelDetails") || '[]');
          console.log(this.hotelDetails);
          this.HotelName = this.hotelDetails.HotelName;
          this.Rating = this.hotelDetails.StarRating;
          this.Address = this.hotelDetails.Address
          // this.Description = this.hotelDetails.Description;
          this.Description =  this.hotelDetails.Description.replace(/<[^>]*>?/gm, '').replace(/\&nbsp;/g, '');
          this.HotelFacilities = this.hotelDetails.HotelFacilities;
          this.HotelPicture= this.hotelDetails.HotelPicture;
          this.Images= this.hotelDetails.Images[0];
          this.HotelContactNo = this.hotelDetails.HotelContactNo;
          console.log(this.HotelName);
        },

    methods:{
      reserve () {
        // const store = localStorage.getItem('YourItem');
          this.loading = true
          setTimeout(() => (this.loading = false), 2000)
      },
    }
    }
</script>