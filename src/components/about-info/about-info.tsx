import Link from "next/link";
import Image from "next/image";

// SVG components for social icons
const TwitterIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    className="h-6 w-6 transition-all hover:h-8 hover:w-8"
    aria-hidden="true"
  >
    <path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z" />
  </svg>
);

const GithubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 32 32"
    className="h-6 w-6 transition-all hover:h-8 hover:w-8"
    aria-hidden="true"
  >
    <path d="M16,2.345c7.735,0,14,6.265,14,14-.002,6.015-3.839,11.359-9.537,13.282-.7,.14-.963-.298-.963-.665,0-.473,.018-1.978,.018-3.85,0-1.312-.437-2.152-.945-2.59,3.115-.35,6.388-1.54,6.388-6.912,0-1.54-.543-2.783-1.435-3.762,.14-.35,.63-1.785-.14-3.71,0,0-1.173-.385-3.85,1.435-1.12-.315-2.31-.472-3.5-.472s-2.38,.157-3.5,.472c-2.677-1.802-3.85-1.435-3.85-1.435-.77,1.925-.28,3.36-.14,3.71-.892,.98-1.435,2.24-1.435,3.762,0,5.355,3.255,6.563,6.37,6.913-.403,.35-.77,.963-.893,1.872-.805,.368-2.818,.963-4.077-1.155-.263-.42-1.05-1.452-2.152-1.435-1.173,.018-.472,.665,.017,.927,.595,.332,1.277,1.575,1.435,1.978,.28,.787,1.19,2.293,4.707,1.645,0,1.173,.018,2.275,.018,2.607,0,.368-.263,.787-.963,.665-5.719-1.904-9.576-7.255-9.573-13.283,0-7.735,6.265-14,14-14Z" />
  </svg>
);

/**
 * AboutInfo Component
 *
 * This component displays information about the creator,
 * including social media links and a brief description.
 */
const AboutInfo: React.FC = () => {
  return (
    <div className="flex w-fit items-center gap-2">
      {/* Social Media Links */}
      <div className="flex flex-col items-center justify-between">
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <SocialLink
              href="https://x.com/KaraBharat"
              icon={<TwitterIcon />}
              label="Twitter"
            />
            <SocialLink
              href="https://github.com/KaraBharat/react-full-stack-components"
              icon={<GithubIcon />}
              label="GitHub"
            />
          </div>
        </div>
      </div>

      {/* Creator Information */}
      <p className="flex items-center gap-1 text-sm text-muted-foreground">
        Built by
        <Link
          className="flex items-center gap-1 font-semibold text-secondary-foreground"
          href="https://www.bharatkara.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://www.bharatkara.com/images/logo-icon.png"
            alt=""
            width={20}
            height={20}
            className="h-5 w-5"
          />
          <span>Kara Bharat</span>
        </Link>
      </p>
    </div>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <div className="flex h-8 w-8 items-center justify-center">
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </Link>
  </div>
);

export default AboutInfo;
