<template>
    <div>
      <!-- <v-btn @click="btn">Test</v-btn>
      <h4>Value: {{ stores }}</h4> -->
      <common-header></common-header>
    <v-dialog
          v-model="dialog"
          persistent
          max-width="400"
        >
          <v-card>
            <v-card-title class="text-h5 pa-10">
              Please check your Email or Password
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="green darken-1"
                text
                @click="dialog = false"
              >
                Okay
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
       <v-container>
        <v-row>
            <v-col>
              <!-- https://cdn.dribbble.com/users/1912990/screenshots/6129020/cloud_computing.gif -->
              <!-- https://www.renderinfotech.com/assets/image/seo-search-enginge-optimization.gif -->
              <!-- https://cdni.iconscout.com/illustration/premium/thumb/web-design-1730960-1471472.png -->
                <v-img max-width="700" src="https://cdni.iconscout.com/illustration/premium/thumb/web-design-1730960-1471472.png"></v-img>
            </v-col>
            <v-col>
                <v-row align="center" justify="center">
                        <v-col cols="12" sm="10" class="ml-16">
                          <v-toolbar color="#92278f"
                            cards dark flat>
                            <v-card-title class="text-h6 font-weight-regular">
                            Sign Up
                            </v-card-title>
                            <v-spacer></v-spacer>
                            </v-toolbar>
                          <v-form  @submit.prevent=" register" ref="form" v-model="form">
                            <v-text-field
                                type="text"
                                v-model="name"
                                :rules="[rules.required]"
                                label="Name"
                                outlined prepend-inner-icon="mdi-account"
                                dense
                                color="#92278f"
                                autocomplete="false"
                                class="mt-4"
                            />
                            <v-text-field
                                v-model="email"
                                :rules="[rules.email]"
                                outlined prepend-inner-icon="mdi-email"
                                color="#92278f"
                                label="Email address"
                                type="email"
                            ></v-text-field>
                            <v-text-field
                                ref="password"
                                v-model="password"
                                :rules="[rules.password, rules.length(6)]"
                                outlined prepend-inner-icon="mdi-lock-outline"
                                color="#92278f"
                                counter="6"
                                label="Password"
                                style="min-height: 96px"
                                :type="passwordShow ? 'text' : 'password'"
                                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="passwordShow = !passwordShow"
                            ></v-text-field>
                            <v-text-field
                                ref="password2"
                                v-model="password2"
                                :rules="PasswordRules2.concat(validatePassword2)"
                                outlined prepend-inner-icon="mdi-lock-outline"
                                color="#92278f"
                                label="Confirm Password"
                                style="min-height: 96px"
                                :type="passwordShow ? 'text' : 'password'"
                                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                                @click:append="passwordShow = !passwordShow"
                            ></v-text-field>
                            <v-text-field
                                v-model="phone"
                                outlined prepend-inner-icon="mdi-phone"
                                color="#92278f"
                                label="Phone number" hide-spin-buttons
                                type="number"
                            ></v-text-field>
                            <v-checkbox
                                v-model="agreement"
                                :rules="[rules.required]"
                                color="#92278f"
                            >
                                <template v-slot:label>
                                I agree to the&nbsp;
                                <router-link to="/terms" class="purple--text ml-3" icon>Terms and Conditions</router-link>
                                &nbsp;and&nbsp;
                                <router-link to="/privacy" class="purple--text ml-3" icon>Privacy Policy</router-link>*
                                </template>
                            </v-checkbox> 
                        
                            <!-- <v-divider></v-divider> -->
                            <v-card-actions>
                            <v-btn
                                text color="#92278f"
                                @click="$refs.form.reset()" class="caption"
                            >
                                Clear
                            </v-btn>
                            <v-spacer></v-spacer>
                            <router-link to='/forgetpassword' style="text-decoration :none" class="caption purple--text">Forget password ?</router-link>
                            </v-card-actions>
                            <v-btn
                                :disabled="!form"
                                :loading="isLoading"
                                class="white--text"
                                color="#92278f"
                                depressed block tile
                                type="submit" id="register"
                            >
                                Submit
                            </v-btn>
                        </v-form>
                        <!-- <div class="login-choice"><span>or Sign In with</span></div> -->
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
       </v-container> 
    </div>
</template>

<script>
import axios from 'axios';
import CommonHeader from '../CommonHeader.vue';

export default {
  components: { CommonHeader },
  data: () => ({
      dialog: false,
      agreement: false,
      email: '',
      // store:'',
      // stores:'',
      name:'',
      form: false,
      isLoading: false,
      password: '',
      password2: '',
      passwordShow: false,
      phone: '',
      PasswordRules2: [ v => !!v || "Password incorrect" ],
      rules: {
        email: v => !!(v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    }),
    methods: {
      register() {       
          axios.post('https://dtrips.herokuapp.com/api/auth/signup', {
                    "name" : this.name,
                    "email": this.email,
                    "username": this.email,
                    "password": this.password,
                    "phone": this.phone
                    
              }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                console.log('Register Successfully')
                this.$router.push({name: 'home'})
              }).catch((error)=>{
                //  if(error.response.status === 422){
                  alert( `Email ID already registered.`)
                // }
                console.log(error.response);
              });             
        },
        validatePassword2(value) {
          return value == this.password || "Password does not match"
        }, 

      btn(){
        const store = localStorage.getItem('YourItem');
        this.stores = localStorage.getItem('YourItem');

        axios.get('http://192.168.1.46:8991/bpi/test1/all', {
                   headers:{
                   " Content-Type": "application/json",
                   "attendance" : store
                   }
              }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                console.log('Register Successfully')
                this.$router.push({name: 'home'})
              }).catch((error)=>{
                  alert( `Email ID already registered.`)
                console.log(error.response);
              });      
      }
  }
}
</script>
