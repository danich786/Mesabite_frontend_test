"use client";

import { useState } from "react";
import styles from "./ordertype.module.css";
import { useRouter } from "next/navigation";

const OrderType = () => {
  const router = useRouter();

  const [orderType, setOrderType] = useState("Table");

  const continueOrder = (order) => {
    if (order == "Table") {
      router.push("order_type/table_order");
    } else if (order == "Delivery") {
      router.push("order_type/delivery");
    } else if (order == "Pickup") {
      router.push("order_type/pickup");
    } else if (order == "Reservation") {
      router.push("order_type/reserve_table");
    }
  };

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
        <div
          className={styles.optionContainer1}
          style={{
            backgroundColor: orderType == "Table" ? "#ffcd00" : "#fff6df",
          }}
        >
          <label className={styles.radioLabel}>
            <input
              className={styles.radioButton}
              type="radio"
              name="order_type"
              value="Table"
              onClick={(e) => setOrderType(e.target.value)}
              style={{ transform: "scale(1.2)", accentColor: "#852e2b" }}
              defaultChecked
            />
            Table Order
          </label>
        </div>
        <div
          className={styles.optionContainer1}
          style={{
            backgroundColor: orderType == "Delivery" ? "#ffcd00" : "#fff6df",
          }}
        >
          <label className={styles.radioLabel}>
            <input
              className={styles.radioButton}
              type="radio"
              name="order_type"
              value="Delivery"
              onClick={(e) => setOrderType(e.target.value)}
              style={{ transform: "scale(1.2)", accentColor: "#852e2b" }}
            />
            Delivery
          </label>
        </div>
        <div
          className={styles.optionContainer1}
          style={{
            backgroundColor: orderType == "Pickup" ? "#ffcd00" : "#fff6df",
          }}
        >
          <label className={styles.radioLabel}>
            <input
              className={styles.radioButton}
              type="radio"
              name="order_type"
              value="Pickup"
              onClick={(e) => setOrderType(e.target.value)}
              style={{ transform: "scale(1.2)", accentColor: "#852e2b" }}
            />
            Pick-up
          </label>
        </div>
        <div
          className={styles.optionContainer1}
          style={{
            backgroundColor: orderType == "Reservation" ? "#ffcd00" : "#fff6df",
          }}
        >
          <label className={styles.radioLabel}>
            <input
              className={styles.radioButton}
              type="radio"
              name="order_type"
              value="Reservation"
              onClick={(e) => setOrderType(e.target.value)}
              style={{ transform: "scale(1.2)", accentColor: "#852e2b" }}
            />
            Reserve a table
          </label>
        </div>

        <button
          onClick={() => continueOrder(orderType)}
          className={styles.btnLargeLongFillDefa}
        >
          <div className={styles.orderNowWrapper}>
            <b className={styles.orderNow}>Continue</b>
          </div>
        </button>
      </div>
    </div>
  );
};

export default OrderType;
