"use client";

import styles from "./itemdetails.module.css";
import { CartContext } from "../../../../../../CartContext";
import { TempCartContext } from "./TempCartContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function AddToCartBtn(props) {
  const router = useRouter();
  const menu_item = props.menu_item;

  const cart = useContext(CartContext);

  const temp_cart = useContext(TempCartContext);

  // const MenuItemsCount = cart.MenuItems.reduce(
  //   (sum, menu_item) => sum + menu_item.quantity,
  //   0
  // );

  const total_price = temp_cart.getTempCartTotalCost().toFixed(1);

  return (
    <button
      onClick={() => {
        router.push("../checkout");
        cart.addToCartBtn(temp_cart.TempMenuItems, temp_cart.TempAddOns);
      }}
      className={styles.addtocartbtn}
    >
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
