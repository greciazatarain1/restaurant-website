<template>
    <section class="history">
        <div class="history__container">
            <div class="history__image-container">
                <img class="history__image" src="@/assets/chef.jpg" alt="The Chef" />
            </div>
            <div class="history__text-container">
                <h3 class="title2">The Chef</h3>
                <p class="p2">Phasellus vitae dignissim massa. Vestibulum mattis ultrices tempor. Proin non vestibulum neque, a eleifend nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce vitae tortor sit amet urna auctor ultrices vitae ac arcu. Praesent eget cursus sapien. Integer lectus nibh, fringilla quis posuere eget, dignissim non nisi. In malesuada vel urna sed semper. Mauris ante libero, vestibulum eget nisl nec, suscipit pulvinar orci. Curabitur urna arcu, sagittis sit amet gravida eget, rutrum vel quam. Praesent nec elit lobortis nibh viverra gravida. Etiam ut iaculis dolor.</p>
                <br/>
                <p class="p2">Duis vestibulum dolor ut justo posuere finibus. Vivamus a velit et erat ullamcorper vestibulum ultricies faucibus justo. Ut sed massa elit. In hac habitasse platea dictumst. Morbi vel nunc mauris. Mauris imperdiet vel eros non sagittis. Nunc semper aliquet risus, auctor consectetur nisi hendrerit dignissim. Sed tristique tortor tortor, et posuere est euismod a. In eget risus suscipit, pretium purus at, posuere nunc. Morbi condimentum faucibus sapien, vitae blandit enim lobortis at.</p>
                <br/>
                <p class="p2">Integer sed nisi vulputate, sagittis arcu ut, faucibus justo. Ut et lectus quis erat pulvinar accumsan. Donec egestas lectus in ultrices vulputate. Vivamus hendrerit rhoncus placerat. In pretium metus sem, id dapibus felis tempus nec.</p>
                <Button textButton="More about us" urlButton="/about" :dark="true" />
            </div>
        </div>
    </section>
</template>
  
<script>
import Button from "@/components/buttons/Button.vue"

export default {
    name: "ChefDescription",
    components: {
        Button
    }
};
</script>
  
<style scoped lang="scss">
.history {
    &__container {
        margin: 0 auto;
        max-width: 1200px;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;

        @include desktop { 
            flex-direction: row;
        }
    }
    &__image-container {
        @include desktop { 
            width: 40%;
        }
    }

    &__image {
        width: 100%;
        border-radius: 15px;
    }

    &__text-container {
        text-align: center;

        @include desktop { 
            width: 50%;
        }
    }
}
</style>
    