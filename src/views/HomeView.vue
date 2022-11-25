<template>
  <div class="home">
    <header-page/>
    <welcome-page/>
    <!-- <icons-page></icons-page> -->
    <trending-offer/>
    <br>
    <br>
    <top-destination/>
    <br>
    <br>
    <download-enjoy/>
    <br>
    <br>
    <footer-page/>
    <br>
    <contact-info/>
  
  </div>
</template>

<script>
import WelcomePage from '@/components/WelcomePage.vue';
import HeaderPage from '../components/HeaderPage.vue';
import TrendingOffer from '@/components/TrendingOffer.vue';
import TopDestination from '@/components/TopDestination.vue';
import DownloadEnjoy from '@/components/DownloadEnjoy.vue';
import ContactInfo from '@/components/ContactInfo.vue';
import FooterPage from '@/components/FooterPage.vue';
import IconsPage from '../components/icons/IconsPage.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderPage,
    WelcomePage,
    TrendingOffer,
    TopDestination,
    DownloadEnjoy,
    ContactInfo,
    FooterPage,
    IconsPage
}
}
</script>
