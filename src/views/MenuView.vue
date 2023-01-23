<template>
    <HeroInner titleHeroInner="Menu" imageHeroInner="cover-menu.jpg"/>
    <MenuList />
</template>

<script>
import HeroInner from '@/components/HeroInner.vue'
import MenuList from '@/components/MenuList.vue'

export default {
  name: 'MenuView',
  components: {
    HeroInner,
    MenuList
  }
}
</script>