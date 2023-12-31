"use client";

import styles from "./page.module.css";

import { useResetPassword } from "@/hooks";
import Link from "next/link";
import Spinner from "@/components/common/Spinner";

import LanguageDropdown from "../login/LanguageDropdown";

export default function PasswordReset() {
  const { email, isLoading, onChange, onSubmit } = useResetPassword();
  return (
    <div className={styles.paswordRestLocofyReady}>
      <div className={styles.leftcontainer}>
        <div className={styles.header}>
          <img
            className={styles.logoIcon}
            alt=""
            src="/authentication/logo@2x.png"
          />
          <LanguageDropdown />
        </div>
        <div className={styles.rigntcontainer}>
          <div className={styles.logincontainer}>
            <div className={styles.container1}>
              <form onSubmit={onSubmit}>
                <div className={styles.container11}>
                  <div className={styles.container2}>
                    <div className={styles.container3}>
                      <div className={styles.textContainer5}>
                        <b className={styles.passwordReset}>Password Reset</b>
                        <div className={styles.enterTheEmailContainer}>
                          <p className={styles.enterTheEmail}>
                            Enter the email address you
                          </p>
                          <p className={styles.enterTheEmail}>
                            registered with and we’ll send
                          </p>
                          <p
                            className={styles.enterTheEmail}
                          >{`instructions on how to reset `}</p>
                          <p className={styles.enterTheEmail}>your password.</p>
                        </div>
                      </div>
                      <div className={styles.inputfieldscontainer}>
                        <div className={styles.inputfieldcontainername}>
                          <b className={styles.emailText}>EMAIL</b>
                          <input
                            className={styles.textfieldemail}
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={onChange}
                            autoComplete="email"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className={styles.btnLargeLongFillDefa}>
                    <div className={styles.ctaWrapper}>
                      <b className={styles.cta}>
                        {isLoading ? <Spinner sm /> : "Send Reset Link"}
                      </b>
                    </div>
                  </button>
                </div>
              </form>
              <div className={styles.textContainer6}>
                <Link href="/login" className={styles.backToLog}>
                  Back to login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.textContainer1}>
          <div className={styles.textContainer2}>
            <b className={styles.fastSimpleAnd}>Fast, Simple, and Powerfull</b>
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
                ordering experience, without the add-on fees. Protect your
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
}
