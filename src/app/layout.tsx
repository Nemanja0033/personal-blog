import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blog | Nemanja Antonijevic",
  description: "Nemanja Antonijevic's personal blog website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
