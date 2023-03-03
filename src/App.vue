<template>
  <router-view :key="$route.fullPath"></router-view>
</template>
<script setup>
</script>
<style lang="css">
* {
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

body {
  background-color: #f6f6f6;
}
</style>
