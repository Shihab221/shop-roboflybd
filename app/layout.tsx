import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/navbar";
import SideNavbar from "@/components/sideNavbar";
import { Poppins } from 'next/font/google';

const poppins = Poppins({ subsets: ['latin'],weight: ["100", "300", "400", "700", "900"], variable: '--font-poppins' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="font-poppins antialiased bg-white text-white "
      >
        
        <main className="bg-slate-950 font-poppins">
        <Navbar />
        <div className="flex flex-row w-full">
        <SideNavbar />
        {children}
        </div>
        <Footer />
      </main>
      </body>
    </html>
  );
}
