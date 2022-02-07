<template>
  <div>
    <article
      v-for="product in prods"
      :key="product.title"
    >
      <img :src="product.images[0]" :alt="product.title">
      <h1>
        {{product.name}}
      </h1>
      <p>{{product.description}}</p>

    </article>
    <!-- {{prods}} -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Fun",
  },
  data() {
    return {
      products: []
    }
  },
  // EXAMPLE USAGE: asyncData()
  // async asyncData({ $axios, context }) {
  //   const ip = await $axios.$get('http://icanhazip.com');
  //   console.log(context);
  //   return { ip };
  // },
  // async asyncData( context ) {
  //   console.log(context);
  // },
  async asyncData({ app }) {
    const productRef = app.$fire.firestore.collection('Products');
    let prods = [];
    const snapshot = await productRef.get().then(snapshot => {
      // let currentProduct = {
        // id: '',
        // name: '',
        // description: '',
        // categories: [],
        // images: [],
        // reviewsNumber: 0,
        // reviewsValue: 0
      // }

      snapshot.forEach(doc => {
        let currentProduct = doc.data();
        prods.push({
        name: currentProduct.name,
        description: currentProduct.description,
        categories: currentProduct.categories,
        images: currentProduct.images,
        reviewsNumber: currentProduct.reviewsNumber,
        reviewsValue: currentProduct.reviewsValue
      })}
      )
    });
    return { prods }
  },
};
</script>