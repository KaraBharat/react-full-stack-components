import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { QueryProviders } from "@/providers/query.provider";
import { TooltipProvider } from "@/components/ui/tooltip";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Multi Select Combo Box",
  description:
    "This combo box allows you to select multiple products from a list Start typing to search and make your selections.",
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
          <body className={`${inter.className} antialiased`}>{children}</body>
        </TooltipProvider>
      </QueryProviders>
    </html>
  );
}
