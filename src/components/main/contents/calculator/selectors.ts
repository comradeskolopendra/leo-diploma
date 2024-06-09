import { RootState } from "../../../../redux/types";

export const getStateCalculatedResult = (state: RootState) => state.appReducer.results;
export const getStateIsHaveResult = (state: RootState) => state.appReducer.isHaveResult;