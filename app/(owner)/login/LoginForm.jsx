"use client";

import styles from "./page.module.css";
import Spinner from "@/components/common/Spinner";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useLogin } from "@/hooks";
import Link from "next/link";

export default function LoginForm() {
  const { email, password, isLoading, onChange, onSubmit } = useLogin();

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.container11}>
          <div className={styles.container2}>
            <div className={styles.container3}>
              <div className={styles.textContainer5}>
                <b className={styles.stayAWhile}>STAY A WHILE</b>
                <div className={styles.signInTo}>Sign in to your account</div>
              </div>
              <div className={styles.inputfieldscontainer}>
                <div className={styles.inputfieldcontainername}>
                  <div className={styles.emailText}>Email</div>
                  <input
                    className={styles.textfieldemail}
                    type="email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    autoComplete="email"
                    required
                  />
                </div>
                <div className={styles.inputfieldcontainername}>
                  <div className={styles.emailText}>Password</div>
                  <input
                    className={styles.textfieldpass}
                    type="password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <FormControlLabel
                label="Remember Me"
                control={<Checkbox name="remember" color="primary" />}
              />
              <Link href="/password-reset" className={styles.forgotPassword}>
                Forgot Password
              </Link>
            </div>
          </div>
          <button type="submit" className={styles.btnLargeLongFillDefa}>
            <div className={styles.ctaWrapper}>
              <b className={styles.cta}>
                {isLoading ? <Spinner sm /> : "Login"}
              </b>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
