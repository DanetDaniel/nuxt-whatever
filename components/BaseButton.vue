<template>
  <button
    class="border-solid border-2 border-gray-900 rounded-full px-4 py-2 bg-white font-semibold hover:shadow-xl duration-150 max-h-max max-w-max"
    @mouseenter="$store.commit('toggleIsHovered')"
    @mouseleave="$store.commit('toggleIsHovered')"
  >
    <slot />
  </button>
</template>