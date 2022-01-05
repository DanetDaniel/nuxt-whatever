export default {
  components: true,
  modules: ['@nuxtjs/axios'],
  head: {
    titleTemplate: '%s - SomeBrand',
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'true' },
      { href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap', rel: 'stylesheet' }
    ]
  }
}