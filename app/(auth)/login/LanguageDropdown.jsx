"use client";

import styles from "./dropdown.module.css";
import { useState, useCallback } from "react";
import Image from "next/image";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Menu = () => (
  <>
    <div className={styles.english}>
      <Image
        className={styles.englishIcon}
        alt=""
        src="/authentication/image3@2x.png"
        width={24}
        height={24}
      />
      <div className={styles.espaol}>English</div>
    </div>
    <div className={styles.english}>
      <Image
        className={styles.englishIcon}
        alt=""
        src="/authentication/spanish@2x.png"
        width={24}
        height={24}
      />
      <div className={styles.espaol}>Español</div>
    </div>
    <div className={styles.english}>
      <Image
        className={styles.englishIcon}
        alt=""
        src="/authentication/chines@2x.png"
        width={24}
        height={24}
      />
      <div className={styles.espaol}>普通话</div>
    </div>
    <div className={styles.english}>
      <Image
        src="/authentication/france-1@2x.png"
        width={24}
        height={24}
        alt=""
      />
      <div className={styles.espaol}>Français</div>
    </div>
    <div className={styles.english}>
      <Image
        className={styles.englishIcon}
        alt=""
        src="/authentication/deutsch@2x.png"
        width={24}
        height={24}
      />
      <div className={styles.espaol}>Deutsch</div>
    </div>
  </>
);

export default function LanguageDropdown() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="languageBtnDiv">
      {toggleMenu ? (
        <button
          className={styles.languageBtn}
          onClick={() => setToggleMenu(false)}
        >
          <Image
            className={styles.languageBtnIcon}
            alt=""
            src="/authentication/image3@2x.png"
            width={26}
            height={26}
          />
          <KeyboardArrowUpIcon />
        </button>
      ) : (
        <button
          className={styles.languageBtn}
          onClick={() => setToggleMenu(true)}
        >
          <Image
            className={styles.languageBtnIcon}
            alt=""
            src="/authentication/image3@2x.png"
            width={26}
            height={26}
          />
          <KeyboardArrowDownIcon />
        </button>
      )}
      {toggleMenu && (
        <div className={styles.languageMenu}>
          <Menu />
        </div>
      )}
    </div>
  );
}
