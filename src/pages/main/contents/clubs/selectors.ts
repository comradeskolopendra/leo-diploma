import { RootState } from "../../../../redux/types";

export const getStateClubs = (store: RootState) => store.appReducer.clubs;
export const getStateClubsLoading = (store: RootState) => store.appReducer.clubsLoading;