<template>
    <section id="attraction" class="flex-center" :style="{ backgroundImage: 'url(' + require('@/assets/' + imageAttractionInner) + ')' }">
        <div class="coll-full">
            <div class="attraction-content">
                <h2 class="title1">{{ titleAttractionInner }}</h2>
            </div>
        </div>
    </section>
    </template>
    
    <script>
    
    export default {
      name: "AttractionInner",
      props: {
        titleAttractionInner: String,
        imageAttractionInner: String
      }, 
    };
    </script>
    
    <style scoped lang="scss">
    #attraction {
        height: 300px;
        width: 100%;
        background-size: cover;
        position: relative;
        display: flex;
        color: $white;

        @include desktop {
            height: 400px;
        }
        
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