import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic"

export default function HomeLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Navbar />
          {children}
        </body>
      </html>
    );
  }
  