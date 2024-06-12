import { FC, InputHTMLAttributes } from "react";

import styles from "./text-input.module.css";

const TextInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({
    placeholder,
    name,
    type,
    className = "",
    value,
    onChange
}) => {
    return <input placeholder={placeholder} name={name} type={type} className={`${className} ${styles.input}`} value={value} onChange={onChange} />
}

export default TextInput;