import { RootState } from "../../../Store/store.interfaces";

export const selectAnimationLoading = (state: RootState) =>
  state.app.isLoadingAnimation;
