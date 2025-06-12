"use client";

import styles from "./Dashboard.module.scss";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
    const router = useRouter();

    useEffect(() => {
        if (typeof window !== "undefined") {
            const user = localStorage.getItem("user");
            if (!user) {
                router.replace("/auth");
            }
        }
    }, []);

    return (
        <main className={styles.dashboard}>
            <div className={styles.card}>
                <h1>Welcome to the Dashboard 👋</h1>
            </div>
        </main>
    );
}
