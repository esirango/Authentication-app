"use client";
import { useTheme } from "./theme-context";

export default function ThemeSwitcher() {
    const { theme, toggleTheme } = useTheme();
    return (
        <button onClick={toggleTheme} style={{ marginBottom: "1.5rem" }}>
            {theme === "light" ? "فعال‌سازی دارک مود" : "فعال‌سازی لایت مود"}
        </button>
    );
}
