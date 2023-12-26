"use client";

import { useState } from "react";
import styles from "../reserve.module.css";

const Reserve = () => {
  const [textfieldRESTAURANTNAMEValue, setTextfieldRESTAURANTNAMEValue] =
    useState("");
  return (
    <div className={styles.reserve}>
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
        <b className={styles.reserveATable}>Enter your Information</b>
        <div className={styles.howManyPeopleAreComingParent}>
          <div className={styles.whenAreYou}>Your Full Name</div>
          <input
            className={styles.textfieldrestaurantname}
            type="text"
            value={textfieldRESTAURANTNAMEValue}
            onChange={(event) =>
              setTextfieldRESTAURANTNAMEValue(event.target.value)
            }
          />
        </div>
        <div className={styles.howManyPeopleAreComingParent}>
          <div className={styles.whenAreYou}>Your Phone Number</div>
          <input
            className={styles.textfieldrestaurantname}
            type="text"
            value={textfieldRESTAURANTNAMEValue}
            onChange={(event) =>
              setTextfieldRESTAURANTNAMEValue(event.target.value)
            }
          />
        </div>
        <div className={styles.howManyPeopleAreComingParent}>
          <div className={styles.whenAreYou}>Your Email Address (Optional)</div>
          <input
            className={styles.textfieldrestaurantname}
            type="text"
            value={textfieldRESTAURANTNAMEValue}
            onChange={(event) =>
              setTextfieldRESTAURANTNAMEValue(event.target.value)
            }
          />
        </div>
        <button className={styles.btnLargeLongFillDefa}>
          <div className={styles.reserveNowWrapper}>
            <b className={styles.reserveNow}>Reserve Now</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Reserve;
