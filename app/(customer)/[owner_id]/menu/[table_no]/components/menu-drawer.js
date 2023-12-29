import { useEffect } from "react";
import CrossSign from "./cross-sign";
import styles from "./menu-drawer.module.css";

const MenuDrawer = ({ onClose, owner }) => {
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
    <>
      <div className={styles.menuDrawer} data-animate-on-scroll>
        <div className={styles.frame}>
          <CrossSign onClose={onClose} />
        </div>
        <div className={styles.logoParent}>
          <img className={styles.logoIcon} alt="" src="/menu/logo@2x.png" />
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.startAGroup}>Start A Group order</div>
              </div>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.startAGroup}>Leave A Review</div>
              </div>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.startAGroup}>Learn More about us</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.calSmithTarragonaContainer}>
                  <p className={styles.calSmithTarragona}>
                    {owner.resturant_name}
                  </p>
                </div>
              </div>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.calSmithTarragonaContainer}>
                  <p className={styles.calSmithTarragona}>
                    13 Cal Smith, Tarragona,
                  </p>
                </div>
              </div>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.calSmithTarragonaContainer}>
                  {owner.phone_no}
                </div>
              </div>
              <div className={styles.startAGroupOrderWrapper}>
                <div className={styles.calSmithTarragonaContainer}>
                  {owner.email}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuDrawer;
