<template>
  <div>
    <section id="firebaseui-auth-container"></section>
    <!-- <div id="loader">Loading...</div> -->
    <!-- <div v-if="isSignedIn">
      <v-btn @click="login">Call</v-btn>
      <v-btn @click="handleSignOut"> Sign Out</v-btn>
    </div> -->
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
import firebaseConfig from '../firebaseConfig';
import firebase from 'firebase/compat/app';

firebase.initializeApp(firebaseConfig); 
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css';
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

export default {
  mounted(){
    const user = ref(null);
    const email = ref(null);
    const image = ref(null);
    const useridfb = ref(null);
    // const isSignedIn = ref(false);
    
    const uiConfig = {
      signInFlow: 'popup',
      signinSuccessUrl: 'http://localhost:8080/',
      signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      ],
      callbacks: {

        signInSuccessWithAuthResult: function(authResult) 
        {
          user.value = authResult.user.displayName;
          email.value = authResult.user.email;
          image.value = authResult.user.photoURL;
          useridfb.value = authResult.additionalUserInfo.profile.id;
          // console.log(authResult.user.email);
          console.log(authResult);
          console.log(email.value);
          console.log(useridfb.value)
          console.log(authResult.credential.providerId);

          if (authResult.credential.providerId == "google.com" ){
            console.log(authResult.user.displayName)
            // const loginUrl = `http://192.168.1.46:8991/api/google/signup`
            // let payload = {
            //    "name" : authResult.user.displayName,
            //    "email": email.value,
            //    "imageurl": image.value,
            // }
            axios.post( `http://192.168.1.46:8991/api/auth/google-signin`, {
               "name" : authResult.user.displayName,
               "username": email.value,
               "email" : email.value,
               "imageurl": image.value,
               "password" : email.value,
            })
            .then((response)=>{
                console.log(response.status);
                console.log(response.data);
                console.log(email.value);
                // console.log('jwt cookie.....'+ response.data.jwtCookie.value)
                // console.log(userid.value);
                console.log(authResult.user.photoURL)
                console.log('Success')
                // this.$router.push({name: 'home'})
              }).catch((error)=>{
                  alert( `Error connection`)
                  console.log(error);
                  console.log("error");
                console.log(error.response);
              });
          }
          if (authResult.credential.providerId == "facebook.com" ){
            console.log(authResult.user.photoURL)
            console.log(useridfb)
            // const loginUrla = `http://192.168.1.46:8991/api/facebook/facebook-signup`
            // let payload = {
            //    "username" :  Result.user.displayName,
            //    "id": useridfb.value1,
            //    "imageurl": imagefb.value1,
            // }
            axios.post(`http://192.168.1.46:8991/api/auth/fb-signin`, 
            {
               "username" : useridfb.value,
               "name": authResult.user.displayName,
               "email" : useridfb.value,
               "identity": useridfb.value,
               "imageurl": image.value,
               "password": useridfb.value,
            })
            .then((response)=>{
                console.log(response.status);
                console.log(response.data);
                console.log(useridfb.value);
                console.log(authResult.user.photoURL)
                console.log('Success')
                // this.$router.push({name: 'home'})
              }).catch((error)=>{
                  alert( `Error connection`)
                  console.log(error);
                  console.log("error");
                console.log(error.response);
              });
          }
       
          // isSignedIn.value = true;

          return true;
        },

        // uiShown: function() {
        //   // The widget is rendered.
        //   // Hide the loader.
        //   document.getElementById('loader').style.display = 'none';
        // },
      },
  }
  if(firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance()
      ui.start('#firebaseui-auth-container', uiConfig)
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth())
      ui.start('#firebaseui-auth-container', uiConfig)
    }
    document.querySelector('#firebaseui-auth-container');


    // Initialize the FirebaseUI Widget using Firebase.

    // var ui = new firebaseui.auth.AuthUI(firebase.auth());
 
    // ui.start('#firebaseui-auth-container', uiConfig);

    // const handleSignOut = () => {
    //   console.log('signed Out');
    //     signOut(auth).then(() => {
    //       // Sign-out successful.
    //       user.value = null;
    //       isSignedIn.value = false;
    //       console.log(authResult.user.email);
    //       console.log(this.email.value);
    //       ui.start('#firebaseui-auth-container', uiConfig);
    //     }).catch((error) => {
    //       // An error happened.
    //       console.log(error);
    //     });
    //   }

    return{
      user,
      // isSignedIn,
      email, 
      image,
      // handleSignOut,
    }
  },

  // methods:{
  //    handleSignOut () {
  //     console.log('signed Out');
  //       signOut(auth).then(() => {
  //         // Sign-out successful.
  //         user.value = null;
  //         isSignedIn.value = false;
  //         console.log(authResult.user.email);
  //         console.log(this.email.value);
  //         // ui.start('#firebaseui-auth-container', uiConfig);
  //       }).catch((error) => {
  //         // An error happened.
  //         console.log(error);
  //       });
  //     }

  // }
}
</script>
