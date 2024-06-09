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
    isHaveResult: false
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
        }
    }
})

type TAppActionCreators = typeof appSlice.actions;
export type TAppActions = ReturnType<TAppActionCreators[keyof TAppActionCreators]>;
export const { setClubs, setClubsLoading, setReviews, setReviewsLoading, setSlides, setSlidesLoading, setCalcResults } = appSlice.actions;

export default appSlice.reducer;