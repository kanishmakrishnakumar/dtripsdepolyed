<template>
    <v-container>
        <div class="block">
          <!-- <secction class="features" id="features"> -->
            <h1 class="heading">Trending <span>Offers</span></h1>
          <!-- </secction> -->
            <!-- <h1 class="text-center font-weight-medium text-decoration-underline">Trending Offers</h1>
            <br> -->
          <v-row>
           
            <carousel-3d :controls-visible="true" :clickable="false"  reverse-transition="fade-transition"
              transition="fade-transition">
             <slide :index="i" :key="i" v-for="(slide,i) in slides">
                <figure>
                    <v-img :src="slide.src">
                    <!-- <v-btn text color="red">{{slide.title}}</v-btn>  -->
                  </v-img>
                     <figcaption>
                        <v-btn text color="white">{{slides.title}}</v-btn>
                    </figcaption>
                </figure>
            </slide> 
            </carousel-3d>
          </v-row>
        </div>
    </v-container>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name:"TrendingOffer",
     components: { Carousel3d, Slide },

    data: ()=> ({
        // colors: [
        //   'purple',
        //   'warning',
        //   'pink darken-2',
        //   'red lighten-1',
        // ],
        slides: [
        {   title:'hallo',
            src: 'TO1.png',
          },
          {
            src: 'TO2.png',
          },
          {
            src: 'TO3.png',
          },
          {
            src: 'TO4.png',
          },
          {
            src: 'TO2.png',
          },

        ],
    })
}
</script>

<style>
/* .block{
    text-align: center;
} */

/* .heading{
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
} */
</style>

/* .carousel-3d-container figure{
    margin: 0;
}
.carousel-3d-container figcaption{
    position: absolute;
    background-color: rgb(0, 0, 0, 0.5);
    color:red;
    bottom: 0;
    position: absolute;
    padding: 15;
    font-size: 12;
    min-width: 100%;
    box-sizing: border-box;
}
.next span, .prev span{
    color: orange;
} */

