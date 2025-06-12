"use client";

import AuthForm from "@/app/auth/AuthForm";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthPage() {
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            router.replace("/dashboard");
        }
    }, []);

    return (
        <main
            style={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <AuthForm />
        </main>
    );
}
