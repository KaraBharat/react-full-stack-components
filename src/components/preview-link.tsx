import Link from "next/link";
import { ExternalLink } from "lucide-react";

/**
 * PreviewLink Component
 * Renders a link with an external link icon, styled as a button.
 */
interface PreviewLinkProps {
  href: string;
  title: string;
}

export const PreviewLink: React.FC<PreviewLinkProps> = ({ href, title }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-2 rounded-full bg-black px-4 py-2 backdrop-blur-lg backdrop-filter transition-all duration-300 hover:shadow-lg"
    aria-label={`${title} (opens in a new tab)`}
  >
    <span className="text-sm font-medium text-white group-hover:underline">
      {title}
    </span>
    <ExternalLink
      className="h-4 w-4 text-white opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
    />
  </Link>
);
