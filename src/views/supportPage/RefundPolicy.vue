<template>
    <div>
       <common-header/>
       <v-img max-height="410" src="https://img.freepik.com/premium-photo/refund-policy-text-sticky-with-pen-calculator-glasses-beige-background_376538-1614.jpg?w=2000"></v-img>
       <br><br> 
       <h1 class="mx-auto text-center blue-grey--text">Refund Policy</h1>
       <!-- <v-card class=""><p>Our Story</p></v-card> -->
       <v-card
      class="mx-auto"
      max-width="990"
      flat
    >
    <strong class="blue-grey--text">Refund Policy </strong>
       <p class="blue-grey--text">As part of the refund policy – WWW.DTRIPS.COMprefers to be very transparent to clients in regards to cancellation charges. The overall process would have charges deducted at 3 stages:</p>
       <br>  
       <p class="blue-grey--text"><strong class="blue-grey--text">1) Charges catered by Flight carrier/ Hotels - </strong>At the time of booking, this amount is paid to the service providers. At the time of cancellations/refund, the amount is refunded to Away Holidays after respective deductions and the same will be credited back to customers.</p>
       <p class="blue-grey--text"><strong class="blue-grey--text">2) Payment Gateway Charges:</strong> Payment gateway charges are paid by the customer directly to the payment gateway based on the mode of payment selected. Each payment model has different charges. We encourage clients to use payment mechanisms at their convenience. However, during a refund, whatever charges were deducted/paid to the Payment gateway by the customer are not refundable.</p>
       <p class="blue-grey--text"><strong class="blue-grey--text">3) Operator Charges:</strong> Not all tickets are provided directly by the airlines and hotels. At times there are some promotional fares that WWW.DTRIPS.COM onboards via 3rd Party service providers. While cancelling a ticket, the operator charges are non-refundable. the amount might range from INR 200-500 per person for DOMESTIC bookings and INR 500-3000 for INTERNATIONAL bookings. We wish to advise that WWW.DTRIPS.COM doesn’t charge/hold any amount for any client while refunding and cancelling. Whatever is charged by the Flights/Hotels + Payment gateway + operator charges WWW.DTRIPS.COM refunds the balance amount to the client either via the same payment mechanism or to expedite the refunds, the direct bank transfer options might also be available if required. For All Clients travelling via AIR INDIA - the refund processing time might be from 180 to 365 working days.</p>  
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
  