<template>
    <nav class="main-nav">
        <ul class="main-nav__list">
            <li class="main-nav__item"><RouterLink class="main-nav__link" to="/">Home</RouterLink></li>
            <li class="main-nav__item"><RouterLink class="main-nav__link" to="/about">About us</RouterLink></li>
            <li class="main-nav__item"><RouterLink class="main-nav__link" to="/menu">Menu</RouterLink></li>
            <li class="main-nav__item"><RouterLink class="main-nav__link" to="/contact" >Contact us</RouterLink></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "MainNav",
};
</script>

<style scoped lang="scss">
.main-nav {
    display: flex;

    @include phone-only { 
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    &__item{
        padding: 0 20px;
        font-size: 1em;
        list-style: none;
        display: inline-flex;

        @include phone-only {
          width: 100%;
          display: block;
          text-align: center;
          padding: 20px;
          font-size: 2em;
        }
    }

    &__link {
        color: white;
        text-decoration: none;
        font-weight: bold;
    }
}
</style>