import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { QueryProviders } from "@/providers/query.provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import AboutInfo from "@/components/about-info/about-info";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Components Built with React, ShadcnUI and TailwindCSS",
  description: "Ready to use react components for your next project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <QueryProviders>
        <TooltipProvider>
          <body className={`${inter.className} antialiased`}>
            {children}
            <div className="absolute right-4 top-2 w-fit">
              <AboutInfo />
            </div>
          </body>
        </TooltipProvider>
      </QueryProviders>
    </html>
  );
}
