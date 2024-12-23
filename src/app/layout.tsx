// External dependencies
import Link from "next/link";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HomeIcon } from "lucide-react";

// Styles
import "./globals.css";

// Internal components and providers
import { QueryProviders } from "@/providers/query.provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import AboutInfo from "@/components/about-info/about-info";

// Font configuration
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Components Built with React, ShadcnUI and TailwindCSS",
  description: "Ready to use react components for your next project",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * Root layout component that wraps the entire application
 * Provides necessary providers and global styling
 *
 * @param {RootLayoutProps} props - Component props
 * @returns {JSX.Element} The root layout structure
 */
export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en">
      <QueryProviders>
        <TooltipProvider>
          <body
            className={`${inter.className} antialiased`}
            // Add better accessibility support
            role="presentation"
          >
            <div className="absolute left-2 top-3 w-fit md:left-4 md:top-4">
              <Link href="/">
                <HomeIcon className="size-6"></HomeIcon>
              </Link>
            </div>
            <main>{children}</main>
            {/* About info section positioned absolutely */}
            <div
              className="absolute right-2 top-2 w-fit md:right-4 md:top-4"
              role="complementary"
              aria-label="About information"
            >
              <AboutInfo />
            </div>
          </body>
        </TooltipProvider>
      </QueryProviders>
    </html>
  );
}
