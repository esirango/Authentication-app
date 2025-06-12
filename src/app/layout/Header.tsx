"use client";
import { useTheme } from "../theme-context";
import styles from "./Header.module.scss";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <button
                className={`${styles.themeSwitch} ${
                    theme === "dark" ? styles.dark : ""
                }`}
                onClick={toggleTheme}
                aria-label="تغییر مود"
            >
                <span className={styles.icon}>
                    {theme === "light" ? (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <circle cx="12" cy="12" r="5" fill="#FFD600" />
                            <g stroke="#FFD600" strokeWidth="2">
                                <line x1="12" y1="2" x2="12" y2="5" />
                                <line x1="12" y1="19" x2="12" y2="22" />
                                <line x1="2" y1="12" x2="5" y2="12" />
                                <line x1="19" y1="12" x2="22" y2="12" />
                                <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
                                <line
                                    x1="17.66"
                                    y1="17.66"
                                    x2="19.78"
                                    y2="19.78"
                                />
                                <line
                                    x1="4.22"
                                    y1="19.78"
                                    x2="6.34"
                                    y2="17.66"
                                />
                                <line
                                    x1="17.66"
                                    y1="6.34"
                                    x2="19.78"
                                    y2="4.22"
                                />
                            </g>
                        </svg>
                    ) : (
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                                fill="#90caf9"
                                stroke="#90caf9"
                                strokeWidth="2"
                            />
                        </svg>
                    )}
                </span>
                <span className={styles.switchTrack}>
                    <span className={styles.switchThumb} />
                </span>
            </button>
            <div className={styles.logo}>
                <span>🦄</span>
                <span className={styles.title}>Authentication App</span>
            </div>
        </header>
    );
}
