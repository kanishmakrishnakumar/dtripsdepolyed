<template>
  <div>
     <common-header/>
     <v-img max-height="410" src="about_us.jpeg"></v-img>
     <br><br> 
     <h1 class="mx-auto text-center blue-grey--text">About Us</h1>
     <!-- <v-card class=""><p>Our Story</p></v-card> -->
     <v-card
    class="mx-auto"
    max-width="990"
    flat
  >
     <h3>Our Story</h3> <br>
     <p class="blue-grey--text">Welcome to www.dtrips.com, a division of Away Holidays LLP and a well-known 
      online resource for finding cheap flights and hotels. Your dream trip for business, 
      adventure, or pleasure is just a click away! In one place, you can compare hotel and
       airline prices from the best travel websites online. Cheap flights are now more 
       accessible than ever. Save time and money by skipping the need to visit numerous websites 
      searching for the most fantastic offers or low-cost flights. You can find everything in one place right here.</p>
      <br> <p class="blue-grey--text">One of the top online travel companies in India, ‘DTRIPS’ offers some of the most exciting and affordable
         overnight stays and locations to look for. Our website offers all users a quick way to look 
         for the greatest deals on hotels and plane tickets. Multiple currencies can be used for searches. 
         Our booking engine platform offers a huge selection of travel products distributed through a 
         variety of distribution methods for domestic and international air travel, domestic and international 
         hotel reservations, vacation packages and international vehicle rentals, etc… The organisation offers information
         on pricing, availability, and booking tools. We offer real-time reservations for more than 1 
         million hotels worldwide.</p>
      </v-card>
      <br>
      <br>
      <br>
      <footer-page/>
      <br>
      <contact-info/>
 </div>
</template>

<script>
import CommonHeader from '@/components/CommonHeader.vue';
import FooterPage from '@/components/FooterPage.vue';
import ContactInfo from '@/components/ContactInfo.vue';

export default {
  components:{CommonHeader, FooterPage, ContactInfo}
}
</script>

<!-- <style>
.heading{
  text-align: center;
  padding: 2rem;
  padding-bottom: 3rem;
  font-size: 3.5rem;
  color: purple;
}
.heading span{
  background: purple;
  color: #fff;
  display: inline-block;
  padding: .5rem 3rem;
  clip-path: polygon(100% 0, 93% 50%, 100% 99%, 0% 100%, 7% 50%,0% 0%);
}
</style> -->