<template>
    <div>   
      <v-row>
      <pre>{{ JSON.stringify(this.items, null, 2) }}</pre>
        <v-card class="mx-auto" max-width="344">
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
                &nbsp; {{ key.Adult }} &nbsp;
                <v-btn class="control-button" @click="increaseAdult(index)">+</v-btn>
              </v-card-title>
                           
              <v-card-title class="text-h5">
                Child <h6 class="text-center grey--text">&nbsp;(&lt;18yrs)</h6> &nbsp; 
                <v-btn class="control-button" @click="decreaseChild(index)">-</v-btn>
                &nbsp; {{ key.Child }} &nbsp;
                <v-btn class="control-button" @click="increaseChild(index)" >+</v-btn>

        <div v-for="(age,index) in key.ages" :key="index" :load="log(age)">
         <div v-if="key.Child > 0">
          <v-select style="width:74px; display:inline-flex"
            @change="onChange"
            :items="dropdowns"
            v-model="key.ages[index]"
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
          </v-row>
    </div>
</template>
<script>

  export default {
    data:()=>({ 
      items: [{Adult: 1, Child: 0, ages: []}],
      Room: 1, 
      selected: null,
      dropdowns: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],
      
    }),

    computed: {
        doubleValue: {
            get(){
              console.log(this.travellers)
                return  this.travellers = this.Adult + '  ' + 'Adults'+ '  ' + this.Child + '  ' + 'Childs'+ '  ' +this.Room + '  ' + 'Rooms';
            },
        }, 
 
      },
      
    mounted() {
        },

      methods:{
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
            if(this.items[index].Adult > 1) {
              this.items[index].Adult -= 1
              }
          },
          increaseAdult(index) {
            console.log(this.items[index].Adult += 1);
          },
          decreaseChild(index) {
            if(this.items[index].Child) {
              this.items[index].Child -= 1
              }
            if(this.items[index].Child > -1) {  
              console.log(this.items[index].ages.splice(index,1))
            }
          },
          increaseChild(index) {
              console.log(this.items[index].Child += 1)
              // console.log('this.items[index].ages.length')
              // console.log(this.items[index].ages.length)
              console.log(this.items[index].ages.push(this.selected)) 
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
              this.items.push({Adult: 1, Child: 0, ages: []});
          },
    
          // changeFor(index){
          //   this.items[index] = { Adult: '', Child: '' };
          //   console.log(`index ${index} changed to ${JSON.stringify(this.items[index], null, '\t')}`);
          // }
      }
  }
</script>
