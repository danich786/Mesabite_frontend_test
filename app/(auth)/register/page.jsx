"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./page.module.css";
import Link from "next/link";
import Spinner from "@/components/common/Spinner";
import { useRegister } from "@/hooks";

const Register = () => {
  const {
    first_name,
    last_name,
    email,
    password,
    re_password,
    isLoading,
    onChange,
    onSubmit,
  } = useRegister();

  return (
    <div className={styles.frame}>
      <div className={styles.frame1}>
        <div className={styles.frameChild} />
        <div className={styles.frame2}>
          <div className={styles.frame3}>
            <b className={styles.fastSimpleAnd}>Fast, Simple, and Powerfull</b>
          </div>
          <div className={styles.frame4}>
            <div className={styles.manageYourBusiness}>
              Manage your business with the online ordering platdiv built for
              restaurant operators
            </div>
          </div>
          <div className={styles.frame5}>
            <div className={styles.termsOfUse}>TERMS OF USE</div>
          </div>
          <div className={styles.frame6}>
            <div className={styles.termsOfUse}>PRIVACY POLICY</div>
          </div>
          <div className={styles.frame7}>
            <div className={styles.frame8}>
              <b
                className={styles.immediateSignUp}
              >{`IMMEDIATE SIGN UP & ACCESS`}</b>
            </div>
            <div className={styles.frame9}>
              <div className={styles.frame10}>
                <b className={styles.hereToHelp}>
                  HERE TO HELP EVERY RESTAURANT
                </b>
              </div>
              <div className={styles.frame11}>
                <b className={styles.customDesign}>{`CUSTOM DESIGN & DATA`}</b>
              </div>
            </div>
          </div>
          <div className={styles.frame12}>
            <div className={styles.frame13}>
              <div className={styles.tradeInWeeks}>
                Trade in weeks for minutes; we’ll have you up and running in
                under 30 minutes.
              </div>
            </div>
            <div className={styles.frame14}>
              <div className={styles.frame15}>
                <div className={styles.itsSomethingYou}>
                  It’s something you won’t get anywhere else. Get a custom
                  ordering experience, without the add-on fees. Protect your
                  margins from all angles.
                </div>
              </div>
              <div className={styles.frame16}>
                <div className={styles.wereHereTo}>
                  We’re here to support small businesses. Our mission is to help
                  every restaurant grow their online revenue.
                </div>
              </div>
            </div>
          </div>
        </div>
        <img className={styles.grd041Icon} alt="" src="/grd-04-1@2x.png" />
      </div>
      <div className={styles.frame17}>
        <div className={styles.rectangle} />
        <div className={styles.frame18}>
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <div className={styles.imageParent}>
            <img className={styles.imageIcon} alt="" src="/image@2x.png" />
            <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.frame19}>
          <div className={styles.frame20}>
            <b className={styles.createAccount}>Create Account</b>
            <div className={styles.joinMesabiteFor}>
              Join MesaBite For Free!
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit}>
          <div className={styles.frame21}>
            <div className={styles.firstNameParent}>
              <b className={styles.firstName}>FIRST NAME</b>
              <input
                className={styles.inputText}
                type="text"
                name="first_name"
                value={first_name}
                onChange={onChange}
              />
            </div>
            <div className={styles.firstNameParent}>
              <b className={styles.firstName}>LAST NAME</b>
              <input
                className={styles.inputText}
                type="text"
                name="last_name"
                value={last_name}
                onChange={onChange}
              />
            </div>
          </div>
          <div className={styles.restaurantNameGroup}>
            <b className={styles.firstName}>RESTAURANT NAME</b>
            <input
              className={styles.inputText}
              type="text"
              name="resturant_name"
              // value={resturantname}
              // onChange={onChange}
            />
          </div>
          <div className={styles.yourEmailParent}>
            <b className={styles.firstName}>YOUR EMAIL</b>
            <input
              className={styles.inputText}
              type="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className={styles.frame25}>
            <div className={styles.alreadyHaveAnAccountParent}>
              <div className={styles.termsOfUse}>Already have an account?</div>
              <div className={styles.loginHere}>Login Here</div>
            </div>
          </div>

          <div className={styles.frame35}>
            <b className={styles.firstName}>PASSWORD</b>
            <input
              className={styles.inputText}
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className={styles.frame36}>
            <div className={styles.rectangleParent}>
              <b className={styles.firstName}>CONFIRM PASSWORD</b>
              <input
                className={styles.inputText}
                type="password"
                name="re_password"
                value={re_password}
                onChange={onChange}
              />
            </div>
          </div>
          <div className={styles.yourPhoneParent}>
            <p className={styles.yourNumber}>Your Number</p>
            <input
              className={styles.inputText}
              type="number"
              // value={number}
              // onChange={onchange}
            />
          </div>

          <button type="submit" className={styles.frame26}>
            <b className={styles.createAccount1}>
              {isLoading ? <Spinner sm /> : "Create Account"}
            </b>
          </button>
        </form>
        <div className={styles.frame25}>
          <div className={styles.alreadyAccount}>
            <div className={styles.haveAccount}>Already have an account?</div>
            <Link href="/login" className={styles.loginHere}>
              Login Here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
