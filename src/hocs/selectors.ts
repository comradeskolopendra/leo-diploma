import { RootState } from "../redux/types";

export const getStateUserEmail = (store: RootState) => store.appReducer.userEmail;