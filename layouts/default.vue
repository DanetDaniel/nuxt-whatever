<template>
  <div class="layout-base">
    <TheHeader />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    logEvent() {
      console.log('Event has taken place');
    }
  }
}
</script>

<style scoped>
.layout-base {
  padding: 2em 5em;
}

main {
  margin-top: 3em;
}
</style>