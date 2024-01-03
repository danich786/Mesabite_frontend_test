"use client";

import styles from "./itemdetails.module.css";

import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function AddToCartBtn(props) {
  const menu_item = props.menu_item;

  const cart = useContext(CartContext);

  const MenuItemsCount = cart.MenuItems.reduce(
    (sum, menu_item) => sum + menu_item.quantity,
    0
  );

  const total_price = cart.getTotalCost(menu_item.price).toFixed(2);

  return (
    <button className={styles.addtocartbtn}>
      <div className={styles.btntextbox}>
        <div className={styles.btnrighttextbox}>
          <img
            className={styles.addtocarticon}
            alt=""
            src="/menu/itemdetails/addtocarticon@2x.png"
          />
          <b className={styles.addtocarttext}>Add to cart</b>
        </div>
        <div className={styles.btnpricetotal}>
          <b className={styles.btntotaltext}>Total:</b>
          <b className={styles.btnpricetext}>{total_price}</b>
          <b className={styles.btncurrencytext}>EUR</b>
        </div>
      </div>
    </button>
  );
}
