"use client";

import { useState } from "react";
import styles from "../reserve.module.css";
import { useRouter } from "next/navigation";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const Reserve = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  const reserveNow = () => {
    router.push("./enter_info/confirmation");
  };

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
            className={styles.peopleCount}
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            autoComplete="name"
          />
        </div>
        <div className={styles.howManyPeopleAreComingParent}>
          <div className={styles.whenAreYou}>Your Phone Number</div>
          <PhoneInput
            defaultCountry="es"
            name="phone_no"
            value={phone_no}
            onChange={(phone_no) => setPhoneNo(phone_no)}
            required
            inputStyle={{
              backgroundColor: "transparent",
              borderRadius: "0px 15px 28px 0px",
              color: "#852e2c",
              fontSize: "16px",
              border: "1px solid #852e2c",
              width: "255px",
              alignSelf: "stretch",
              boxSizing: "border-box",
              height: "40px",
              justifyContent: "center",
              padding: "15px 25px 16px 10px",
              outline: "none",
            }}
            countrySelectorStyleProps={{
              buttonStyle: {
                backgroundColor: "transparent",
                border: "1px solid #852e2c",
                borderRadius: "22px 0px 0px 27px",
                paddingLeft: "10px",
                height: "40px",
              },
            }}
          />
        </div>
        <div className={styles.howManyPeopleAreComingParent}>
          <div className={styles.whenAreYou}>Your Email Address (Optional)</div>
          <input
            className={styles.peopleCount}
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="email@example.com"
            autoComplete="email"
          />
        </div>
        {name && phone_no.length > 11 ? (
          <button
            onClick={() => reserveNow()}
            className={styles.btnLargeLongFillDefa}
            style={{ backgroundColor: "#852e2c" }}
          >
            <div className={styles.reserveNowWrapper}>
              <b className={styles.reserveNow}>Reserve Now</b>
            </div>
          </button>
        ) : (
          <button
            onClick={() => alert("Please fill the details.")}
            className={styles.btnLargeLongFillDefa}
          >
            <div className={styles.reserveNowWrapper}>
              <b className={styles.reserveNow}>Reserve Now</b>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Reserve;
