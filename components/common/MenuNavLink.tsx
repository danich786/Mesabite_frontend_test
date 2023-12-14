"use client";

import "./menu.css";
import Link from "next/link";
import cn from "classnames";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuLink } from "@/components/common";

interface Props {
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  href?: string;
  children: React.ReactNode;
  [rest: string]: any;
}

export default function MenuNavLink({
  isSelected,
  isMobile,
  isBanner,
  href,
  children,
  ...rest
}: Props) {
  const className = cn(
    rest.className,
    "text-white rounded-md px-3 py-2 font-medium",
    {
      "bg-gray-900": isSelected,
      "text-gray-300 hover:bg-gray-700 hover:text-white":
        !isSelected && !isBanner,
      "block text-base": isMobile,
      "text-sm": !isMobile,
      "text-gray-300": isBanner,
    }
  );

  const [open, setopen] = useState(false);
  const pathname = usePathname();

  if (!href) {
    return (
      <span className={className} role="button" onClick={rest.onClick}>
        {children}
      </span>
    );
  }

  const isSubSelected = (path: string) => (pathname === path ? true : false);

  const menuLinks = (isMobile: boolean) => (
    <>
      <MenuLink
        isSelected={isSubSelected(`${href}`)}
        isMobile={isMobile}
        // href={"${href}"}
      >
        Categories
      </MenuLink>

      <MenuLink
        isSelected={isSubSelected(`${href}/adds_on`)}
        isMobile={isMobile}
        href={`${href}/adds_on`}
      >
        Adds On
      </MenuLink>

      <MenuLink
        isSelected={isSubSelected(`${href}/availability`)}
        isMobile={isMobile}
        href={`${href}/availability`}
      >
        Availability
      </MenuLink>
    </>
  );

  return (
    <div className={open ? "menu-item-open" : "menu-item"}>
      <Link className={className} href={href} onClick={() => setopen(!open)}>
        {children}
      </Link>
      <div className="menu-subcat">{menuLinks(true)}</div>
    </div>
  );
}
