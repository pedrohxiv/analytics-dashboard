import { Inter } from "next/font/google";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body className={`${font.className} dark:bg-[#020817]`}>{children}</body>
    </html>
  );
};

export default RootLayout;
