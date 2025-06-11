import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Firaol Admasu | Portfolio",
  description:
    "Welcome to my developer portfolio showcasing my projects and skills.",
  icons: {
    icon: "/favicon.ico", // or "/favicon.png", depending on your file
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
