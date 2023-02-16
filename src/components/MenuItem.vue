<template>
    <li class="item-menu">
        <div>
            <img :src="menuItemImage" :alt="menuItemAltImage" />
        </div>
        <div class="text-container">
            <h3 class="title3">{{ menuItemName }}</h3>
            <p class="p2">{{ menuItemDescription }}</p>
            <p class="price">{{menuItemPrecio}}</p>
        </div>
    </li>
</template>
  
<script>
export default {
    name: "MenuItem",
    props: {
        menuItemImage: String,
        menuItemName: String,
        menuItemDescription: String,
        menuItemPrecio: String,
        menuItemAltImage: String,
    }
};
</script>
  
<style scoped lang="scss">
.item-menu {
    padding: 23px 0;
    list-style: none;

    @include desktop {
        display: flex;
    }

    img {
        width: 100%;
        border-radius: 15px;

        @include desktop {
            width: 185px;
        }
    }

    .text-container {
        @include desktop {
            margin-left: 30px;
        }

        .price {
            font-size: 1em;
            font-weight: 700;
            color: #b56f40;
        }
    }
}
</style>
    