<template>
<section id="attraction" class="flex-center">
    <div class="coll-full">
        <div class="attraction-content">
            <h2 class="title1">Welcome</h2>
            <p class="p1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ultricies dui nisl, id feugiat lectus consectetur id. Sed accumsan, tortor a fermentum molestie, dolor felis iaculis orci, quis placerat nibh urna non elit. Proin venenatis, nulla nec facilisis hendrerit, augue augue laoreet mauris, quis pellentesque purus sapien sed erat.</p>
            <Button1 textButton="Book now" urlButton="/contact" />
        </div>
    </div>
</section>
</template>

<script>
import Button1 from '@/components/buttons/Button1.vue'

export default {
  name: "AttractionMain",
  components: {
    Button1
  }, 
};
</script>

<style scoped lang="scss">
#attraction {
    background-image: url("@/assets/attraction.jpg");
    height: 100vh;
    width: 100%;
    background-size: cover;
    position: relative;
    display: flex;
    color: $white;
    
    .attraction-content {
        z-index: 1;
        position: relative;
        max-width: 600px;
        text-align: center;
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