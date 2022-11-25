<template>
    <div>
      <v-tabs
        v-model="tab"
        centered
        slider-color="#f04e6e"
        background-color="transparent"
        class="hidden-xs-only">

        <v-tab class="ml-1 purple--text"
        width="200px">
          Hotels
        </v-tab>
        </v-tabs>
        <br>
    <v-form @submit.prevent>
    <v-card class="ml-6 mr-6" flat>
      <v-row>
            <v-col
          cols="12"
          sm="6"
          md="2" 
          dense
        >
        <v-select color="purple"
            :items="hotels"
            label="Select destination"
            outlined
            ></v-select>
          <!-- <v-text-field color="purple"
            label="Select destination"
            outlined
          ></v-text-field> -->
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="2"
            >
          <v-menu
            v-model="checkin"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field color="purple"
                v-model="date1"
                label="Check in"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date1"
              :min="nowDate"
              @input="checkin = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="2"
            >
          <v-menu
            v-model="checkout"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field color="purple"
                v-model="date2"
                label="Check Out"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date2"
              :min="date1"
              @input="checkout = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
          <v-col
            cols="12"
            sm="6" md="3"
          >
          <v-menu
            v-model="dialog"
            ref="menu" offset-y :close-on-content-click="false"
          >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field color="purple"
              placeholder="Travellers"
              v-model="doubleValue"
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            </template>
            <v-card class="mx-auto" max-width="344">
              <!-- <pre>{{ JSON.stringify(this.items, null, 2) }}</pre> -->
            <div>
                <v-card-title class="text-h5">
                Rooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn class="control-button" @click="decrease">-</v-btn>
                &nbsp; {{ Room }} &nbsp;
                <v-btn class="control-button" @click="increase">+</v-btn>
              </v-card-title><v-divider></v-divider>
            </div> 

           <div v-for="(key, index) in items" :key="index" :load="log(key)">
           
              <v-card-title class="text-h5">
                Adults<h6 class="text-center grey--text">(+18yrs)</h6> 
                <v-btn class="control-button" @click="decreaseAdult(index)">-</v-btn>
                &nbsp; {{ key.NoOfAdults }} &nbsp;
                <v-btn class="control-button" @click="increaseAdult(index)">+</v-btn>
              </v-card-title>
                           
              <v-card-title class="text-h5">
                Child <h6 class="text-center grey--text">&nbsp;(&lt;18yrs)</h6> &nbsp; 
                <v-btn class="control-button" @click="decreaseChild(index)">-</v-btn>
                &nbsp; {{ key.NoOfChild }} &nbsp;
                <v-btn class="control-button" @click="increaseChild(index)" >+</v-btn>

        <div v-for="(age,index) in key.ChildAge" :key="index" :load="log(age)">
         <div v-if="key.NoOfChild > 0">
          <v-select style="width:74px; display:inline-flex"
            @change="onChange"
            :items="dropdowns"
            v-model="key.ChildAge[index]"
            label="Age"
            solo 
          ></v-select>
         </div>
        </div>
              </v-card-title><v-divider></v-divider>
            </div>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="purple"
                  text
                  @click="dialog = false"
                >
                  Apply
                </v-btn>
              </v-card-actions>
            </v-card>
            </v-menu>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="2"
        >
        <!-- <router-link to="/hotelsearch" style="text-decoration :none"> -->
          <v-btn height="55" width="200" color="#92278f" type="Submit" @click="getHoteldetails" dark><v-icon>mdi-magnify</v-icon>Search</v-btn>
        <!-- </router-link> -->
          </v-col>
    </v-row>
    </v-card>
    <br>
    </v-form>  
</div>
</template>

