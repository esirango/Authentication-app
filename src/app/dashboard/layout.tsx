import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
    title: "Authentication App | Dashboard",
    description: "Authentication app for Dekamond | Dashboard page",
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return children;
}
