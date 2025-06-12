import "./globals.scss";
import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-context";
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
