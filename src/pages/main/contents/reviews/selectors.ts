import { RootState } from "../../../../redux/types";

export const getStateReviews = (store: RootState) => store.appReducer.reviews;