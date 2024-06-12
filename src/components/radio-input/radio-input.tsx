import { InputHTMLAttributes, FC } from "react";

import styles from "./radio-input.module.css";

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
    labelTitle: string;
}

const RadioInput: FC<RadioInputProps> = ({ labelTitle, name, id, value, defaultChecked = false, onChange }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{labelTitle}</label>
            <input
                type="radio"
                className={styles.radio}
                name={name}
                id={id}
                value={value}
                defaultChecked={defaultChecked}
                onChange={onChange}
            />
        </div>
    )
}

export default RadioInput;