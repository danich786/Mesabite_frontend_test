"use client";

import { useRouter } from "next/navigation";
import styles from "./confirmation.module.css";

const Reserve3 = () => {
  const router = useRouter();

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
        <button
          onClick={() => {
            router.push("../../../menu/");
          }}
          className={styles.btnLargeLongFillDefa}
        >
          <div className={styles.orderNowWrapper}>
            <b className={styles.orderNow}>Order Now</b>
          </div>
        </button>
        <b
          className={styles.skip}
          onClick={() => {
            router.push("/");
          }}
        >
          Skip
        </b>
      </div>
    </div>
  );
};

export default Reserve3;
