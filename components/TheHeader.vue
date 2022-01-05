<template>
  <header>
    <nav>
      <NuxtLink to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          class="bi bi-brightness-alt-high brand"
          viewBox="0 0 16 16"
          @mouseenter="$store.commit('toggleIsHovered')"
          @mouseleave="$store.commit('toggleIsHovered')"
        >
          <path
            d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4zm0 1a3 3 0 0 1 2.959 2.5H5.04A3 3 0 0 1 8 8z"
          />
        </svg>
      </NuxtLink>

      <MenuButton />

    </nav>
    <div
      class="menu"
      v-bind:class="{ active: $store.state.isMenuActive }"
    >
      <ul class="nav-links-list">
        <li
          class="nav-links-item"
          @click="$store.commit.toggleMenuState"
        >
          <NuxtLink to="/fun"> Fun </NuxtLink>
        </li>
        <li
          class="nav-links-item"
          @click="$store.commit.toggleMenuState"
        >
          <NuxtLink to="/about"> About </NuxtLink>
        </li>
      </ul>
    </div>
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

nav button {
  background: none;
  border: none;

  z-index: 12;
  cursor: pointer;
}

nav a{
  z-index: 12;
}

nav .bi {
  font-family: sans-serif;
  font-size: 2rem;
  text-decoration: none;
  color: var(--clr-link);
}

.menu {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateX(100vw);

  transition: transform 300ms ease-in-out;
}

ul.nav-links-list {
  list-style-type: none;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background: #dddddd;
}

.active {
  transform: translateX(0%);
}

/* li.nav-links-item {
} */

li.nav-links-item:not(:last-child) {
  /* margin-right: 2em; */
  margin-bottom: 2em;
}

li.nav-links-item a {
  text-decoration: none;
  color: var(--clr-link);
  font-size: 3rem;
  transition: color 150ms ease;
}

li.nav-links-item a:hover {
  /* text-decoration: underline; */
  /* color: var(--clr-link-hover); */
  color: #e84118;
}
</style>