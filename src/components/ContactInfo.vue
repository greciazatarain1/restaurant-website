<template>
    <section>
        <div class="coll-full max-width-small">
            <div class="image-container">
                <img src="@/assets/contact-image.jpg" alt="Book table" />
            </div>
            <div class="text-container">
                <h2 class="title2 align-left">Book now</h2>
                <p class="p1">Nulla facilisi. Nunc porttitor feugiat dolor congue semper. Vestibulum turpis velit, porta eu tortor ut, ullamcorper accumsan mi. Mauris placerat metus urna. Suspendisse iaculis rhoncus scelerisque. Ut vitae eros in purus molestie facilisis a sit amet felis. Maecenas volutpat, neque a gravida rutrum, dui elit iaculis tellus, id porttitor dui tellus interdum diam. </p>
                <div class="contact-info">
                    <p class="p1">
                        <a href="tel:898 787 233" class="bold">
                            <i class="fa-solid fa-phone"></i>
                            898 787 233
                        </a>
                    </p>
                    <address>
                        <p class="p1">
                            <i class="fa-solid fa-location-dot"></i> Atun 1232, 
                            <br/>
                            Mazatlán, Mexico
                        </p>
                    </address>
                </div>
            </div>
        </div> 
    </section>      
</template>

<script>
export default {
    name: "ContactInfo",

};
</script>
  
<style scoped lang="scss">
section {
    .coll-full {
        @include desktop {
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
        }
    }

}

.image-container{
    @include desktop {
        width: 45%;
    }
}

.text-container {
    @include desktop {
        width: 48%;
    }
}

.contact-info {
    margin: 30px 0 0;
    a, address {
        font-style: normal;
        color: $dark-grey;
        margin: 20px 0;
    }
}
</style>
    