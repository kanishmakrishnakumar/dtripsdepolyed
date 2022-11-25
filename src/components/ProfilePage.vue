<template>
    <div>
        <br>
        <br>
        <br>
        <v-card class="mx-auto" max-width="344">
            <div>
                <v-card-title class="text-h5">
                Rooms &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <v-btn class="control-button" @click="decrease">-</v-btn>
                &nbsp; {{ Room }} &nbsp;
                <v-btn class="control-button" @click="increase">+</v-btn>
              </v-card-title><v-divider></v-divider>
                <!-- <v-btn @click="add">Add</v-btn>
                <v-btn @click="remove">Remove</v-btn> -->
            </div> 
           <div v-for="key in Rooms" :key="key" >
              <!-- <v-card-title class="text-h5">Room :{{i + 1}}</v-card-title> -->
              <v-card-title class="text-h5" v-model="value[key]">
                Adults<h6 class="text-center grey--text">(+18yrs)</h6> &nbsp;
                <v-btn class="control-button" @click="decreaseAdult">-</v-btn>
                &nbsp; {{ Adult }} &nbsp;
                <v-btn class="control-button" @click="increaseAdult">+</v-btn>
              </v-card-title>
                           
              <v-card-title class="text-h5">
                Child <h6 class="text-center grey--text">(0-17yrs)</h6> &nbsp; &nbsp;
                <v-btn class="control-button" @click="decreaseChild">-</v-btn>
                &nbsp; {{ Child }} &nbsp;
                <v-btn class="control-button" @click="increaseChild" >+</v-btn>

                <div v-for="(age,i) in count" :key="age" >
                  <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="purple"
                        dark
                        v-bind="attrs"
                        v-on="on"
                        >
                        Age{{i + 1}}
                        <v-icon>mdi-menu-down</v-icon>
                        </v-btn>
                    </template>
                        <v-responsive
                        class="overflow-y-auto"
                        max-height="400"
                        >
                            <v-list>
                                <v-list-item
                                v-for="(item, index) in dropdowns"
                                :key="index"
                                >
                                <v-list-item-title>{{ item }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-responsive>
                  </v-menu>
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
            <!-- </v-col> -->
            <!-- </v-row> -->
            </v-card>
    </div>
</template>
<script>

  export default {
    data:()=>({
      travellers: '',
      Adult: 1,
      Child: 0,
      Room: 1, 
      Rooms: 1, 
      count: 0,
      value:{},
      diff:'',
      dropdowns: ['1', '2', '3', '4', '5', '6', '7', '8', '9',
       '10','11', '12', '13', '14', '15', '16', '17'],
      
    }),

    computed: {
        doubleValue: {
            get(){
                return  this.travellers = this.Adult + '  ' + 'Adults'+ '  ' + this.Child + '  ' + 'Childs'+ '  ' +this.Room + '  ' + 'Rooms';
            },
        },  
      },
      
    mounted() {
        },

      methods:{
        // add(){
        //     // this.count++;
        //     console.log( this.count++)
        // },
        // remove(){
        //     this.count--;
        // },

          decreaseAdult() {
            if(this.Adult > 1) {
                this.Adult -= 1
              }
          },
          increaseAdult() {
            this.Adult = this.Adult === 9 ? 9 : this.Adult + 1;
              // console.log(this.Adult++);
          },
          decreaseChild() {
            if(this.Child) {
                this.Child -= 1
              }
            if(this.count) {
              this.count -= 1
            }  
            //   console.log( this.count--)
          },
          increaseChild() {
            this.Child = this.Child === 6 ? 6 : this.Child + 1;
            console.log( this.count++)
          },
          decrease() {
            if(this.Room > 1) {
                this.Room -= 1
              }
            if(this.Rooms > 1) {
              this.Rooms -= 1
            }  
          },
          increase() {
            // if(this.Adult > this.Room){
              this.Room = this.Room === 6 ? 6 : this.Room + 1;
              this.Rooms = this.Rooms === 6 ? 6 : this.Rooms + 1;
            // }else{
            //   alert(`Room can't be more than Adult`)
            // }
          },
          changeFor(index){
            this.items[index] = { Adult: '', Child: '' };
            console.log(`index ${index} changed to ${JSON.stringify(this.items[index], null, '\t')}`);
          }
      }
  }
</script>
