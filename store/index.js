export const state = () => ({
  isHovered: false
});

export const mutations = {
  toggleIsHovered(state) {
    state.isHovered = !state.isHovered;

    console.log(state.isHovered);
  }
}