"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";
import styles from "./confirmation.module.css";

const Reserve3 = () => {
  const router = useRouter();

  const onSkipTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <div className={styles.reserve3}>
      <img className={styles.frameIcon} alt="" src="/customer/artwork@2x.png" />
      <div className={styles.yorTableIsReservedParent}>
        <b className={styles.yorTableIs}>Yor table is reserved!</b>
        <div className={styles.checkOutOurContainer}>
          <p className={styles.checkOutOur}>Check out our menu, order now,</p>
          <p className={styles.checkOutOur}>
            and your food will be ready when you arrive
          </p>
        </div>
      </div>
      <div className={styles.btnLargeLongFillDefaParent}>
        <button className={styles.btnLargeLongFillDefa}>
          <div className={styles.orderNowWrapper}>
            <b className={styles.orderNow}>{`Order Now `}</b>
          </div>
        </button>
        <b className={styles.skip} onClick={onSkipTextClick}>
          Skip
        </b>
      </div>
    </div>
  );
};

export default Reserve3;
