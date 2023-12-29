import { useEffect } from "react";
import styles from "./item-filters.module.css";

const ItemFilters = ({ onClose }) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div className={styles.itemfilters} data-animate-on-scroll>
      <div className={styles.header}>
        <b className={styles.filterbytext}>Filter By</b>
        <img className={styles.crossbtnIcon} alt="" src="/crossbtn@2x.png" />
      </div>
      <div className={styles.divider}>
        <div className={styles.rectangle} />
      </div>
      <div className={styles.filter}>
        <div className={styles.filterdiv}>
          <div className={styles.filterbytext}>Vegan</div>
          <div className={styles.checkbox}>
            <img
              className={styles.roundedboxIcon}
              alt=""
              src="/roundedbox@2x.png"
            />
            <img className={styles.path2Icon} alt="" src="/path2@2x.png" />
          </div>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={styles.rectangle} />
      </div>
      <button className={styles.btnLargeLongFillDefa}>
        <div className={styles.applybtn}>
          <b className={styles.applytext}>Apply</b>
        </div>
      </button>
    </div>
  );
};

export default ItemFilters;
