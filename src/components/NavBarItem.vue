<template>
  <div>
    <li
      :class="logo ? 'px-0' : 'px-4'"
      class="flex items-center py-4 mx-4 font-bold text-color transition duration-1000 ease-in-out transform md:py-1 md:block navbar-item md:px-0 navbar-nav justify-items-start hover:-translate-x-1 hover:scale-110"
    >
      <slot></slot>
    </li>
  </div>
</template>

<script setup>
const prop = defineProps({
  logo: Boolean,
});
</script>

<style>
.text-color {
  color: pink;
}
</style>
