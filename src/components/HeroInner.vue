<template>
    <section class="hero-inner flex-center" :style="{ backgroundImage: 'url(' + require('@/assets/' + imageHeroInner) + ')' }">
        <div class="hero-inner__container">
            <h2 class="title1">{{ titleHeroInner }}</h2>
        </div>
    </section>
    </template>
    
    <script>
    
    export default {
      name: "HeroInner",
      props: {
        titleHeroInner: String,
        imageHeroInner: String
      }, 
    };
    </script>
    
<style scoped lang="scss">
.hero-inner {
    height: 300px;
    width: 100%;
    background-size: cover;
    position: relative;
    display: flex;
    color: $white;

    @include desktop {
        height: 400px;
    }
        
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