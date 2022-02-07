<template>
  <NuxtLink
    :to="linksTo"
    class="p-2 hover:bg-gray-200 rounded-md duration-200 mr-4"
  >
    <p
      class="
        font-medium text-sm
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