<template>
    <section class="carousel-section">
        <div class="carousel-section__container">
            <h2 class="title2">Favorite Dishes</h2>
            <Carousel :wrap-around="true" :breakpoints="breakpoints">
                <Slide
                    v-for="dish in favoriteDishes" 
                    :key="dish.id" >
                        <DishItem
                            class="carousel__item" 
                            :dishImage="dish.image"
                            :dishAltImage="dish.name"  
                            :dishName="dish.name" 
                            :dishDescription="dish.description" />
                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
            <div class="flex-center">
                <Button textButton="See menu" urlButton="/menu" :dark="true"/>
            </div>
        </div>
    </section>
</template>
  
<script>
import 'vue3-carousel/dist/carousel.css'
import  { Carousel, Slide, Navigation } from 'vue3-carousel'
import DishItem from '@/components/DishItem.vue'
import Button from '@/components/buttons/Button.vue'

export default {
    name: "FavoriteDishes",
    components: {
        DishItem,
        Carousel,
        Slide,
        Navigation,
        Button
    },

    data(){
        return {
            favoriteDishes: [
                {
                    id: '1',
                    image: require("@/assets/dishes/img-dish-01.jpg"),
                    name: "Aguachile",
                    description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                },
                {
                    id: '2',
                    image: require("@/assets/dishes/img-dish-02.jpg"),
                    name: "Aguachile",
                    description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
                },
                {
                    id: '3',
                    image: require("@/assets/dishes/img-dish-03.jpg"),
                    name: "Aguachile",
                    description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                },
                {
                    id: '4',
                    image: require("@/assets/dishes/img-dish-04.jpg"),
                    name: "Aguachile",
                    description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                },
                {
                    id: '5',
                    image: require("@/assets/dishes/img-dish-05.jpg"),
                    name: "Pulpo al ajillo",
                    description: "Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                }
            ],

            breakpoints: {
                // 700px and up
                300: {
                    itemsToShow: 1,
                    snapAlign: 'start',
                },
                  // 700px and up
                600: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                },
                // 1024 and up
                1024: {
                    itemsToShow: 4,
                    snapAlign: 'start',
                },
            }
        }
    }
};

</script>
  
<style scoped lang="scss">
.carousel-section {
    &__container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
    }
}

.carousel__slide {
    align-items: start;
}
.carousel {
    padding: 30px 0;

    &__track {
        align-items: flex-start;
    }
}

:deep(.carousel__prev) {
    left: -20px;
}

:deep(.carousel__next)  {
    right: -20px;
}
</style>
    