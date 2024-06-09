import store from "./index";
import type { TAppActions } from "./store";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch<TReturn = void> = (action: TAppActions) => TReturn;