<template>
    <header class="header" ref="headerRef" :class="{'header--sticky': onScrollDown}">
      <div class="header__container">
        <MainLogo />
        <MenuIcon  @activeIcon="activeMenu()" :activeClass="isOpen" />
        <div class="menu" :class="{'menu--open': isOpen}">
          <MainNav />
        </div>
      </div>
    </header>
  </template>
  
  <script>
  import MainLogo from "@/components/MainLogo.vue";
  import MenuIcon from "@/components/MenuIcon.vue";
  import MainNav from "@/components/MainNav.vue";

  export default {
    name: "MainHeader",
    components: {
      MainLogo,
      MenuIcon,
      MainNav
    },
    data(){
      return {
        onScrollDown: false,
        isOpen: false,
      }
    },
    watch: {
      '$route'(){
        this.isOpen = false
      }
    },
    methods: {
      stickyMenuOnScroll(){
        const headerRef = this.$refs.headerRef; 
        const sticky =  headerRef.offsetTop;
        
        window.addEventListener("scroll", () => {
          if (window.pageYOffset > sticky) {
            this.onScrollDown = true
          } else {
            this.onScrollDown = false
          }
        });
      },

      activeMenu() {
            this.isOpen = !this.isOpen;
      },
    },
    mounted(){
      this.stickyMenuOnScroll()
    }
  };
  </script>

  <style scoped lang="scss">
  //Header
  .header {
      position: fixed;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s;
      height: 0;
      box-sizing: border-box;

      &--sticky {
        background: black;
        height: 70px;
      }

      &__container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        padding: 20px;
      }
  } 

  //Menu 
  .menu{
    @include phone-only {
      display: flex;
      height: 100vh;
      width: 100%;
      transition: all .4s ease;
      position: absolute;
      left: 0;
      top: 0;
      background: black;
      transform: translateX(100%);
      justify-content: center;
      align-items: center;
    }

    &--open {
      transform: translateX(0%);
    }
  }
</style>
    