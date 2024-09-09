import { LinkProps, Link as _Link } from "@nextui-org/react";
import NextLink from "next/link";

export default function Link({
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  href: LinkProps["href"];
  color?: LinkProps["color"];
  size?: LinkProps["size"];
  onClick?: LinkProps["onClick"];
}) {
  return (
    <_Link as={NextLink} {...props}>
      {children}
    </_Link>
  );
}
