import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Authentication App | Auth",
    description: "Authentication app for Dekamond | Auth page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}
