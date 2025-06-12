import styles from "./Button.module.scss";
import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: Props) {
    return (
        <button className={styles.button} {...props}>
            {props.children}
        </button>
    );
}
