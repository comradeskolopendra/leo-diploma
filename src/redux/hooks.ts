import { useSelector as selectorHook, useDispatch as dispatchHook, TypedUseSelectorHook } from "react-redux";
import { AppDispatch, RootState } from "./types";

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useAppDispatch: () => AppDispatch = dispatchHook;