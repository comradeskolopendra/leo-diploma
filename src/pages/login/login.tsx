import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import styles from "./login.module.css";

import { useNavigate } from "react-router-dom";
import Button from "../../components/button/button";
import TextInput from "../../components/text-input/text-input";
import { loginUser } from "../../firebase/helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserAuthError, setUserEmail } from "../../redux/store";
import { getStateAuthError, getStateAuthLoading } from "./selectors";

interface IFormData {
    email: string;
    password: string;
}

const FormLogin = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [formData, setFormData] = useState<IFormData>({
        email: "",
        password: ""
    });
    const [passwordVisible, setPasswordVisible] = useState<boolean>(false)
    const userAuthError = useAppSelector(getStateAuthError);
    const userAuthLoading = useAppSelector(getStateAuthLoading);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(setUserAuthError(""))
        const { type, info } = await loginUser(formData.email, formData.password);

        if (type === "success") {
            dispatch(setUserEmail(info));
            navigate("/admin-panel")
        } else {
            dispatch(setUserAuthError(info))
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData((prevState) => ({ ...prevState, [name]: value }))
    }

    const handleSwitchPasswordVisible = () => {
        setPasswordVisible(prevState => !prevState);
    };

    useEffect(() => {
        console.log(userAuthLoading);
    }, [])

    return (
        <main className={styles.login}>
            <h2 className={styles.title}>Вход</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <TextInput
                    type="text"
                    placeholder={"Email"}
                    value={formData.email}
                    onChange={handleChange}
                    name="email"
                />
                <TextInput
                    type={passwordVisible ? "text" : "password"}
                    placeholder={"Пароль"}
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                />
                <Button
                    className={styles.buttonShowPassword}
                    type="button"
                    onClick={handleSwitchPasswordVisible}
                >{passwordVisible ? "Скрыть" : "Показать"}</Button>

                {userAuthError && <p className={styles.error}>{userAuthError}</p>}

                <Button className={styles.button} type="submit" disabled={userAuthLoading}>Войти</Button>
            </form>
        </main>
    )
};

export default FormLogin;