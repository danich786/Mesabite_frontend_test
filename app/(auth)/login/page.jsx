import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "MesaBite | Login",
};

import Link from "next/link";

import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.rectangle} />
        <div className={styles.frame2}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.imageParent}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frame3}>
        <div className={styles.frame4}>
          <div className={styles.frame5} />
          <img className={styles.grd041Icon} alt="" src="/grd-04-1@2x.png" />
        </div>
        <div className={styles.frame6}>
          <div className={styles.frame7}>
            <b className={styles.fastSimpleAnd}>Fast, Simple, and Powerfull</b>
          </div>
          <div className={styles.frame8}>
            <div className={styles.manageYourBusiness}>
              Manage your business with the online ordering platform built for
              restaurant operators
            </div>
          </div>
          <div className={styles.frame9}>
            <div className={styles.termsOfUse}>TERMS OF USE</div>
          </div>
          <div className={styles.frame10}>
            <div className={styles.termsOfUse}>PRIVACY POLICY</div>
          </div>
          <div className={styles.frame11}>
            <div className={styles.frame12}>
              <b
                className={styles.immediateSignUp}
              >{`IMMEDIATE SIGN UP & ACCESS`}</b>
            </div>
            <div className={styles.frame13}>
              <div className={styles.frame14}>
                <b className={styles.hereToHelp}>
                  HERE TO HELP EVERY RESTAURANT
                </b>
              </div>
              <div className={styles.frame15}>
                <b className={styles.customDesign}>{`CUSTOM DESIGN & DATA`}</b>
              </div>
            </div>
          </div>
          <div className={styles.frame16}>
            <div className={styles.frame17}>
              <div className={styles.tradeInWeeks}>
                Trade in weeks for minutes; we’ll have you up and running in
                under 30 minutes.
              </div>
            </div>
            <div className={styles.frame18}>
              <div className={styles.frame19}>
                <div className={styles.itsSomethingYou}>
                  It’s something you won’t get anywhere else. Get a custom
                  ordering experience, without the add-on fees. Protect your
                  margins from all angles.
                </div>
              </div>
              <div className={styles.frame20}>
                <div className={styles.wereHereTo}>
                  We’re here to support small businesses. Our mission is to help
                  every restaurant grow their online revenue.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.frame21}>
        <b className={styles.stayAWhile}>STAY A WHILE</b>
        <div className={styles.signInTo}>Sign in to your account</div>
        <LoginForm />
        <div className={styles.dontHaveAn}>Don’t have an account?</div>
        <Link href="/register" className={styles.createAnAccount}>
          Create an Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
