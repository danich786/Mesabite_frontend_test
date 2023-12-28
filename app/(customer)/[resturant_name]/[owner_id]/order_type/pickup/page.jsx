"use client";

import styles from "./pickup.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Pickup = () => {
  const router = useRouter();
  const [pickup_time, setPickupTime] = useState();

  const orderNow = (pickup_time) => {
    if (pickup_time == "") {
      alert("Please enter the time at which you will pickup your order.");
    } else {
      router.push(`/menu/${table_no}`);
    }
  };

  return (
    <div className={styles.landing3}>
      <div className={styles.container1}>
        <img
          className={styles.logocafeIcon}
          alt=""
          src="/customer/logocafe@2x.png"
        />
        <div className={styles.extraSettingsParent}>
          <b className={styles.extraSettings}>Extra Settings</b>
          <img
            className={styles.imageIcon}
            alt=""
            src="/customer/image@2x.png"
          />
        </div>
      </div>
      <div className={styles.container2}>
        <b className={styles.pickup}>Pickup</b>
        <div className={styles.tableNumberParent}>
          <div className={styles.tableNumber}>Table Number</div>
          <div className={styles.languagedropmenuParent}>
            <div className={styles.languagedropmenu}>
              <div className={styles.english}>Time</div>

              <img
                className={styles.vectorIcon}
                alt=""
                src="/customer/vector@2x.png"
              />
            </div>
            <div className={styles.minutesToPick}>
              minutes to pick the order
            </div>
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="/customer/frame@2x.png" />
        <button
          onClick={() => orderNow(pickup_time)}
          className={styles.btnLargeLongFillDefa}
        >
          <div className={styles.orderNowWrapper}>
            <b className={styles.orderNow}>{`Order Now `}</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pickup;
