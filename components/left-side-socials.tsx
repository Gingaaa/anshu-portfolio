import { siteConfig } from "@/config/site";
import Link from "next/link";
import { IconType } from "react-icons";

export default function LeftSideSocials() {
  const socialLinks = [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.x,
    siteConfig.links.email,
  ];
  return (
    <div className="fixed left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
      {socialLinks.map((link) => {
        const Icon = link.icon as IconType;
        return (
          <Link
            key={link.label}
            target="_blank"
            className="group rounded-full bg-primary/10 p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary"
            href={link.url}
          >
            <Icon />
          </Link>
        );
      })}
    </div>
  );
}
