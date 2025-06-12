import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Authentication App | Home",
    description: "Authentication app for Dekamond",
};

import "./globals.scss";
import type { ReactNode } from "react";
import { ThemeProvider } from "./context/theme-context";
import Header from "./layout/Header";
import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body>
                <ThemeProvider>
                    <Header />
                    {children}
                </ThemeProvider>
                <Toaster
                    position="bottom-center"
                    toastOptions={{
                        style: {
                            backgroundColor: "var(--card-bg)",
                            color: "var(--text)",
                        },
                    }}
                />
            </body>
        </html>
    );
}
