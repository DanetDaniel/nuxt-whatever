<template>
  <header>
    <nav class="flex justify-between align-center">
      <NuxtLink to="/">
          <p
            class="text-xl font-bold text-red-500 hover:tracking-widest duration-150"
            @mouseenter="$store.commit('toggleIsHovered')"
            @mouseleave="$store.commit('toggleIsHovered')"
          >someSite</p>
      </NuxtLink>
      <ul class="flex align-center">
        <NavLink linksTo="/fun">fun</NavLink>
        <NavLink linksTo="/about">about</NavLink>
        <NavLinkCta linksTo="/about">about</NavLinkCta>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
nav {
  --clr-link: #131313;
  --clr-link-hover: #e84118;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav a{
  z-index: 12;
}

.active {
  transform: translateX(0%);
}


</style>