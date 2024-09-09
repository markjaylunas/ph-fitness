"use client";

import { routesConfig } from "@/lib/config";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "../ui/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const onClose = () => setIsMenuOpen(false);

  return (
    <Navbar
      shouldHideOnScroll
      disableAnimation
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link href="/" className="text-foreground">
            <p className="font-bold text-inherit ml-2">
              <span className="text-primary-500">PH</span>
              &nbsp;
              <span className="text-secondary-100">Fitness</span>
            </p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex gap-4 font-light text-sm"
        justify="end"
      >
        {routesConfig.mainNav.map((item, index) => (
          <NavbarItem
            key={`${item.title}-${index}`}
            isActive={item.href === pathname}
          >
            <Link color="foreground" href={item.href}>
              {item.title}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {routesConfig.mainNav.map((item, index) => (
          <NavbarMenuItem key={`${item.title}-${index}`}>
            <Link
              className="w-full"
              color="foreground"
              href={item.href}
              size="lg"
              onClick={onClose}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
