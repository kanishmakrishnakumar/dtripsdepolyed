<template>
    <div>
    <v-form>
    <v-container class="container">
      <v-row>
        <v-col
            cols="12"
            sm="6"
            md="4"
            >
          <v-text-field
            label="From"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="4"
            >
          <v-text-field
            label="To"
            outlined
          ></v-text-field>
        </v-col>
        <v-col
            cols="12"
            sm="6"
            md="4"
            >
          <v-menu
            v-model="travel"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date"
                label="Travel Date"
                prepend-inner-icon="mdi-calendar"
                outlined
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              :min="nowDate"
              @input="travel = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
          <!-- <v-col
            cols="12"
            sm="6" md="4"
          >
            <v-text-field
              label="Adults  Childs"
              solo
            ></v-text-field>
        </v-col> -->
        <v-col
          cols="12"
          sm="6"
          md="4"
        >
          <v-btn color="#92278f" dark><v-icon>mdi-magnify</v-icon>Search</v-btn>
          </v-col>
    </v-row>
    </v-container>
    </v-form>  
</div>
</template>

<script>
export default {
  data:()=>({
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    nowDate: new Date().toISOString().slice(0,10),
    travel: false,
    items: ['All Class','Sleeper Class','Third AC','Second AC','First AC','Second Seating','AC Chair Car','First Class','Third AC Economy'],

  })
}
</script>