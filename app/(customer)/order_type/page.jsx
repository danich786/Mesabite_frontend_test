"use client";

import { useState } from "react";
import styles from "./ordertype.module.css";

const OrderType = () => {
  const [orderType, setOrderType] = useState("Table");

  return (
    <div className={styles.landing}>
      <div className={styles.container1}>
        <img
          className={styles.logocafeIcon}
          alt=""
          src="/customer/logocafe@2x.png"
        />
        <img
          className={styles.artworkIcon}
          alt=""
          src="/customer/artwork@2x.png"
        />
      </div>
      <div className={styles.container2}>
        <div className={styles.selectlanguangecontainer}>
          <b className={styles.selectLanguage}>Select Language</b>
          <div className={styles.languagedropmenu}>
            <div className={styles.english}>English</div>
            <img
              className={styles.vectorIcon}
              alt=""
              src="/customer/vector@2x.png"
            />
          </div>
        </div>
        <b className={styles.selectOrderType}>Select Order type</b>
        <div className={styles.opetionconatiner1}>
          <label style={{ marginLeft: "30px" }}>
            <input
              className={styles.radiobutton}
              type="radio"
              name="order_type"
              value="Table"
              onClick={(e) => setOrderType(e.target.value)}
              style={{ accentColor: "#852e2b" }}
              defaultChecked
            />
            Table Order
          </label>
        </div>
        <div className={styles.opetionconatiner2}>
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/customer/OptionVector1.svg"
          />
          <button className={styles.delivery}>Delivery</button>
          <input className={styles.opetionconatiner2Child} type="radio" />
        </div>
        <div className={styles.opetionconatiner2}>
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/customer/OptionVector1.svg"
          />
          <div className={styles.pickUp}>Pick-up</div>
          <input className={styles.opetionconatiner2Child} type="radio" />
        </div>
        <div className={styles.opetionconatiner2}>
          <img
            className={styles.vectorIcon1}
            alt=""
            src="/customer/OptionVector1.svg"
          />
          <div className={styles.pickUp}>Reserve a table</div>
          <input className={styles.opetionconatiner2Child} type="radio" />
        </div>
        <button className={styles.btnLargeLongFillDefa}>
          <div className={styles.orderNowWrapper}>
            <b className={styles.orderNow}>{`Order Now `}</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderType;
