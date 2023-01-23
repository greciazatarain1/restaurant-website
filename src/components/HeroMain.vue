<template>
<section class="hero flex-center">
    <div class="hero__container">
        <h2 class="title1">Welcome</h2>
        <p class="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies dui nisl, id feugiat lectus consectetur id. Sed accumsan, tortor a fermentum molestie, dolor felis iaculis orci, quis placerat nibh urna non elit. Proin venenatis, nulla nec facilisis hendrerit, augue augue laoreet mauris, quis pellentesque purus sapien sed erat.</p>
        <Button textButton="Book now" urlButton="/contact" />
    </div>
</section>
</template>

<script>
import Button from '@/components/buttons/Button.vue'

export default {
  name: "HeroMain",
  components: {
    Button
  }, 
};
</script>

<style scoped lang="scss">
.hero {
    background-image: url("@/assets/hero.jpg");
    height: 100vh;
    width: 100%;
    background-size: cover;
    position: relative;
    display: flex;
    color: $white;
    
    &__container {
        z-index: 1;
        position: relative;
        max-width: 600px;
        text-align: center;
        padding: 0 20px;
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: black;
        opacity: 0.35;
        width: 100%;
        height: 100%;
    }
}
</style>