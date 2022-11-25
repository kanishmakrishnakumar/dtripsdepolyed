<template>
    <div>
    <v-form>
    <!-- <v-container> -->
      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="2"
            >
          <v-text-field color="purple"
            label="From"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="2"
            >
          <v-text-field color="purple"
            label="To"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
            sm="6"
            md="2"
            >
          <v-menu
            v-model="departure"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field color="purple"
                v-model="date"
                label="Departure"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              :min="nowDate"
              @input="departure = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="2"
            >
            <v-select color="purple"
            :items="items"
            label="Class"
            outlined
            ></v-select>
        </v-col>
        <v-col
            cols="12"
            sm="6" md="2"
          >
          <v-dialog
            v-model="dialog"
            width="500"
          >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field color="purple"
              placeholder="Travellers"
              v-model="OneWay"
              outlined
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
            </template>
            <v-card>
              <!-- <v-row> -->
                <!-- <v-col> -->
              <v-card-title class="text-h5">
                Adults<h6 class="text-center grey--text">(+12yrs)</h6> 
                <v-btn class="control-button" @click="decreaseAdult">-</v-btn>
                &nbsp; {{ Adult }} &nbsp;
                <v-btn class="control-button" @click="increaseAdult">+</v-btn>
              </v-card-title>
            <!-- </v-col>
            <v-col> -->

              <!-- :disabled="!Child ? 'true': undefined" -->
              <v-card-title class="text-h5">
                Child<h6 class="text-center grey--text">(2-12yrs)</h6> &nbsp;
                <v-btn class="control-button" @click="decreaseChild">-</v-btn>
                &nbsp; {{ Child }} &nbsp;
                <v-btn class="control-button" @click="increaseChild">+</v-btn>
              </v-card-title>
            <!-- </v-col>
            <v-col> -->
              <v-card-title class="text-h5">
                Infants<h6 class="text-center grey--text">(0-2yrs)</h6>
                <v-btn class="control-button" @click="decreaseInfant">-</v-btn>
                &nbsp; {{ Infant }} &nbsp;
                <v-btn class="control-button" @click="increaseInfant">+</v-btn>
              </v-card-title>
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
            <!-- </v-col> -->
            <!-- </v-row> -->
            </v-card>
            </v-dialog>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="2"
        >
          <v-btn height="55" color="#92278f" dark><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-col>
    </v-row>
    <!-- </v-container> -->
    </v-form>  
</div>
</template>

<script>
export default {
  data:()=>({
    dialog: false,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    nowDate: new Date().toISOString().slice(0,10),
    departure: false,
    items: ['Economy','Premium Economy','Business','First'],
    travellers: '',
    Adult: 1,
    Child: 0,
    Infant: 0,

  }),
  computed: {
    OneWay: {
          get(){
              //this function will determine what is displayed in the input
              return  this.travellers = this.Adult + '  ' + 'Adults'+ '  ' + this.Child + '  ' + 'Childs'+ '  ' +this.Infant + '  ' + 'Infants';
          },
      }
    },

    methods:{
        decreaseAdult() {
          if(this.Adult > 1) {
              this.Adult -= 1
            }
            if(this.Adult < this.Infant){
              this.Infant -= 1 ;
              alert(`Infant can't travel more than Adult`)
          }

          // console.log('decrease button clicked');
          // console.log(this.Adult--);
        },
        increaseAdult() {
          this.Adult = this.Adult === 9 ? 9 : this.Adult + 1;
            // console.log(this.Adult++);
        },
        decreaseChild() {
          if(this.Child) {
              this.Child -= 1
            }
        },
        increaseChild() {
          this.Child = this.Child === 6 ? 6 : this.Child + 1;
        },
        decreaseInfant() {
          if(this.Infant) {
              this.Infant -= 1
            }
        },
        increaseInfant() {
          if(this.Adult > this.Infant){
            this.Infant = this.Infant === 6 ? 6 : this.Infant + 1;
          }else{
            alert(`Infant can't travel more than Adult`)
          }
        },
    }
}
</script>

