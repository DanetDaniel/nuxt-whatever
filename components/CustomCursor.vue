<template>
  <div>
    <div
      class="cursor cursor-outer"
      :class="{ hovered: $store.state.isHovered }"
      :style="{top: this.mouseY, left: this.mouseX}"
    ></div>
    <div
      class="cursor cursor-inner"
      :class="{ hovered: $store.state.isHovered }"
      :style="{top: this.mouseY, left: this.mouseX}"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: '0px',
      mouseY: '0px'
    }
  },
  methods: {
    onMouseMove(e) {
      this.mouseX = e.clientX + 'px';
      this.mouseY = e.clientY + 'px';
    },
  },
  mounted() {
    document.addEventListener('mousemove', this.onMouseMove);
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onMouseMove);
  }
}

</script>

<style scoped>
  .cursor {
    position: absolute;
    left: 0;
    top: 0;

    transform: translate(-50%, -50%);

    width: var(--size);
    height: var(--size);

    border-radius: 50%;
    background: none;

    border: solid var(--stroke) var(--color);
    background: var(--bg);
    pointer-events: none;

  }

  .cursor-inner {
    --size: 1em;
    --stroke: 2px;
    --color: #e84118;
    --bg: none;

    z-index: 36;
  }

  .cursor-inner.hovered {
    --size: 0.25em
  }

  .cursor-outer {
    --size: 3em;
    --stroke: 0;
    --color: rgba(0, 0, 0, 0.1);
    --bg: rgba(0, 0, 0, 0.1);
    transition: all 250ms ease-out;
    z-index: 35;
  }

  .cursor-outer.hovered {
    --size: 1em;
    --bg: rgba(0, 0, 0, 0.05);
  }

</style>