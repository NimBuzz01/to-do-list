import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ToggleTheme from "@/components/toggle-theme";
import { KeyProvider } from "@/contexts/key-context";

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
          <KeyProvider>
            <div className="bg-gradient-to-r from-[#93A5CF] to-[#E4EfE9] dark:from-[#09203F] dark:to-[#537895]">
              {children}
            </div>
            <ToggleTheme />
          </KeyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
