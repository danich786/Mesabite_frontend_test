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
        <div className={styles.emailParent}>
          <div>New Password</div>
          <input
            className={styles.inputField}
            type="password"
            id="new_password"
            name="new_password"
            value={new_password}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
        <div className={styles.passwordParent}>
          <div>Confirm New Password</div>
          <input
            className={styles.inputField}
            type="password"
            id="re_new_password"
            name="re_new_password"
            value={re_new_password}
            onChange={onChange}
            autoComplete="off"
            required
          />
        </div>
        <button type="submit" className={styles.frame22}>
          <b className={styles.login}>
            {isLoading ? <Spinner sm /> : "Confirm"}
          </b>
        </button>
      </form>
    </div>
  );
}
