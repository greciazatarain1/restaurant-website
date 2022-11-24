<template>
    <div class="item-card">
        <img :src="dishImage" />
        <h3 class="title3">{{ dishName }}</h3>
        <p class="p2">{{ dishDescription }}</p>
    </div>
</template>
  
<script>
export default {
    name: "DishItem",
    props: {
        dishImage: String,
        dishName: String,
        dishDescription: String
    }
};
</script>
  
<style scoped lang="scss">
.item-card {
    margin: 0 10px;
    text-align: center;
    max-width: 220px;

    img {
        border-radius: 15px;
        width: calc(100% - 20px);
        margin: 10px;
        box-sizing: border-box;
        box-shadow: 2px 5px 5px 0px #a49a833d;
    }
}
</style>
    