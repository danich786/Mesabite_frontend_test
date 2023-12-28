"use client";

import { useState } from "react";
import styles from "./delivery.module.css";

const Delivery = () => {
  const [languageDropmenuValue, setLanguageDropmenuValue] = useState("");
  return (
    <div className={styles.delivery}>
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
        <b className={styles.delivery1}>Delivery</b>
        <div className={styles.yourStreetAddressParent}>
          <div
            className={styles.yourStreetAddress}
          >{`Your Street Address `}</div>
          <div className={styles.languagedropmenuWrapper}>
            <div className={styles.languagedropmenu}>
              <img
                className={styles.frameIcon}
                alt=""
                src="/customer/frame1@2x.png"
              />
              <div className={styles.carrierSmith}>{`13 Carrier Smith `}</div>
            </div>
          </div>
        </div>
        <div className={styles.yourStreetAddressParent}>
          <div className={styles.yourStreetAddress}>Floor, door, etc</div>
          <div className={styles.languagedropmenuWrapper}>
            <input
              className={styles.languagedropmenu1}
              placeholder="Bajo 3"
              type="text"
              value={languageDropmenuValue}
              onChange={(event) => setLanguageDropmenuValue(event.target.value)}
            />
          </div>
        </div>
        <img
          className={styles.frameIcon1}
          alt=""
          src="/customer/frame@2x.png"
        />
        <button className={styles.btnLargeLongFillDefa}>
          <div className={styles.orderNowWrapper}>
            <b className={styles.orderNow}>{`Order Now `}</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Delivery;
