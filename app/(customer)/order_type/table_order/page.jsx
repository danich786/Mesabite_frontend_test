"use client";

import { useState } from "react";
import styles from "./tableorder.module.css";
import { useRouter } from "next/navigation";

const Landing2 = () => {
  const router = useRouter();

  const [table_no, setTableNo] = useState("");

  const orderNow = (table_no) => {
    if (table_no == "") {
      alert("Please enter your table number.");
    } else {
      router.push(`/menu/${table_no}`);
    }
  };

  return (
    <div className={styles.landing2}>
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
        <b className={styles.tableOrder}>Table Order</b>
        <div className={styles.tableNumberParent}>
          <div className={styles.tableNumber}>Table Number</div>
          <div className={styles.textfieldrestaurantnameParent}>
            <input
              className={styles.textfieldrestaurantname}
              type="text"
              name="table_number"
              value={table_no}
              onChange={(event) => setTableNo(event.target.value)}
              required
            />
            <div className={styles.tableOrder}>0/50</div>
          </div>
        </div>
        <img className={styles.frameIcon} alt="" src="/customer/frame@2x.png" />
        <button
          onClick={() => orderNow(table_no)}
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

export default Landing2;
