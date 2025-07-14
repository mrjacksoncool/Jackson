import { Gelasio } from "next/font/google";
import "./globals.css";

const gelasio = Gelasio({
  variable: "--font-gelasio",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio V.1",
  description: "Mojela's Portfolio V.1",
  keywords: ["Portfolio", "Mojela", "Frontend", "Developer"],
  authors: [{ name: "Mojela" }, { name: "Mojela", url: "https://mojela.online" }],
  creator: "Mojela",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
    shortcut: "/icon1.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gelasio.className}>
        {children}
      </body>
    </html>
  );
}
