<template>
    <HeroInner titleHeroInner="About us" imageHeroInner="cover-about-us.jpg"/>
    <AboutUsDescription />
    <ChefDescription />
</template>

<script>
import AboutUsDescription from '@/components/AboutUsDescription.vue';
import HeroInner from '@/components/HeroInner.vue'
import ChefDescription from '@/components/ChefDescription.vue'


export default {
  name: 'AboutUsView',
  components: {
    HeroInner,
    ChefDescription,
    AboutUsDescription
}
}
</script>