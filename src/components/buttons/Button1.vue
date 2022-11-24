<template>
    <RouterLink class="button1" :class="{ dark: dark }" :to="urlButton">{{ textButton }}</RouterLink>
</template>
  
<script>
export default {
    name: "Button_1",
    props: {
        textButton: String,
        urlButton: String,
        dark: Boolean
    }
};
</script>
  
<style scoped lang="scss">
    .button1 {
        border: 2px solid $white;
        padding: 12px 35px;
        font-size: 1em;
        font-weight: 700;
        display: inline-block;
        text-decoration: none;
        border-radius: 10px;
        color: $white;
        transition: all 0.2s;
        margin: 25px 0;

        &:hover {
            background: $white;
            color: black;
            text-decoration: none;
        }

        &.dark{
            border-color: $dark-grey;
            color: $dark-grey;

            &:hover {
                background: $dark-grey;
                color: $white;
            }
        }

    }
</style>
    