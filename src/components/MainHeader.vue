<template>
    <header id="home" ref="headerRef" :class="{sticky: onScrollDown}">
      <div class="coll-full header-container">
        <h1 class="logo"><RouterLink to="/">YUZU R.T.</RouterLink></h1>
        <div class="menu-bars-container" @click="activeMenu()">
          <span class="menu-bars" :class="{ activeMenuBars: isOpen }"></span>
        </div>
        <nav class="menu-container" :class="{ openMenu: isOpen }">
            <ul class="main-menu">
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">About us</RouterLink></li>
                <li><RouterLink to="/menu">Menu</RouterLink></li>
                <li><RouterLink to="/contact" >Contact us</RouterLink></li>
            </ul>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: "MainHeader",
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
  header {
      position: fixed;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s;
      height: 0;
      box-sizing: border-box;

      &.sticky {
        background: black;
        height: 70px;
      }
      .header-container {
        display: flex;
        justify-content: space-between;
        align-content: center;
        align-items: center;
        flex-direction: row;
        padding: 20px;
  
      .logo {
        font-weight: bold;
        font-size: 30px;
        z-index: 10;
        a {
          text-decoration: none;
          color: $white;
        }
      }
     }
  } 

  //Menu 
  .menu-container {
    &.openMenu {
      transform: translateX(0%);
    }

    @include phone-only {
      height: 100vh;
      width: 100%;
      transition: all .4s ease;
      position: absolute;
      left: 0;
      top: 0;
      background: black;
      transform: translateX(100%);
    }
  }

  .main-menu {
    display: flex;

    @include phone-only { 
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

    li{
        padding: 0 20px;
        font-size: 1em;

        @include phone-only {
          width: 100%;
          display: block;
          text-align: center;
          padding: 20px;
          font-size: 2em;
        }

        a {
            color: white;
            text-decoration: none;
            font-weight: bold;
        }
    }
  }

  //Menu Bars
  .menu-bars-container {
    position: fixed;
    top: 19px;
    z-index: 22000;
    right: 20px;
    width: 35px;
    height: 24px;
    cursor: pointer;

    @include desktop {
      display: none;
    }
}
.menu-bars {
    height: 3px;
    background-color: $white;
    transition: all .5s ease;
    position: absolute;
    left: 0;
    top: 11px;
    width: 100%;

    &.activeMenuBars {
        transform: rotate(45deg);
        transform-origin: 50% 0;
        background-color: #f1e7e7;

        &::after {
            transform: rotate(90deg);
        }

        &::before, &::after {
            top: 0;
        }
    }

    &::before, &::after {
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        position: absolute;
        left: 0;
        background-color: $white;
        transition: all .5s ease;
    }

    &::before {
        top: -10px;
    }

    &::after {
        bottom: -10px;
    }
}
</style>
    