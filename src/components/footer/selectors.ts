import { RootState } from "../../redux/types";

const getStateUserEmail = (store: RootState) => store.appReducer.userEmail;