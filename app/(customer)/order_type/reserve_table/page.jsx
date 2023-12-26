"use client";

import { useState } from "react";
import styles from "./reserve.module.css";

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
        <b className={styles.reserveATable}>Reserve a table</b>
        <div className={styles.whenAreYouComingParent}>
          <div className={styles.whenAreYou}>When Are you coming?</div>
          <div className={styles.languagedropmenuWrapper}>
            <div className={styles.languagedropmenu}>
              <div className={styles.today}>Today</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/customer/vector@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.atWhichClockParent}>
          <div className={styles.whenAreYou}>At Which Clock ?</div>
          <div className={styles.languagedropmenuWrapper}>
            <div className={styles.languagedropmenu}>
              <div className={styles.today}>8 : 30</div>
              <img
                className={styles.vectorIcon}
                alt=""
                src="/customer/vector@2x.png"
              />
            </div>
          </div>
        </div>
        <div className={styles.howManyPeopleAreComingParent}>
          <div className={styles.whenAreYou}>How Many People Are Coming?</div>
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
