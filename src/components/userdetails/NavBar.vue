<template>
    <div>
      <!-- <div class="card horizontal" style="max-width:400px;margin:0 auto;" v-if="user">
          <div class="card-image" style="margin-top:25px;margin-left:10px;"> <img :src="user.photoURL"
                  style="width:75px;height:75px;border-radius:50%;border:4px solid #333" /> </div>
          <div class="card-stacked">
              <div class="card-content">
              <p> name: <strong>{{user.displayName}}</strong><br />email:<strong>{{user.email}}</strong><br/>uid:
                      <strong>{{user.uid}}</strong> <br />provider: <strong
                          class="teal-text">{{user.providerData[0].providerId}}</strong> </p>
              </div>
          </div>
      </div> -->
      <v-app>
      <!-- <v-app-bar-nav-icon class="hidden-sm-and-up" @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-navigation-drawer permanent app>
        <v-list-item>
          <v-img src="logo_black.jpg" max-width="120"></v-img>
      </v-list-item>

      <v-divider></v-divider>
        <!-- <v-system-bar></v-system-bar> -->
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="user.photoURL"></v-img>
            </v-list-item-avatar>
            <!-- <v-img src="logo_black.jpg" max-width="120"></v-img> -->
          </v-list-item>
  
          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                  {{user.displayName}}
              </v-list-item-title>
              <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
            </v-list-item-content>
  
            <!-- <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action> -->
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="selectedItem"
            color="purple"
          >
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
  
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
      <br>
      <br>
      <br>
      <br>
      <v-container align="center" justify="center" >
      <v-card 
      class="ma-auto"
     max-width="700"
      tile
    >   
        <v-row
          align="end"
          class="fill-height"        
        >       
          <v-col class="py-0" >
            
            <v-toolbar
        flat
        color="purple" dark
      >
        <v-icon>mdi-account</v-icon>
        <v-toolbar-title class="font-weight-light">
         <h4>Edit Profile</h4>
        </v-toolbar-title>
        <v-spacer></v-spacer>
             <v-btn
          color="purple"
          fab
          small
          @click="isEditing = !isEditing"
        >
          <v-icon>
            mdi-pencil
          </v-icon>
        </v-btn>
        </v-toolbar>
            <v-list-item
              color="rgba(0, 0, 0, .4)"
              
            >
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                    {{user.displayName}}
                </v-list-item-title>
              
                <v-list-item-subtitle>{{user.email}}</v-list-item-subtitle>
                <v-form @submit.prevent=" profile">
                            <v-text-field
                              type="text"
                              v-model="user.displayName"
                              prepend-inner-icon="mdi-account"
                              dense
                              color="blue" 
                              autocomplete="false"
                             class="mt-4"
                             :disabled="!isEditing"
                            />
                            <v-text-field
                              type="text"
                              v-model="user.email"
                              prepend-inner-icon="mdi-email"
                              dense
                              color="blue" 
                              autocomplete="false"
                             class="mt-4"
                             :disabled="!isEditing"
                             
                            />
                            <v-spacer></v-spacer>
                            <v-text-field
                              type="number"
                              v-model="mob"
                              label="Mobile"
                              prepend-inner-icon="mdi-phone"
                              dense
                              color="blue"
                              autocomplete="false"
                              class="mt-4"
                             :disabled="!isEditing"
                              
                            />
                            <v-spacer></v-spacer>
                            <!-- <v-text-field
                              type="text"
                              v-model="work"
                              label="Work"
                             prepend-inner-icon="mdi-work"
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-4"
                             :disabled="!isEditing"
                             
                            /> -->
                            <v-spacer></v-spacer>
                            <v-text-field
                              type="text"
                              v-model="address"
                              label="Address"
                              prepend-inner-icon="mdi-home"
                              dense
                              color="blue"
                              autocomplete="false"
                             class="mt-4"
                             :disabled="!isEditing"
                            
                            />
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
        type="submit"
        id="profile"
          :disabled="!isEditing"
          color="success"
          @click="save"
        >
          Save
        </v-btn>
      </v-card-actions>
      </v-form>
      <v-snackbar
        v-model="hasSaved"
        :timeout="2000"
        absolute
        bottom
        left
      >
        Your profile has been updated
      </v-snackbar>
                            
              </v-list-item-content>
            </v-list-item>
          </v-col>
        </v-row>
    </v-card>
    </v-container>
    
    </v-app>
  
  </div>
  </template>
  
  <script>
  // import firebase from "firebase";
  import firebase from 'firebase/compat/app';
  
  export default {
      components: {},
      data() {
      return {
        user: null,
        drawer: null,
        selectedItem: 0,
        items: [
          { text: 'My Files', icon: 'mdi-folder',to: '/' },
          { text: 'Profile', icon: 'mdi-account' },
          { text: 'Starred', icon: 'mdi-star' },
          { text: 'Recent', icon: 'mdi-history' },
          { text: 'Offline', icon: 'mdi-check-circle'},
          { text: 'Uploads', icon: 'mdi-upload' },
          { text: 'Backups', icon: 'mdi-cloud-upload'},
        ],
      };
  },
  created() {
         firebase.auth().onAuthStateChanged(user => {
             if (user) {
                 this.user = user;
                 console.log("user");
                 console.log("user" + this.user)
             }
         });
     }
      
  }
  </script>