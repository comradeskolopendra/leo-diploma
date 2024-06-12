import { RootState } from "../../../../redux/types";

export const getStateReviews = (store: RootState) => store.appReducer.reviews;
export const getStateReviewsLoading = (store: RootState) => store.appReducer.reviewsLoading