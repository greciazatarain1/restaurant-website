<template>
    <footer class="footer">
        <div class="footer__container">
            <div>
                <p class="title4">Book now:</p>
                <p class="p2">
                    <a class="footer__link" href="tel:898 787 233">
                        <i class="fa-solid fa-phone"></i>
                        898 787 233
                    </a>
                </p>
            </div>
            <div>
                <p class="title4">Opening hours</p>
                <p class="p2">
                    Monday - Thursday
                    <br/>
                    18:00 - 22:00
                </p>
                <p class="p2">
                    Friday - Sunday
                    <br/>
                    18:00 - 23:00
                </p>
            </div>
            <div>
                <address class="footer__address">
                    <p class="title4">Address</p>
                    <p class="p2">
                        <i class="fa-solid fa-location-dot"></i> Atun 1232, 
                        <br/>
                        Mazatlán, Mexico
                    </p>
                </address>
            </div>
        </div>
        <div class="footer__bottom">
            <p class="p2">© 2022 Yuzu R.T.</p>
        </div>
    </footer>
 </template>
   
<script>
export default {
     name: "MainFooter",
};
</script>
   
<style scoped lang="scss">
.footer {
    padding: 30px 0 0;
    text-align: center;
    background: #3a3630;
    color: $white;

    &__container {
        display: flex;
        flex-direction: column;

        @include desktop {
            flex-direction: revert;
            justify-content: space-around;
        }
    }

    &__link {
        color: $white;
        text-decoration: none;
    }

    &__bottom {
        background-color: #211e1b;
        padding: 5px 0;
        font-size: 14px;
        margin-top: 20px;
    }

    &__address {
        font-style: normal;
    }
}
</style>
   
   