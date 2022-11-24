<template>
    <section>
        <div class="coll-full max-width-small">
            <div class="block"
            v-for="category in menuList.categories" :key="category.id">
                <span class="separator"></span>
                <h2 class="title2 flex-center">
                    {{ category.categoryName }}
                </h2>
                <ul class="menu-list">
                    <MenuItem 
                        v-for="dish in category.dishes" 
                        :key="dish.id" 
                        :menuItemImage="dish.image" 
                        :menuItemName="dish.name" 
                        :menuItemDescription="dish.description"
                        :menuItemPrecio="dish.precio" />
                </ul>
          </div>
        </div>
    </section>
</template>
  
<script>
import MenuItem from '@/components/MenuItem.vue'

export default {
    name: "MenuList",
    components: {
        MenuItem
    },
    data(){
        return {
            menuList: {
                categories: [
                    {
                        id: "1",
                        categoryName: "Starters",
                        dishes: [
                            {
                                id: "1",
                                image: require("@/assets/dishes/img-dish-01.jpg"),
                                name: "Ceviche de atun",
                                description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                                precio: "12,00 €"
                            },
                            {
                                id: "2",
                                image: require("@/assets/dishes/img-dish-02.jpg"),
                                name: "Aguachile",
                                 description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                                precio: "13,00 €"
                            }
                        ]
                    },
                    {
                        id: "2",
                        categoryName: "Main courses",
                        dishes: [
                            {
                                id: "3",
                                image: require("@/assets/dishes/img-dish-03.jpg"),
                                name: "Pulpo al Ajillo",
                                 description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                                precio: "22,00 €"
                            },
                            {
                                id: "4",
                                image: require("@/assets/dishes/img-dish-04.jpg"),
                                name: "Salmon",
                                description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                                precio: "20,00 €"
                            }
                        ]
                    },
                    {
                        id: "3",
                        categoryName: "Desserts",
                        dishes: [
                            {
                                id: "5",
                                image: require("@/assets/dishes/img-dish-06.jpg"),
                                name: "Chocolate cake",
                                 description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                                precio: "10,00 €"
                            },
                            {
                                id: "6",
                                image: require("@/assets/dishes/img-dish-07.jpg"),
                                name: "Cheesecake",
                                description: "Cras sit amet elit neque. Vivamus quis porta diam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus efficitur finibus elit ac porta.",
                                precio: "8,00 €"
                            }
                        ]
                    }
                ]
            }
        }
    }
};
</script>
  
<style scoped lang="scss">
.menu-list {
    @include phone-only {
        margin: 0 30px;
    }
}

.title2 {
    &::before, &::after {
        content: "";
        border: 1px solid #ada79a;
        width: 30%;
        height: 1px;
        display: block;
        margin: 0 20px;
    }
}
</style>
    