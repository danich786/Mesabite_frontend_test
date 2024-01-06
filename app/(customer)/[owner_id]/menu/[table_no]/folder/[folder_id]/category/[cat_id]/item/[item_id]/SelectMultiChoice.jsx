"use client";

import styles from "./itemdetails.module.css";

import SelectMultiChoice2 from "./SelectMultiChoice2";

import { useContext } from "react";
import { TempCartContext } from "./TempCartContext";

export default function SelectMultiChoice(props) {
  const add_ons_group = props.add_ons_group;
  const add_ons_choices = props.add_ons_choices;

  const temp_cart = useContext(TempCartContext);

  let multi_addons_price = temp_cart
    .getTempAddOnsCost(add_ons_group.group_type)
    .toFixed(1);

  return (
    <>
      <div className={styles.normaladdongroupinfo}>
        <div className={styles.extraaddongroupname}>
          <b className={styles.nametext}>{add_ons_group.name}</b>
        </div>
        <div className={styles.grouppricebox}>
          <div className={styles.pricetextbox}>
            <b className={styles.pricetext}>{multi_addons_price}</b>
            <b className={styles.currencytext}>eur</b>
          </div>
          <img
            className={styles.arrowupvectorIcon}
            alt=""
            src="/menu/itemdetails/arrowupvector@2x.png"
          />
        </div>
      </div>
      {add_ons_choices.map((add_ons_choice, index) => {
        return (
          <div key={index} className={styles.multiaddonschoicesbox}>
            <SelectMultiChoice2
              add_ons_group={add_ons_group}
              add_ons_choice={add_ons_choice}
            />
          </div>
        );
      })}
    </>
  );
}
