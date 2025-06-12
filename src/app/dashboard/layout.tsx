import "../../app/globals.scss";
import type { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="fa" dir="rtl">
            <body>{children}</body>
        </html>
    );
}
