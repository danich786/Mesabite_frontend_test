"use client";
// Using tailwind CSS Navbar Component
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import StoreIcon from "@mui/icons-material/Store";
import PaymentsIcon from "@mui/icons-material/Payments";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import { NavLink, MenuNavLink } from "@/components/common";

export default function Navbar2() {
  const pathname = usePathname();

  const isSelected = (path: string) => (pathname === path ? true : false);

  const myLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected("/orders")}
        isMobile={isMobile}
        href="/orders"
      >
        <ReceiptLongIcon sx={{ pr: 1 }} />
        Orders
      </NavLink>

      <MenuNavLink
        isSelected={isSelected("/menus")}
        isMobile={isMobile}
        href="/menus"
      >
        <RestaurantMenuIcon sx={{ pr: 1 }} />
        Menus
        <KeyboardArrowDownIcon />
      </MenuNavLink>

      <NavLink
        isSelected={isSelected("/reports")}
        isMobile={isMobile}
        href="/reports"
      >
        <AssessmentIcon sx={{ pr: 1 }} />
        Reports
      </NavLink>

      <NavLink
        isSelected={isSelected("/customers")}
        isMobile={isMobile}
        href="/customers"
      >
        <PeopleAltIcon sx={{ pr: 1 }} />
        Customers
      </NavLink>

      <NavLink
        isSelected={isSelected("/marketing")}
        isMobile={isMobile}
        href="/marketing"
      >
        <StoreIcon sx={{ pr: 1 }} />
        Marketing
      </NavLink>

      <NavLink
        isSelected={isSelected("/payments")}
        isMobile={isMobile}
        href="/payments"
      >
        <PaymentsIcon sx={{ pr: 1 }} />
        Payments
      </NavLink>

      <NavLink
        isSelected={isSelected("/settings")}
        isMobile={isMobile}
        href="/settings"
      >
        <SettingsIcon sx={{ pr: 1 }} />
        Settings
      </NavLink>

      <NavLink
        isSelected={isSelected("/support")}
        isMobile={isMobile}
        href="/support"
      >
        <HelpOutlineIcon sx={{ pr: 1 }} />
        Support
      </NavLink>
    </>
  );

  return (
    <nav>
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div
              className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"
              style={{ backgroundColor: "#fbcb04" }}
            >
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Button to open Sidebar in Mobile View */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Desktop Navbar */}
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <NavLink href="/" isBanner>
                      Mesabite
                    </NavLink>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">{myLinks(false)}</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Sidebar */}
            <Disclosure.Panel className="sm:hidden">
              <div
                className="space-y-1 px-2 pb-3 pt-2"
                style={{ backgroundColor: "#8d3a36" }}
              >
                {myLinks(true)}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </nav>
  );
}
