"use client";

import styles from "./itemdetails.module.css";

import { useState, useContext } from "react";
import { CartContext } from "./CartContext";

export default function SelectMultiChoice2(props) {
  const add_ons_group = props.add_ons_group;
  const add_ons_choice = props.add_ons_choice;

  const cart = useContext(CartContext);

  const [selected, setSelected] = useState(add_ons_choice.pre_select);

  return (
    <div className={styles.multiaddonchoice}>
      <div className={styles.addonchoicenamebox}>
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            name="multi_addon"
            value={selected}
            onChange={() => {
              setSelected(!selected);
              !selected
                ? cart.addAddOnToCart(
                    add_ons_choice.id,
                    add_ons_choice.price,
                    add_ons_group.group_type
                  )
                : cart.removeAddOnFromCart(add_ons_choice.id);
            }}
            checked={selected}
          />

          {add_ons_choice.name}

          {/* <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/menu/itemdetails/vector@2x.png"
                  />
                  <img
                    className={styles.path2Icon}
                    alt=""
                    src="/menu/itemdetails/path2@2x.png"
                  /> */}
        </label>
      </div>
      <div className={styles.addonchoicepricetext}>
        {add_ons_choice.price} EUR
      </div>
    </div>
  );
}
