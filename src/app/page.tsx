"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
    const router = useRouter();

    useEffect(() => {
        if (localStorage.getItem("user")) {
            router.replace("/dashboard");
        } else {
            router.replace("/auth");
        }
    }, []);
    return <></>;
}
