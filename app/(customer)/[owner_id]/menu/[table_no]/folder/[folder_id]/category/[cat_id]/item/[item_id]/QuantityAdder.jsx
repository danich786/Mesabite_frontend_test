"use client";

import styles from "./itemdetails.module.css";

import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function QuantityAdder(props) {
  const menu_item = props.menu_item;

  const cart = useContext(CartContext);
  const productQuantity = cart.getItemQuantity(menu_item.id);

  return (
    <div className={styles.addquantitybox}>
      <button onClick={() => cart.removeOneFromCart(menu_item.id)}>
        <img
          className={styles.minusicon}
          alt=""
          src="/menu/itemdetails/minusicon@2x.png"
        />
      </button>

      <div className={styles.backbtntext}>{productQuantity}</div>

      <button onClick={() => cart.addOneToCart(menu_item.id)}>
        <img
          className={styles.minusicon}
          alt=""
          src="/menu/itemdetails/plusicon@2x.png"
        />
      </button>
    </div>
  );
}
