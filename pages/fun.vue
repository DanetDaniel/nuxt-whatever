<template>
  <div>
    <h1>Yay fun</h1>
    <p>ip: {{ ip }}</p>
  </div>
</template>

<script>
export default {
  head: {
    title: "Fun",
  },
  async asyncData({ $axios, context }) {
    const ip = await $axios.$get('http://icanhazip.com');
    console.log(context);
    return { ip };
  },
  // async asyncData( context ) {
  //   console.log(context);
  // },
};
</script>