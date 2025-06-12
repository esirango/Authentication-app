"use client";
import styles from "./AuthForm.module.scss";
import Input from "./Input";
import Button from "./Button";
import { useState } from "react";
import { useRouter } from "next/navigation";

const phoneRegex = /^(\+98|0)?9\d{9}$/;

export default function AuthForm() {
    const [phone, setPhone] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!phoneRegex.test(phone)) {
            setError("شماره موبایل معتبر وارد کنید (مثال: 0912xxxxxxx)");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch(
                "https://randomuser.me/api/?results=1&nat=us"
            );
            const data = await res.json();
            const user = data.results[0];
            if (typeof window !== "undefined") {
                localStorage.setItem("user", JSON.stringify(user));
            }
            router.push("/dashboard");
        } catch (err) {
            setError("خطا در ورود. دوباره امتحان کنید.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <Input
                label="شماره موبایل"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="09121234567"
                error={!!error}
                type="tel"
            />
            {error && <div className={styles.error}>{error}</div>}
            <Button type="submit" disabled={loading}>
                {loading ? "در حال ورود..." : "ورود"}
            </Button>
        </form>
    );
}
