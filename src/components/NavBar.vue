<template>
  <div id="navbar" class="flex flex-col items-center uppercase bg-black">
    <div
      class="fixed z-50 flex items-center justify-between w-full h-16 bg-black lg:relative navbar-block"
    >
      <ul class="flex items-center mt-4 md:mt-2 navbar-nav justify-items-start">
        <nav-bar-item :logo="true">
          <router-link class="flex items-center" @click="active = false" to="/">
            <img
              class="navbar-item__img navbar-item__filter"
              src="../assets/logo.png"
            />
            <h3>&nbsp;&nbsp;speed date</h3>
          </router-link>
        </nav-bar-item>
      </ul>
      <ul class="items-center hidden justify-items-end md:flex">
        <nav-bar-list @close="active = false"></nav-bar-list>
      </ul>

      <button
        @click="active = !active"
        :class="active ? 'is-active' : null"
        class="md:hidden hamburger hamburger--emphatic"
        type="button"
      >
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </div>
    <div
      class="w-screen navbar-menu"
      :class="active ? 'navbar-menu__active' : 'navbar-menu__inactive'"
    >
      <ul
        :class="
          active ? 'navbar-menu-list__active' : 'navbar-menu-list__inactive'
        "
        class="flex-col items-center pt-4 justify-items-end md:hidden"
      >
        <nav-bar-list @close="active = false"></nav-bar-list>
      </ul>
    </div>
  </div>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";
import NavBarList from "./NavBarList.vue";

export default {
  data() {
    return {
      active: false,
    };
  },

  components: {
    NavBarItem,
    NavBarList,
  },
};
</script>

<style>
#navbar {
  position: sticky;
  min-height: 50px;
  top: 0;
  width: 100vw;
  z-index: 2;

  background: black;
}

#navbar {
  z-index: 100;
}

.navbar-block {
  min-height: inherit;
}

/* .navbar-menu__active {
  opacity: 1;
  max-height: 500px;
  transition: max-height 2s, opacity 0.3s;
}

.navbar-menu__inactive {
  transition: max-height 1s, opacity 1s;
  max-height: 0px;
  opacity: 0;
}

.navbar-menu-list__active {
  transition: visibility 1.2s, opacity 1.2s;
  visibility: visible;
  opacity: 1;
}

.navbar-menu-list__inactive {
  transition: visibility 0.3s, opacity 0.3s;
  visibility: hidden;
  opacity: 0;
  list-style: none;
} */

.navbar-menu__active {
  background: black;
  color: pink;
  margin-top: 50px;
  opacity: 1;
  /*   transition: max-height 0.5s ease, opacity 1s; */
  height: auto;
  max-height: 500px;
  transition: max-height 0.5s ease-in-out;
}

.navbar-menu__inactive {
  transform: translateY(-100%);
  /*   transition: transform 300ms linear, max-height 0.5s; */
  max-height: 0;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
}

.navbar-menu-list__active {
  transition: opacity 0.5s;
  transition-delay: 0.3s;
  visibility: visible;
  opacity: 1;
}

.navbar-menu-list__inactive {
  transition: visibility 0s, opacity 0s;
  visibility: hidden;
  opacity: 0;
  list-style: none;
}

.router-link-active {
  color: #a7f3d0;
}

.navbar-item__img {
  height: 30px;
}

.navbar-item__filter {
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(180deg)
    brightness(105%) contrast(102%);
  opacity: 1;
  transition: 1s;
}

.my-svg {
  background-color: red;
  fill: red;
}

.navbar-menu__active {
  background: black;
  z-index: 50;
  position: fixed;
}
</style>
