<template>
    <HeroMain />
    <ChefDescription />
    <ParallaxImage />
    <FavoriteDishes />
</template>

<script>
import HeroMain from '@/components/HeroMain.vue'
import FavoriteDishes from '@/components/FavoriteDishes.vue';
import ParallaxImage from '@/components/ParallaxImage.vue';
import ChefDescription from '@/components/ChefDescription.vue'

export default {
  name: 'HomeView',
  components: {
    HeroMain,
    ChefDescription,
    ParallaxImage,
    FavoriteDishes,
}
}
</script>