<script>
import axios from 'axios'

  export default {
    data:()=>({
      tab: null,
      // isLoggingIn: false,
      dialog: false,
      date1: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      // date2: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      date2: '',
      nowDate: new Date().toISOString().slice(0,10),
      checkin: false,
      checkout: false,
      travellers: '',
      Adults:'',
      Childern: '',
      items: [{NoOfAdults: 1, NoOfChild: 0, ChildAge: []}],
      Room: 1, 
      selected: null,
      dropdowns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
      hotels:[],
      diff:'',
      clientIp:''
      
    }),

    computed: {
        doubleValue: {
            get(){
              console.log(this.date1),
              localStorage.setItem('CheckIn',this.date1);
              localStorage.setItem('DateDiff',Math.floor((Date.parse(this.date2) - Date.parse(this.date1)) / 86400000));
              localStorage.setItem('YourItems',this.items)
              this.diff = Math.floor((Date.parse(this.date2) - Date.parse(this.date1)) / 86400000);
              console.log(this.diff)
              console.log(this.date2);
              console.log('this.Adult');
              // console.log(this.items)

              this.items.map(item => item.NoOfAdults)
              .reduce((prev, current) =>this.Adults = prev + parseInt(current,10), 0);
              this.items.map(item => item.NoOfChild)
              .reduce((prev, current) =>this.Childern = prev + parseInt(current,10), 0);


              
              // this.items.forEach(itemsArry => {
              //   // this.Adults += parseInt(itemsArry.Adult);
              //   this.Adults = itemsArry.Adult + itemsArry.Child
              //   this.Childern = itemsArry.Child
              //   console.log(this.Adults);
              // });

                //this function will determine what is displayed in the input
                return  this.travellers = this.Adults + '  ' + 'Adults'+ '  ' + this.Childern + '  ' + 'Childs'+ '  ' +this.Room + '  ' + 'Rooms';
            },
        },
       
      },
      
    mounted() {
          // this.getHoteldetails();
          this.getIpAddress ();
        },

      methods:{
        getHoteldetails(){
          console.log(this.date1);
           const Night = localStorage.getItem('DateDiff');
          console.log(Night);
          console.log(this.Room);
          console.log('this.clientIp');
          console.log(this.clientIp);
          const IPAddress = localStorage.getItem('IPAddress');
          console.log(IPAddress)
              axios.post('https://dtrips.herokuapp.com/api/hotels/search',{
                    "CheckInDate": this.date1,
                    "NoOfNights": this.diff,
                    "ResultCount": 0,
                    "IsTBOMapped": "true",
                    "PreferredCurrency": "INR",
                    "MaxRating": 5,
                    "GuestNationality": "IN",
                    "NoOfRooms": this.Room,
                    "IsNearBySearchAllowed": false,
                    "RoomGuests": this.items,
                    "CityId": 130443,
                    "MinRating": 1,
                    "TokenId": "c8035888-abcc-4897-9206-ce71439e3ae0",
                    "CountryCode": "IN",
                    "ReviewScore": 0,
                    "EndUserIp": IPAddress
                })
              .then((response)=>{
              console.log(response.status);
              console.log('success');
              this.isLoggingIn = true
                
              // setTimeout(() => {
              //     this.isLoggingIn = false
              //     this.snackbar = true
                
              //     setTimeout(() => this.redirect(), 1000)
              // }, 1000)
              this.$router.push("/hotelsearch");
              this.hotels = response.data.HotelSearchResult.HotelResults;
              console.log(this.hotels);
              
              localStorage.setItem('Items',JSON.stringify(this.hotels));
              localStorage.setItem('TraceId',response.data.HotelSearchResult.TraceId);
              // localStorage.setItem('CategoryId',response.data.HotelSearchResult.HotelResults.SupplierHotelCodes.CategoryId);
              localStorage.setItem('Token',response.data.Token);
              // console.log(response.data.HotelSearchResult.HotelResults[0].HotelName);
              // this.hotels = response.data.HotelSearchResult.HotelResults;
              console.log(response.data);
              // console.log(this.hotels);
              }).catch((error)=>{
                  alert( `Something went wrong`)
              console.log(error);
              })          
        },
        // redirect(){
        //   this.$router.push("/hotelsearch");
        // },
        log(key) {
          console.log(key)
        },
        // log(age) {
        //   console.log('age')
        //   console.log(age)
        // },
        onChange(dropdown){
        console.log(dropdown);
        this.selected = dropdown;
      },
    //   updateAge(key,ages) {
    //     key.ages = ages[index]
    //     console.log(key.ages)
    //     console.log('key.ages')
    // },
          decreaseAdult(index) {
            if(this.items[index].NoOfAdults > 1) {
              this.items[index].NoOfAdults -= 1
              }
          },
          increaseAdult(index) {
            console.log(this.items[index].NoOfAdults += 1);
          },
          decreaseChild(index) {
            if(this.items[index].NoOfChild) {
              this.items[index].NoOfChild -= 1
              }
            if(this.items[index].NoOfChild > -1) {  
              console.log(this.items[index].ChildAge.splice(index,1))
            }
          },
          increaseChild(index) {
              console.log(this.items[index].NoOfChild += 1)
              // console.log('this.items[index].ages.length')
              // console.log(this.items[index].ages.length)
              console.log(this.items[index].ChildAge.push(this.selected)) 
          },
          decrease(index) {
            if(this.items.length > 1) {
            this.items.splice(index,1)
            }

            if(this.Room > 1) {
                this.Room -= 1
              }
          },
          increase() {
            console.log(this.Room++)
              this.items.push({NoOfAdults: 1, NoOfChild: 0, ChildAge: []});
          },
    
          // changeFor(index){
          //   this.items[index] = { Adult: '', Child: '' };
          //   console.log(`index ${index} changed to ${JSON.stringify(this.items[index], null, '\t')}`);
          // },/

           getIpAddress () {
            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(response => {
              this.clientIp = response.ip;
              localStorage.setItem('IPAddress',response.ip)
              // console.log(this.clientIp)
            });                  
          },
      }
  }
</script>
