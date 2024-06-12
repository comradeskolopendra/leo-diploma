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
    clubsLoading: boolean;

    reviews: DocumentData[];
    reviewsLoading: boolean;

    slides: DocumentData[];
    slidesLoading: boolean;

    results: ICalcResults;
    isHaveResult: boolean;

    userEmail: string;
    userAuthError: string;
    userAuthLoading: boolean;
}

const initialState: IInitialState = {
    clubs: [],
    clubsLoading: false,

    reviews: [],
    reviewsLoading: false,

    slides: [],
    slidesLoading: false,

    results: {
        first: 0,
        second: 0,
        third: 0,
        losingPerMonth: 0,
        normalPerDay: 0,
        error: ""
    },
    isHaveResult: false,

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
            state.clubsLoading = false;

            return state;
        },
        setClubsLoading(state) {
            state.clubsLoading = true;

            return state;
        },
        setReviews(state, action: PayloadAction<DocumentData[]>) {
            state.reviews = action.payload;
            state.reviewsLoading = false;

            return state;
        },
        setReviewsLoading(state) {
            state.reviewsLoading = true;

            return state;
        },
        setSlides(state, action: PayloadAction<DocumentData[]>) {
            state.slides = action.payload;
            state.slidesLoading = false;

            return state;
        },
        setSlidesLoading(state) {
            state.slidesLoading = true;

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
        setUserAuthLoading(state, action: PayloadAction<string>) {
            state.userAuthError = "";
            state.userAuthLoading = true;

            return state;
        },
        clearUserInfo(state) {
            state.userEmail = "";

            return state;
        }
    }
})

type TAppActionCreators = typeof appSlice.actions;
export type TAppActions = ReturnType<TAppActionCreators[keyof TAppActionCreators]>;
export const {
    setClubs,
    setClubsLoading,
    setReviews,
    setReviewsLoading,
    setSlides,
    setSlidesLoading,
    setCalcResults,
    setCalcError,
    setUserAuthError,
    setUserEmail,
    setUserAuthLoading,
    clearUserInfo
} = appSlice.actions;

export default appSlice.reducer;