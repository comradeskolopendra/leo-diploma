import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { DocumentData } from "firebase/firestore";

interface ICalcResults {
    first: number;
    second: number;
    third: number;
    losingPerMonth: number;
    normalPerDay: number;
    error: string;
}

interface IInitialState {
    clubs: DocumentData[];
    reviews: DocumentData[];
    slides: DocumentData[];

    results: ICalcResults;
    isHaveResult: boolean;
    isContentLoading: boolean;

    userEmail: string;
    userAuthError: string;
    userAuthLoading: boolean;
}

const initialState: IInitialState = {
    clubs: [],
    reviews: [],
    slides: [],

    results: {
        first: 0,
        second: 0,
        third: 0,
        losingPerMonth: 0,
        normalPerDay: 0,
        error: ""
    },
    isHaveResult: false,
    isContentLoading: false,

    userEmail: "",
    userAuthError: "",
    userAuthLoading: false
}

const appSlice = createSlice({
    name: "app-slice",
    initialState: initialState,
    reducers: {
        setClubs(state, action: PayloadAction<DocumentData[]>) {
            state.clubs = action.payload;

            return state;
        },
        setReviews(state, action: PayloadAction<DocumentData[]>) {
            state.reviews = action.payload;

            return state;
        },
        setSlides(state, action: PayloadAction<DocumentData[]>) {
            state.slides = action.payload;

            return state;
        },
        setCalcResults(state, action: PayloadAction<ICalcResults>) {
            state.results = action.payload;
            state.isHaveResult = true;

            return state;
        },
        setCalcError(state, action: PayloadAction<string>) {
            state.results.error = action.payload;

            return state;
        },
        setUserEmail(state, action: PayloadAction<string>) {
            state.userEmail = action.payload;
            state.userAuthError = "";
            state.userAuthLoading = false;

            return state;
        },
        setUserAuthError(state, action: PayloadAction<string>) {
            state.userEmail = "";
            state.userAuthError = action.payload;
            state.userAuthLoading = false;

            return state;
        },
        clearUserInfo(state) {
            state.userEmail = "";

            return state;
        },
        setContentLoading(state, action: PayloadAction<boolean>) {
            state.isContentLoading = action.payload;

            return state;
        }
    }
})

type TAppActionCreators = typeof appSlice.actions;
export type TAppActions = ReturnType<TAppActionCreators[keyof TAppActionCreators]>;
export const {
    setClubs,
    setReviews,
    setSlides,
    setCalcResults,
    setCalcError,
    setUserAuthError,
    setUserEmail,
    clearUserInfo,
    setContentLoading
} = appSlice.actions;

export default appSlice.reducer;