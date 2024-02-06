import type { Metadata } from "next";
import { Sofia_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const sofia = Sofia_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio | FT Dev",
  description: "Portafolio de proyectos de FT Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <div className="max-w-full bg-gradient-to-r from-neutral-950 to-neutral-800">
        <Header />
        <body className={sofia.className}>{children}</body>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
