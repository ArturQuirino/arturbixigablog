import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Artur Bixiga",
  description: "Personal blog of Artur Bixiga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col bg-white dark:bg-black text-gray-900 dark:text-gray-100 antialiased`}>
        <Header />
        <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
