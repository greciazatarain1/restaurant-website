<template>
    <h1 class="logo">
        <RouterLink to="/" class="logo__link">YUZU R.T.</RouterLink>
    </h1>
</template>
<script>
export default {
    name: "MainLogo",
};
</script>
<style scoped lang="scss">
.logo {
    font-weight: bold;
    font-size: 30px;
    z-index: 10;

    &__link {
          text-decoration: none;
          color: $white;
    }
}
</style>