import styles from "./Input.module.scss";
import React from "react";

type Props = {
    label?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: boolean;
    type?: string;
};

export default function Input({
    label,
    value,
    onChange,
    placeholder,
    error,
    type = "text",
}: Props) {
    return (
        <div className={styles.inputGroup}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                className={`${styles.input} ${error ? styles.errorInput : ""}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                dir="ltr"
            />
        </div>
    );
}
