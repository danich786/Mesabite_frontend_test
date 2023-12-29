"use client";

import styles from "../menu.module.css";
import { useState, useCallback } from "react";
import MenuDrawer from "./menu-drawer";
import PortalDrawer from "./portal-drawer";

export default function MenuDrawerhook(props) {
  const [isMenuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const openMenuDrawer = useCallback(() => {
    setMenuDrawerOpen(true);
  }, []);

  const closeMenuDrawer = useCallback(() => {
    setMenuDrawerOpen(false);
  }, []);

  return (
    <>
      <button className={styles.vectorWrapper} onClick={openMenuDrawer}>
        <img className={styles.vectorIcon} alt="" src="/menu/vector11.svg" />
      </button>

      {isMenuDrawerOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenuDrawer}
        >
          <MenuDrawer onClose={closeMenuDrawer} owner={props.owner} />
        </PortalDrawer>
      )}
    </>
  );
}
