import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./firebase";

import { formatErrorRu } from "../helpers";

import type { ILoginUserReturn } from "./types";

export const loginUser = async (email: string, password: string): Promise<ILoginUserReturn> => {
    try {
        const req = signInWithEmailAndPassword(auth, email, password);
        const response = await req;

        return { type: "success", info: response.user.email! };
    } catch (error: any) {
        return { type: "error", info: formatErrorRu(error.code) };
    }
}