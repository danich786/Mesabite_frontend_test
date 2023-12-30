"use client";

import styles from "../customer-items-page.module.css";
import { useState, useCallback } from "react";
import ItemFilters from "./item-filters";
import PortalDrawer from "./portal-drawer";

export default function FilterDrawer() {
  const [isMenueFilltersOpen, setMenueFilltersOpen] = useState(false);

  const openMenueFillters = useCallback(() => {
    setMenueFilltersOpen(true);
  }, []);

  const closeMenueFillters = useCallback(() => {
    setMenueFilltersOpen(false);
  }, []);

  return (
    <>
      <button
        className={styles.filterbtn}
        name="filterbtn"
        onClick={openMenueFillters}
      >
        <img
          className={styles.filtericon}
          alt=""
          src="/menu/category/filtericon@2x.png"
        />
        <div className={styles.appliedfiltersdiv}>
          <img
            className={styles.filterboxIcon}
            alt=""
            src="/menu/category/filterbox@2x.png"
          />
          <div className={styles.filtersnum}>4</div>
        </div>
      </button>

      {isMenueFilltersOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Bottom"
          onOutsideClick={closeMenueFillters}
        >
          <ItemFilters onClose={closeMenueFillters} />
        </PortalDrawer>
      )}
    </>
  );
}
