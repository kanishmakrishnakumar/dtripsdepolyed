<template>
<div>
  <common-header></common-header>
<v-dialog
      v-model="dialog"
      persistent
      max-width="400"
    >
      <v-card>
        <v-card-title class="text-h5 pa-10">
          Please check your username or password
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
    <!-- <v-img src="https://img.freepik.com/premium-vector/online-registration-sign-up-with-man-using-laptop_268404-97.jpg?w=2000"> -->
  <v-container class="container" >
      <v-row align="center" justify="center">
        <v-col>
          <v-img max-width="590" src="Study abroad.gif"></v-img>
        </v-col>
        <v-col cols="12" sm="5" md="5" >
          <!-- <v-card class="elevation-3 mt-0" > -->
            <!-- <v-window >
              <v-window-item :value="1"> -->
                <v-row>
                  <v-col cols="12" md="12">
                    <v-card-text class="mt-6">
                      <v-row justify="space-around">
                        <v-avatar color="#92278f">
                          <v-icon dark>
                            mdi-account-outline</v-icon>
                        </v-avatar>
                      </v-row>
                      <br>
                      <h4 class="text-center">Login to dtrips Account</h4>
                      <!-- <v-row>
                          <div class="ml-5">Not a dtrips.com member ? </div>  
                      <router-link to="/register" style="text-decoration :none" class="purple--text">Register</router-link>
                        </v-row>  -->
                        
                      <!-- <h6 class="text-center grey--text">
                        Log in to your account so you can continue builiding
                        <br />and editing your onboarding flows
                      </h6> -->
                      
                      <v-row align="center" justify="center">
                        <v-col cols="12" sm="8">
                          <form @submit.prevent>
                            <v-text-field
                              label="Email"
                              name="email"
                              placeholder="Email"
                              :rules="emailRules" 
                              v-model="email"
                              outlined
                              dense
                              color="#92278f"
                              autocomplete="false"
                              class="mt-16"
                              prepend-inner-icon="mdi-account-outline"
                            />
                            <v-text-field
                              label="Password"
                              name="password"
                              placeholder="password"
                              v-model="password"
                              :rules="[rules.password, rules.length(6)]"
                              counter="6"
                              :type="passwordShow ? 'text' : 'password'"
                              :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                              @click:append="passwordShow = !passwordShow"
                              outlined
                              dense
                              color="#92278f"
                              prepend-inner-icon="mdi-lock-outline"
                            />
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
                              type="Submit"
                              color="#92278f"
                              dark
                              block
                              tile
                              @click="login"
                              >Log in</v-btn
                            >
                          </form>
                          <div class="login-choice"><span>or Sign In with</span></div>
                          
                        <social-login/>
                          <br>
                          <v-row>
                            <br>
                          <div>Not a dtrips.com member ? </div>  &nbsp;
                     <strong><router-link to="/register" style="text-decoration :none" class="purple--text">Create an Account</router-link></strong>
                        </v-row> 
                        <!-- <p>Email: {{store}}</p> -->
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-col>
                </v-row>
              <!-- </v-window-item>
            </v-window> -->
          <!-- </v-card> -->
        </v-col>
      </v-row>
     
    </v-container>  
   <!-- </v-img> -->
</div>
</template>

<script>
import axios from 'axios';
import CommonHeader from '../CommonHeader.vue';
import SocialLogin from '@/views/SocialLogin.vue';

export default {
  components: { CommonHeader, SocialLogin },
data(){
    return{    store:'',
      dialog:false,
      password:"", 
      passwordShow: false, 
      passwordRules: [
        v => !!v || 'Password is required',
        v => (v && v.length >= 8) || 'Password must be more than 8 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      rules: {
        length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
        password: v => !!(v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
          'Password must contain an upper case letter, a numeric character, and a special character',
        required: v => !!v || 'This field is required',
      },
    } ;

  },
  methods:{
      login(){
        // this.store = localStorage.getItem('YourItem')
        // console.log(this.store)

          axios.post("http://192.168.1.46:8991/api/auth/signin",{
            // body:{ 
              "username":this.email,
              "password":this.password
            // },
            // headers:{
            //   'Content-type': 'application/json',
            //   "attendance": ''
            // }
              
          }).then((response)=>{
                console.log(response.status);
                console.log(response.data);
                // console.log(response.jwtCookie.value)
                console.log(response.data.jwtCookie.value)
                localStorage.setItem('YourItem', response.data.jwtCookie.value)
                
              if(response.status===200){
                // store.state.loginAuth=true;
                // localStorage.auth=true;
                console.log(response.status);
                console.log(response.data);
                console.log('Login Successfully')
                // this.$router.push("/home");
                console.log('ok')
              }
          }).catch((error)=>{
            if(error.response.status === 422){
                  alert( `Email ID already registered.`)
                }
                console.log(error.response);
              // alert('Something went wrong');
              this.dialog=true;
          });
      },
  },
}
</script>

<style lang="scss" >
.container{
 width: 100%;
//  padding: 6px;
}

.login-choice span {
    color: #5b6987;
    display: -ms-grid;
    display: grid;
    font-size: 16px;
    width: 100%;
    line-height: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    -ms-grid-columns: minmax(20px,1fr) auto minmax(20px,1fr);
    grid-template-columns: minmax(20px,1fr) auto minmax(20px,1fr);
    grid-gap: 19px;
}
.login-choice span:after, .login-choice span:before {
    content: "";
    border-top: 1px solid #e5e8ed;
}

</style> 
