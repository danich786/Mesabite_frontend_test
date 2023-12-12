"use client";

import styles from "./page.module.css";
import React from "react";
import Spinner from "@/components/common/Spinner";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useLogin } from "@/hooks";
import Link from "next/link";

export default function LoginForm() {
  const { email, password, isLoading, onChange, onSubmit } = useLogin();
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.emailParent}>
          <div>EMAIL</div>
          <input
            className={styles.inputField}
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            autoComplete="email"
            required
          />
        </div>
        <div className={styles.passwordParent}>
          <div>PASSWORD</div>
          <input
            className={styles.inputField}
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
        <Link href="/password-reset" className={styles.forgotPassword}>
          Forgot Password
        </Link>
        <FormControlLabel
          className={styles.frameChild}
          label="Remember Me"
          control={<Checkbox id="remember" name="remember" color="primary" />}
        />
        <button type="submit" className={styles.frame22}>
          <b className={styles.login}>{isLoading ? <Spinner sm /> : "Login"}</b>
        </button>
      </form>
    </div>
  );
}
