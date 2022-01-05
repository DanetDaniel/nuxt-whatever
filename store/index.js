export const state = () => ({
  isHovered: false,
  isMenuActive: false
});

export const mutations = {
  toggleIsHovered(state) {
    state.isHovered = !state.isHovered;
  },
  toggleMenuState(state) {
    state.isMenuActive = !state.isMenuActive;

    console.log(state.isMenuActive);
  }
}