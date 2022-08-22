<script setup lang="ts">
// eslint-disable-next-line no-undef
defineOptions({
  name: 'QButton',
})
</script>
<template>
  <button class="q-button"><slot></slot></button>
</template>
<style>
.q-button {
  background-color: greenyellow;
  color: #fff;
}
</style>
