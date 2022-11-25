import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue';
import AboutUs from '../views/aboutus/AboutUs.vue';
import PrivacyPolicy from '../views/supportPage/PrivacyPolicy.vue';
import RefundPolicy from '../views/supportPage/RefundPolicy.vue';
import TermsConditions from '../views/supportPage/TermsConditions.vue';
import SocialLogin from '../views/SocialLogin.vue';
import IconsPage from '../components/icons/IconsPage.vue';
import LoginCard from '../components/loginRegister/LoginCard.vue';
import RegisterCard from '../components/loginRegister/RegisterCard.vue';
//
import ProfilePage from '../components/ProfilePage.vue';
import DefaultLayout from '../components/userdetails/DefaultLayout.vue';

import UserProfile from '../components/userdetails/UserProfile.vue';
import HotelSearch from '../components/hotel/HotelSearch.vue';
import HotelDetails from '../components/hotel/HotelDetails.vue';
import HotelFlight from '../components/hotelFlightPage/HotelFlight.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'home',
  },
  //
  //
  //
  {
    path: '/p',
    name: 'p',
    component: ProfilePage
  },
  {
    path: '/d',
    name: 'd',
    component: DefaultLayout
  },


  {
    path: '/google',
    name: 'google',
    component: SocialLogin
  },
  {
    path: '/profile',
    name: 'profile',
    component: UserProfile
  },
  {
    path: '/hotelsearch',
    name: 'hotelsearch',
    component: HotelSearch
  },
  {
    path: '/hoteldetails',
    name: 'hoteldetails',
    component: HotelDetails
  },
  {
    path: '/hotelflight',
    name: 'hotelflight',
    component: HotelFlight
  },
  {
    path: '/icons',
    name: 'icons',
    component: IconsPage
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/aboutus',
    name: 'aboutus',
    component: AboutUs
  },
  {
    path: '/logincard',
    name: 'logincard',
    component: LoginCard
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterCard
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: PrivacyPolicy
  },
  {
    path: '/refund',
    name: 'refund',
    component: RefundPolicy
  },
  {
    path: '/terms',
    name: 'terms',
    component: TermsConditions
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
