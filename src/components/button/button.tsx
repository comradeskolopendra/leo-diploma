import { ButtonHTMLAttributes, FC, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children, type, className = "", onClick, disabled = false }) => {
    return (<button type={type} className={`${styles.button} ${className}`} onClick={onClick} disabled={disabled}>{children}</button>)
};

export default Button;