"use client";

import styles from "./cart-slider.module.css";
import { CartContext } from "./CartContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const CartSlider = (props) => {
  const router = useRouter();

  const cart = useContext(CartContext);

  console.log("Menu Items", cart.MenuItems);

  return (
    <>
      {cart.MenuItems.length > 0 ? (
        <button
          onClick={() => router.push(`${props.table_no}/checkout`)}
          className={styles.addtocartbtn}
        >
          <div className={styles.btntextbox}>
            <div className={styles.btnrighttextbox}>
              <div className={styles.items1container}>
                <div className={styles.div}>{cart.MenuItems.length}</div>
              </div>
              <b className={styles.addtocarttext}>View Order</b>
            </div>
            <div className={styles.btnpricetotal}>
              <b className={styles.btntotaltext}>Total:</b>
              <b className={styles.btnpricetext}>
                {cart.getTotalCost().toFixed(1)}
              </b>
              <b className={styles.btncurrencytext}>EUR</b>
            </div>
          </div>
        </button>
      ) : null}
    </>
  );
};

export default CartSlider;
