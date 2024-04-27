import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ToggleTheme from "@/components/toggle-theme";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "To do list",
  description: "To do list made using Nextjs 14",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={montserrat.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="bg-[#A3D8FF] dark:bg-slate-900">
            {children}
            <Footer />
            <Toaster />
          </div>
          <ToggleTheme />
        </ThemeProvider>
      </body>
    </html>
  );
}
