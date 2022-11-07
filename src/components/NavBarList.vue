<template>
  <NavBarItem>
    <a href="#intro" @click="$emit('close')">O nás</a>
  </NavBarItem>
  <NavBarItem>
    <a @click="$emit('close')" href="#booking" exact-path to="/projects"> Rezervace</a>
  </NavBarItem>
  <NavBarItem>
    <a @click="$emit('close')" href="#footer" exact-path to="/projects"> Kontakt</a>
  </NavBarItem>
</template>

<script setup>
import NavBarItem from "./NavBarItem.vue"

const $t = string => {
  return string
}
</script>

<style></style>
