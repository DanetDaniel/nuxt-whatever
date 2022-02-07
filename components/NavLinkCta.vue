<template>
  <NuxtLink
    :to="linksTo"
    class="p-2 bg-red-500 hover:bg-red-700 rounded-md duration-200 mr-4 last:mr-0"
  >
    <p
      class="
        font-medium text-sm text-white
      "

      @mouseenter="$store.commit('toggleIsHovered')"
      @mouseleave="$store.commit('toggleIsHovered')"
    >
      <slot />
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    linksTo: {
      type: String,
      required: true,
    }
  }
}
</script>