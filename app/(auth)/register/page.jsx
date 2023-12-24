"use client";

import styles from "./page.module.css";

import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

import { useState } from "react";
import Link from "next/link";
import Spinner from "@/components/common/Spinner";
import { useRegister } from "@/hooks";

import LanguageDropdown from "../login/LanguageDropdown";

const Register = () => {
  const {
    first_name,
    last_name,
    resturant_name,
    email,
    phone_no,
    setPhoneNo,
    password,
    re_password,
    isLoading,
    onChange,
    onChangePhone,
    onSubmit,
  } = useRegister();

  return (
    <div className={styles.signInLocofyReady}>
      <div className={styles.leftcontainer}>
        <div className={styles.header}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/authentication/logo@2x.png"
          />
          <LanguageDropdown />
        </div>
        <form onSubmit={onSubmit}>
          <div className={styles.rigntcontainer}>
            <div className={styles.registercontainer}>
              <div className={styles.textcontainer}>
                <b className={styles.joinUs}>Join Us</b>
                <div className={styles.createAFree}>Create a free account</div>
              </div>
              <div className={styles.inputfieldscontainer}>
                <div className={styles.nameimputcontainer}>
                  <div className={styles.firstnamecontainer}>
                    <b className={styles.joinUs}>FIRST NAME</b>
                    <input
                      className={styles.textfieldfirstname}
                      type="text"
                      name="first_name"
                      value={first_name}
                      onChange={onChange}
                      required
                      autoComplete="first_name"
                    />
                  </div>
                  <div className={styles.firstnamecontainer}>
                    <b className={styles.joinUs}>LAST NAME</b>
                    <input
                      className={styles.textfieldfirstname}
                      type="text"
                      name="last_name"
                      value={last_name}
                      onChange={onChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.restaurantnamecontainer}>
                  <b className={styles.joinUs}>RESTAURANT NAME</b>
                  <input
                    className={styles.textfieldfirstname}
                    type="text"
                    name="resturant_name"
                    value={resturant_name}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className={styles.restaurantnamecontainer}>
                  <b className={styles.joinUs}>YOUR EMAIL</b>
                  <input
                    className={styles.textfieldfirstname}
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className={styles.restaurantnamecontainer}>
                  <b className={styles.joinUs}>YOUR CELL PHONE NUMBER</b>
                  <PhoneInput
                    defaultCountry="es"
                    name="phone_no"
                    value={phone_no}
                    onChange={(phone_no) => setPhoneNo(phone_no)}
                    inputStyle={{
                      backgroundColor: "transparent",
                      borderRadius: "0px 15px 28px 0px",
                      color: "#fff",
                      fontSize: "16px",
                      border: "1px solid #acacac",
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
                        borderRadius: "22px 0px 0px 27px",
                        paddingLeft: "10px",
                        height: "40px",
                      },
                    }}
                    required
                  />
                </div>
                <div className={styles.restaurantnamecontainer}>
                  <b className={styles.joinUs}>PASSWORD</b>
                  <input
                    className={styles.textfieldfirstname}
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className={styles.restaurantnamecontainer}>
                  <b className={styles.joinUs}>CONFIRM PASSWORD</b>
                  <input
                    className={styles.textfieldfirstname}
                    type="password"
                    name="re_password"
                    value={re_password}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              <button className={styles.loginbutton}>
                <b className={styles.login}>
                  {isLoading ? <Spinner sm /> : "Register"}
                </b>
              </button>
              <div className={styles.textcontaiercreateaccount}>
                <div className={styles.joinUs}>Already have an account?</div>
                <Link href="/login" className={styles.createAnAccount}>
                  Login Here
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.textcontainer1}>
        <div className={styles.textContainer1}>
          <div className={styles.textContainer2}>
            <b className={styles.fastSimpleAnd}>Fast, Simple, and Powerful</b>
            <div className={styles.manageYourBusiness}>
              Manage your business with the online ordering platform built for
              restaurant operators
            </div>
          </div>
          <div className={styles.textContainer3}>
            <div className={styles.customDesignDataParent}>
              <b className={styles.fastSimpleAnd}>{`CUSTOM DESIGN & DATA`}</b>
              <div className={styles.itsSomethingYou}>
                It’s something you won’t get anywhere else. Get a custom
                ordering experience, without the add-on fee. Protect your
                margins from all angles.
              </div>
            </div>
            <div className={styles.immediateSignUpAccessParent}>
              <b
                className={styles.fastSimpleAnd}
              >{`IMMEDIATE SIGN UP & ACCESS`}</b>
              <div className={styles.itsSomethingYou}>
                Trade in weeks for minutes; we’ll have you up and running in
                under 30 minutes.
              </div>
            </div>
            <div className={styles.hereToHelpEveryRestaurantParent}>
              <b className={styles.fastSimpleAnd}>
                HERE TO HELP EVERY RESTAURANT
              </b>
              <div className={styles.itsSomethingYou}>
                We’re here to support small businesses. Our mission is to help
                every restaurant grow their online revenue.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textContainer4}>
          <div className={styles.fastSimpleAnd}>PRIVACY POLICY</div>
          <div className={styles.termsOfUse}>TERMS OF USE</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
