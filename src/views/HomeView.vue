<template>
    <AttractionMain />
    <ChefDescription />
    <ParallaxImage />
    <FavoriteDishes />
</template>

<script>
import AttractionMain from '@/components/AttractionMain.vue'
import FavoriteDishes from '@/components/FavoriteDishes.vue';
import ParallaxImage from '@/components/ParallaxImage.vue';
import ChefDescription from '@/components/ChefDescription.vue'

export default {
  name: 'HomeView',
  components: {
    AttractionMain,
    ChefDescription,
    ParallaxImage,
    FavoriteDishes,
}
}
</script>