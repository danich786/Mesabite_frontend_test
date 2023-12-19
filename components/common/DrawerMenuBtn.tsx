"use client";

import "./menu.css";
import cn from "classnames";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { DrawerLink } from "@/components/common";

interface Props {
  isSelected?: boolean;
  isMobile?: boolean;
  isBanner?: boolean;
  href?: string;
  children: React.ReactNode;
  [rest: string]: any;
}

export default function NavLink2({
  isSelected,
  isMobile,
  isBanner,
  href,
  children,
  ...rest
}: Props) {
  const className = cn(
    rest.className,
    "text-white rounded-md px-3 py-1 font-medium",
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

  const isSubSelected = (path: string) => (pathname === path ? true : false);

  const menuLinks = (isMobile: boolean) => (
    <>
      <DrawerLink
        isSelected={isSubSelected(`${href}`)}
        isMobile={isMobile}
        href={`${href}`}
      >
        Categories
      </DrawerLink>

      <DrawerLink
        isSelected={isSubSelected(`${href}/adds_on`)}
        isMobile={isMobile}
        href={`${href}/adds_on`}
      >
        Adds On
      </DrawerLink>

      <DrawerLink
        isSelected={isSubSelected(`${href}/availability`)}
        isMobile={isMobile}
        href={`${href}/availability`}
      >
        Availability
      </DrawerLink>
    </>
  );

  return (
    <div className={open ? "menu-item-open" : "menu-item"}>
      <div className={className} onClick={() => setopen(!open)}>
        {children}
      </div>
      <div className="menu-subcat">{menuLinks(true)}</div>
    </div>
  );
}
