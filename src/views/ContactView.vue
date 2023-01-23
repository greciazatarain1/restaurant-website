<template>
    <HeroInner titleHeroInner="Contact us" imageHeroInner="cover-contact.jpg"/>
    <ContactInfo />

</template>

<script>
import HeroInner from '@/components/HeroInner.vue'
import ContactInfo from '@/components/ContactInfo.vue';

export default {
  name: 'AboutUsView',
  components: {
    HeroInner,
    ContactInfo
}
}
</script>