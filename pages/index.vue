<template>
  <div class="grid grid-cols-2 gap-4 h-screen">
    <div class="align-center">
      <BaseButton>
        Hello
      </BaseButton>
    </div>
    <div class="w-full h-full bg-gradient-to-br from-red-500 to-red-700 rounded-lg"></div>
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Montserrat", sans-serif;
}

body {
  overflow-x: hidden;
}
</style>