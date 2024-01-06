"use client";

import styles from "./itemdetails.module.css";

import { useState, useEffect, useContext } from "react";
import { TempCartContext } from "./TempCartContext";

export default function SelectNormalChoice(props) {
  const add_ons_group = props.add_ons_group;
  const add_ons_choices = props.add_ons_choices;

  const temp_cart = useContext(TempCartContext);

  let pre_selected_choice = null;

  add_ons_choices.map((add_ons_choice) => {
    if (add_ons_choice.pre_select == true) {
      pre_selected_choice = add_ons_choice;
    }
  });

  useEffect(() => {
    if (pre_selected_choice) {
      temp_cart.addPreSelectedAddOnToTempCart(
        pre_selected_choice.id,
        pre_selected_choice.name,
        pre_selected_choice.price,
        add_ons_group.group_type,
        add_ons_group.menu_item,
        add_ons_group.id
      );
    }
  }, []);

  const [selected_choice, setSelectedChoice] = useState(pre_selected_choice);

  return (
    <>
      <div className={styles.normaladdongroupinfo}>
        <div className={styles.groupname}>
          <b className={styles.nametext}>{add_ons_group.name}</b>
          <div className={styles.groupchoicetext}>
            | {selected_choice ? selected_choice.name : null}
          </div>
        </div>
        <div className={styles.grouppricebox}>
          <div className={styles.pricetextbox}>
            <b className={styles.pricetext}>
              {selected_choice ? selected_choice.price : "0.0"}
            </b>
            <b className={styles.currencytext}>eur</b>
          </div>
          <img
            className={styles.arrowupvectorIcon}
            alt=""
            src="/menu/itemdetails/arrowupvector@2x.png"
          />
        </div>
      </div>

      <div className={styles.groupchoicesslider}>
        {/*  */}
        {add_ons_choices.map((add_ons_choice, index) => {
          return (
            <button
              onClick={() => {
                if (selected_choice != add_ons_choice) {
                  setSelectedChoice(add_ons_choice);
                  temp_cart.addAddOnToTempCart(
                    add_ons_choice.id,
                    add_ons_choice.name,
                    add_ons_choice.price,
                    add_ons_group.group_type,
                    add_ons_group.menu_item,
                    add_ons_group.id
                  );
                }
              }}
              key={index}
              className={styles.choice2}
              style={{
                backgroundColor:
                  selected_choice == add_ons_choice ? "#ffcd00" : "transparent",
              }}
            >
              <div className={styles.medium}>{add_ons_choice.name}</div>
            </button>
          );
        })}
      </div>
    </>
  );
}
