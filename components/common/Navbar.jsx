"use client";

import React, { useState } from "react";
import "./navbar.css";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

const Menu = () => (
  <>
    <Link href="/order">Order</Link>
    <Link href="/manage">Manage</Link>
    <Link href="/reach">Reach</Link>
    <Link href="/blog" style={{ marginLeft: "120px" }}>
      Blog
    </Link>
    <Link href="/story">Our Story</Link>
  </>
);

const NavComponent = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="container">
      <div className="links">
        <div className="links-logo">
          <Image src="/vector6@2x.png" width={50} height={40} alt="Logo" />
        </div>
        <Link href="./" className="brand">
          MESA BITES
        </Link>
        <div className="links-wrapper">
          <Menu />
        </div>
      </div>

      <Link href="/login" className="login-btn">
        <div className="login-p">
          <b className="login-text">Login</b>
        </div>
      </Link>

      <button className="start-now">
        <img className="vector-icon" alt="" src="/startNowBtn.png" />
        <b className="start-now-text">Start now</b>
      </button>

      <div className="nav-menu">
        {toggleMenu ? (
          <RiCloseLine
            // color="white"
            size={22}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            // color="white"
            size={22}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="nav-menu-wrapper">
            <div className="nav-menu-wrapper-links">
              <Menu />
              <div className="nav-menu-wrapper-button">
                <Link href="./login" type="button">
                  Login
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavComponent;
