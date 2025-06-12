import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication App | Home",
    description: "Authentication app for Dekamond",
};

import "./globals.scss";
import type { ReactNode } from "react";
import { ThemeProvider } from "./context/theme-context";
import Header from "./layout/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
