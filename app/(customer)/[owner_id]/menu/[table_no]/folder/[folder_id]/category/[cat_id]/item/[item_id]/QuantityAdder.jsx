"use client";

import styles from "./itemdetails.module.css";

import { CartContext } from "../../../../../../CartContext";
import { TempCartContext } from "./TempCartContext";

import { useEffect, useContext } from "react";

export default function QuantityAdder(props) {
  const menu_item = props.menu_item;

  const cart = useContext(CartContext);

  const temp_cart = useContext(TempCartContext);

  useEffect(() => {
    if (temp_cart.TempMenuItems.length == 0) {
      temp_cart.addOneToTempCart(
        menu_item.id,
        menu_item.name,
        menu_item.price,
        menu_item.image
      );
    }
  }, []);

  const productQuantity = temp_cart.getTempItemQuantity(menu_item.id);

  return (
    <div className={styles.addquantitybox}>
      <button onClick={() => temp_cart.removeOneFromTempCart(menu_item.id)}>
        <img
          className={styles.minusicon}
          alt=""
          src="/menu/itemdetails/minusicon@2x.png"
        />
      </button>

      <div className={styles.backbtntext}>{productQuantity}</div>

      <button
        onClick={() =>
          temp_cart.addOneToTempCart(
            menu_item.id,
            menu_item.name,
            menu_item.price,
            menu_item.image
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
  );
}
