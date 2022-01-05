<template>
  <button
    @mouseenter="$store.commit('toggleIsHovered')"
    @mouseleave="$store.commit('toggleIsHovered')"
  >
    <p class="button-text">menu</p>
    <div class="lines-container">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>
  </button>
</template>

<style scoped>
  button {
    display: flex;
    align-items: center;
    cursor: none;

    /* padding: .5em;
    border-radius: .5em; */
  }

  button:hover {
    cursor: none;
    /* background: #ddd; */
    letter-spacing: .12em;
  }

  button:hover .lines-container {
    transform: scaleY(1.2);
  }

  button .button-text {
    text-transform: capitalize;
    transition: letter-spacing 150ms ease-out
  }

  .lines-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 3em;
    height: 1.5em;
    margin-left: 1em;

    transition: all 150ms ease-out;
  }

  .lines-container .line {
    width: 100%;
    height: 10%;
    background: #000;

  }
</style>