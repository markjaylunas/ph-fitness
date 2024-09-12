import Logo from "@/app/logo.svg";
import { cn } from "@/lib/utils";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
} from "@tabler/icons-react";
import Image from "next/image";
import { ReactNode } from "react";
import Link from "../ui/link";

const sitemapLinkList = [
  {
    name: "About Us",
    href: "/about-us",
  },
  {
    name: "Promos",
    href: "/promos",
  },
  {
    name: "Help Center",
    href: "/help-center",
  },
];

const supportLinkList = [
  {
    name: "FAQ",
    href: "/faq",
  },
  {
    name: "Support Center",
    href: "/support-center",
  },
];
const socialLinkList = [
  {
    name: "Facebook",
    icon: <IconBrandFacebookFilled stroke={1} />,
    href: "#",
  },
  {
    name: "Instagram",
    icon: <IconBrandInstagram stroke={1} />,
    href: "#",
  },
];

export default function Footer() {
  return (
    <footer>
      <div className="max-w-screen-xl mx-auto flex justify-between gap-8 flex-wrap px-4 sm:px-0 py-12">
        <div className="flex flex-col max-w-40">
          <div className="flex gap-2 items-center">
            <Image
              src={Logo}
              alt="PH Fitness Logo"
              className="size-12"
              unoptimized
            />
            <p className="font-medium">PH Fitness</p>
          </div>

          <p className="text-foreground-200 text-tiny">
            Embark on a transformative fitness journey tailored just for you
          </p>
        </div>

        <div className="flex gap-12 sm:gap-24 flex-wrap">
          <LinkList category="Sitemap" linkList={sitemapLinkList} />
          <LinkList category="Support" linkList={supportLinkList} />
          <LinkList
            category="Social Media"
            linkList={socialLinkList}
            isHorizontal
          />
        </div>
      </div>

      <div className="border-t border-foreground-300" />

      <div className="flex justify-between items-center max-w-screen-xl mx-auto py-4">
        <p className="text-sm text-foreground-400">&copy;&nbsp;PH Fitness</p>
        <div className="space-x-4">
          <Link href="/term-of-use" className="text-sm text-foreground-400">
            Term of Use
          </Link>
          <Link href="/privacy-policy" className="text-sm text-foreground-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

type Link = { name: string; href: string; icon?: ReactNode };

type LinkListProps = {
  category: string;
  linkList: Link[];
  isHorizontal?: boolean;
};

const LinkList = ({ category, linkList, isHorizontal }: LinkListProps) => {
  return (
    <div>
      <p className="font-medium">{category}</p>

      <ul
        className={cn(
          "flex gap-2 mt-2",
          isHorizontal ? "flex-row" : "flex-col"
        )}
      >
        {linkList.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className="text-foreground-200 text-xs">
              {link.icon ?? link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
