<template>
    <section class="parallax">
    </section>
</template>
  
<script>
export default {
    name: "ParallaxImage"
};
</script>
  
<style scoped lang="scss">
.parallax {
    background-image: url("@/assets/parallax.jpg");
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @include desktop { 
        height: 600px;
        background-attachment: fixed;
    }

    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        background: black;
        opacity: 0.25;
        width: 100%;
        height: 100%;
    }
}
</style>
    