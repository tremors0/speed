<template>
  <NavBarItem>
    <a href="#intro" @click="$emit('close')">O nás</a>
  </NavBarItem>
  <NavBarItem>
    <a @click="$emit('close')" href="#contact" exact-path to="/projects"> Kontakt</a>
  </NavBarItem>
</template>

<script setup>
import NavBarItem from "./NavBarItem.vue"

const $t = string => {
  return string
}
</script>

<style></style>
