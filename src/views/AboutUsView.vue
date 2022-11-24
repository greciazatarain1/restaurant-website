<template>
    <AttractionInner titleAttractionInner="About us" imageAttractionInner="cover-about-us.jpg"/>
    <AboutUsDescription />
    <ChefDescription />
</template>

<script>
import AboutUsDescription from '@/components/AboutUsDescription.vue';
import AttractionInner from '@/components/AttractionInner.vue'
import ChefDescription from '@/components/ChefDescription.vue'


export default {
  name: 'AboutUsView',
  components: {
    AttractionInner,
    ChefDescription,
    AboutUsDescription
}
}
</script>