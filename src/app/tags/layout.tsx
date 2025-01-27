import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const dynamic = "force-dynamic"

export default function TagsLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    );
  }
  