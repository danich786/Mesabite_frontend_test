import styles from "../../page.module.css";
import LanguageDropdown from "../../../login/LanguageDropdown";
import ConfirmPasswordResetForm from "./ConfirmPasswordResetForm";

export default function ConfirmResetPassword({ params: { uid, token } }) {
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
          <ConfirmPasswordResetForm uid={uid} token={token} />
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
