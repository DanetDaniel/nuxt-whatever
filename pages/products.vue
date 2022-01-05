<template>
  <div
    class="store"
    v-html="storeHtml"
  ></div>
</template>

<script>
export default {
  data() {
    return {
      storeHtml: `<div id="my-store-69828193"></div><div><script data-cfasync="false" type="text/javascript" src="https://app.ecwid.com/script.js?69828193&data_platform=code&data_date=2022-01-06" charset="utf-8"></script><script type="text/javascript"> xProductBrowser("categoriesPerRow=3","views=grid(20,3) list(60) table(60)","categoryView=grid","searchView=list","id=my-store-69828193");</script></div>`
    }
  }
}
</script>