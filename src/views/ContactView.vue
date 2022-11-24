<template>
    <AttractionInner titleAttractionInner="Contact us" imageAttractionInner="cover-contact.jpg"/>
    <ContactInfo />

</template>

<script>
import AttractionInner from '@/components/AttractionInner.vue'
import ContactInfo from '@/components/ContactInfo.vue';

export default {
  name: 'AboutUsView',
  components: {
    AttractionInner,
    ContactInfo
}
}
</script>