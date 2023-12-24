"use client";

import styles from "../../../login/page.module.css";

import { useResetPasswordConfirm } from "@/hooks";
import Spinner from "@/components/common/Spinner";

export default function ConfirmPasswordResetForm({ uid, token } = props) {
  const { new_password, re_new_password, isLoading, onChange, onSubmit } =
    useResetPasswordConfirm(uid, token);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.logincontainer}>
          <div className={styles.container1}>
            <div className={styles.container11}>
              <div className={styles.container2}>
                <div className={styles.container3}>
                  <div className={styles.textContainer5}>
                    <b className={styles.enterYourNewContainer}>
                      <p className={styles.enterYour}>Enter Your</p>
                      <p className={styles.enterYour}>New Password</p>
                    </b>
                  </div>
                  <div className={styles.inputfieldscontainer}>
                    <div className={styles.inputfieldcontainername}>
                      <b className={styles.enterYourNewContainer}>
                        New Password
                      </b>
                      <input
                        className={styles.textfieldemail}
                        type="password"
                        id="new_password"
                        name="new_password"
                        value={new_password}
                        onChange={onChange}
                        autoComplete="off"
                        required
                      />
                    </div>
                    <div className={styles.inputfieldcontainername}>
                      <b className={styles.enterYourNewContainer}>
                        Confirm New Password
                      </b>
                      <input
                        className={styles.textfieldemail}
                        type="password"
                        id="re_new_password"
                        name="re_new_password"
                        value={re_new_password}
                        onChange={onChange}
                        autoComplete="off"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <button className={styles.btnLargeLongFillDefa}>
                <div className={styles.ctaWrapper}>
                  <b className={styles.cta}>
                    {isLoading ? <Spinner sm /> : "Confirm Password"}
                  </b>
                </div>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
