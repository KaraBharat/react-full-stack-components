// External dependencies
import { type FC } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

/**
 * Props interface for the PreviewLink component
 * @interface PreviewLinkProps
 * @property {string} href - The URL the link points to
 * @property {string} title - The text to display in the link
 */
interface PreviewLinkProps {
  href: string;
  title: string;
}

/**
 * PreviewLink Component
 *
 * Renders an accessible external link styled as a button with an icon
 * indicating it opens in a new tab. Includes hover effects and proper
 * accessibility attributes.
 *
 * @param {PreviewLinkProps} props - Component props
 * @returns {JSX.Element} Rendered link component
 */
export const PreviewLink: FC<PreviewLinkProps> = ({ href, title }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center space-x-2 rounded-full bg-black px-4 py-2 backdrop-blur-lg backdrop-filter transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
    aria-label={`${title} (opens in a new tab)`}
    role="link"
  >
    {/* Link text with hover effect */}
    <span
      className="text-sm font-medium text-white group-hover:underline"
      aria-hidden="false"
    >
      {title}
    </span>

    {/* External link icon */}
    <ExternalLink
      className="h-4 w-4 text-white opacity-70 transition-opacity duration-300 group-hover:opacity-100"
      aria-hidden="true"
      role="img"
      aria-label="External link indicator"
    />
  </Link>
);
