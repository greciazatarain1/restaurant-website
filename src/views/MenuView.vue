<template>
    <AttractionInner titleAttractionInner="Menu" imageAttractionInner="cover-menu.jpg"/>
    <MenuList />
</template>

<script>
import AttractionInner from '@/components/AttractionInner.vue'
import MenuList from '@/components/MenuList.vue'

export default {
  name: 'MenuView',
  components: {
    AttractionInner,
    MenuList
  }
}
</script>