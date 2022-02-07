export default {
  components: true,
  modules: [
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyAL3FKylvF179bKm84jrJnOQ9RMVmgXB00",
          authDomain: "bee-happy-demo.firebaseapp.com",
          projectId: "bee-happy-demo",
          storageBucket: "bee-happy-demo.appspot.com",
          messagingSenderId: "727811614871",
          appId: "1:727811614871:web:4494887b53fe7889db61d2"
        },
        services: {
          firestore: true
        }
      }
    ]
  ],
  buildModules: ['@nuxt/postcss8'],
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  css: [
    '@/assets/css/main.css',
  ],
  head: {
    titleTemplate: '%s - SomeBrand',
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
      { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap', rel: 'stylesheet' }
    ]
  }
}