import type { Metadata } from "next";
import AppWalletProvider from "./components/AppWalletProvider";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWalletProvider>
            {children}
        </AppWalletProvider>
      </body>
    </html>
  );
}
