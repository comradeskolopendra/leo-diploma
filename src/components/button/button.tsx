import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, type, className = "", onClick }) => {

    return (<button type={type} className={`${styles.button} ${className}`} onClick={onClick}>{children}</button>)
};

export default Button;