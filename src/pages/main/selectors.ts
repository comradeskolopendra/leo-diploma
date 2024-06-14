import { RootState } from "../../redux/types";

export const getStateIsContentLoading = (store: RootState) => store.appReducer.isContentLoading;