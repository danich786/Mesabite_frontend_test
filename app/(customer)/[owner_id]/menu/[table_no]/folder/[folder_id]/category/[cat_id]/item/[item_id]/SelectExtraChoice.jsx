"use client";

import styles from "./itemdetails.module.css";

import { CartContext } from "./CartContext";
import { useContext } from "react";

// #################################

export default function SelectExtraChoice(props) {
  const add_ons_group = props.add_ons_group;
  const add_ons_choices = props.add_ons_choices;

  const cart = useContext(CartContext);

  let extra_addons_price = cart
    .getAddOnsCost(add_ons_group.group_type)
    .toFixed(1);

  return (
    <>
      <div className={styles.normaladdongroupinfo}>
        <div className={styles.extraaddongroupname}>
          <b className={styles.nametext}>{add_ons_group.name}</b>
        </div>
        <div className={styles.grouppricebox}>
          <div className={styles.pricetextbox}>
            <b className={styles.pricetext}>{extra_addons_price}</b>
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
        const AddOnQuantity = cart.getAddOnQuantity(add_ons_choice.id);

        return (
          <div key={index} className={styles.extraaddonschoicesbox}>
            <div className={styles.extrachoice1}>
              <div className={styles.extrachoicename}>
                {add_ons_choice.name}
              </div>
              <div className={styles.extrachoiceprice}>
                {add_ons_choice.price} EUR
              </div>
              <div className={styles.extraaddonsaddbox}>
                <button
                  onClick={() => cart.removeAddOnFromCart(add_ons_choice.id)}
                >
                  <img
                    className={styles.minusicon}
                    alt=""
                    src="/menu/itemdetails/minusicon@2x.png"
                  />
                </button>
                <div className={styles.backbtntext}>{AddOnQuantity}</div>
                <button
                  onClick={() =>
                    cart.addAddOnToCart(
                      add_ons_choice.id,
                      add_ons_choice.price,
                      add_ons_group.group_type
                    )
                  }
                >
                  <img
                    className={styles.minusicon}
                    alt=""
                    src="/menu/itemdetails/plusicon@2x.png"
                  />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
