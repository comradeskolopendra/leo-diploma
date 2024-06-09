import { RootState } from "../../../../redux/types";

export const getStateSlides = (store: RootState) => store.appReducer.slides;
export const getStateSlidesLoading = (store: RootState) => store.appReducer.slidesLoading;