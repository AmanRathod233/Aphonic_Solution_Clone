import type { Metadata } from "next";
import "./globals.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

export const metadata: Metadata = {
  title: "Best Web Design and Web Development Company in India | Aphonic Solutions",
  description: "Aphonic Solutions is a leading web design and development company in India, specializing in creating high-quality, user-friendly websites and applications. Our team of experts is dedicated to delivering innovative solutions that meet the unique needs of our clients. Whether you need a simple website or a complex web application, we have the skills and experience to help you succeed online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
