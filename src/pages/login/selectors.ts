import { RootState } from "../../redux/types";

export const getStateAuthError = (store: RootState) => store.appReducer.userAuthError;
export const getStateAuthLoading = (store: RootState) => store.appReducer.userAuthLoading;