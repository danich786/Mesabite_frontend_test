"use client";

import styles from "./checkout-page.module.css";
import Link from "next/link";

import { CartContext } from "../CartContext";
import { useState, useContext } from "react";

import { useRouter } from "next/navigation";

const CheckoutPage = () => {
  const router = useRouter();
  const [commentsInputValue, setCommentsInputValue] = useState("");

  const cart = useContext(CartContext);

  return (
    <div className={styles.checkoutpage}>
      {/* <div className={styles.notificationsection}>
        <b className={styles.placingThisOrder}>
          Placing this order will get you a stamp!
        </b>
      </div> */}
      <div className={styles.topcontainer}>
        <Link href="./" className={styles.backbuttongroup}>
          <img
            className={styles.backarrowframeIcon}
            alt=""
            src="/menu/checkout/backarrowframe@2x.png"
          />
          <b className={styles.placingThisOrder}>Back</b>
        </Link>
        <div className={styles.detailsbox}>
          <div className={styles.iconbox}>
            <b className={styles.carttext}>Your Cart</b>
            <img
              className={styles.iconsgroup}
              alt=""
              src="/menu/checkout/iconsgroup@2x.png"
            />
          </div>
          <div className={styles.tableordertext}>
            <img
              className={styles.locationicon}
              alt=""
              src="/menu/checkout/locationicon@2x.png"
            />
            <div className={styles.textbox}>
              <div className={styles.tableordertext1}>Tabable Order</div>
              <div className={styles.tablenotext}>Table #11</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.orderdetailscontainer}>
        <div className={styles.orderdetailscontainer2}>
          <div className={styles.yourordersection}>
            <div className={styles.yourordersection2}>
              <b className={styles.carttext}>Your order</b>
              <div className={styles.itemsnogroup}>
                <div className={styles.itemsnotext}>
                  {cart.MenuItems.length}
                </div>
                <div className={styles.itemstext}>items</div>
              </div>
            </div>
          </div>

          <div className={styles.cartitems}>
            {/* Displaying Menu Items in the Cart */}

            {cart.MenuItems.map((cart_item, index) => {
              const CartMenuItems = cart_item[0];
              const CartAddOns = cart_item[1];

              return (
                <div key={index} className={styles.itemsdetailsbox}>
                  {CartMenuItems.map((cart_menu_item, index) => {
                    return (
                      <div key={index} className={styles.itemsdetailsdiv}>
                        <div className={styles.itemimagebox}>
                          {cart_menu_item.image == null ? (
                            <img
                              className={styles.image1Icon}
                              alt=""
                              src="/default-pic.png"
                            />
                          ) : (
                            <img
                              className={styles.image1Icon}
                              alt=""
                              src={cart_menu_item.image}
                            />
                          )}
                        </div>

                        <div className={styles.itemsnamediv}>
                          <div className={styles.itemname}>
                            {cart_menu_item.name}
                          </div>

                          {CartAddOns.map((cart_addon, index) => {
                            return (
                              <div key={index} className={styles.addonstext}>
                                <p className={styles.medium}>
                                  {cart_addon.name}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                        <div className={styles.optionsbox}>
                          <div className={styles.pricediv}>
                            <b className={styles.carttext}>
                              {cart.getCartItemCost(cart_item).toFixed(1)}
                            </b>
                            <b className={styles.currency}>EUR</b>
                          </div>
                          <div className={styles.optionsdiv}>
                            <button
                              onClick={() => {
                                cart.decreaseCartItemQuantity(cart_item);
                              }}
                            >
                              <img
                                className={styles.cancelbtnIcon}
                                alt=""
                                src="/menu/checkout/cancelbtn@2x.png"
                              />
                            </button>

                            <div className={styles.addedquantity}>
                              {cart_menu_item.quantity}
                            </div>

                            <button
                              onClick={() => {
                                cart.addCartItemQuantity(cart_item);
                              }}
                            >
                              <img
                                className={styles.addbtnIcon}
                                alt=""
                                src="/menu/checkout/addbtn@2x.png"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className={styles.divider} />
                </div>
              );
            })}

            <button
              onClick={() => router.push("./")}
              className={styles.additembtn}
            >
              <img
                className={styles.btnicon}
                alt=""
                src="/menu/checkout/btnicon@2x.png"
              />
              <div className={styles.additmestext}>Add Items</div>
            </button>
          </div>
          <div className={styles.commentsbox}>
            <div className={styles.divider} />
            <b className={styles.commentstext}>Comments / Special Requests:</b>
            <input
              className={styles.commentsinput}
              type="text"
              name="Comment"
              value={commentsInputValue}
              onChange={(event) => setCommentsInputValue(event.target.value)}
            />
          </div>
          <div className={styles.relateditemsbox}>
            <div className={styles.divider} />
            <b className={styles.placingThisOrder}>Don’t Miss on these:</b>
            <div className={styles.relateditemsdiv}>
              <div className={styles.relateditem}>
                <div className={styles.imagefream}>
                  <img
                    className={styles.frappeVirselis1Icon}
                    alt=""
                    src="/menu/checkout/frappevirselis-1@2x.png"
                  />
                </div>
                <b className={styles.carttext}>
                  <p className={styles.medium}>{`Chocolate `}</p>
                  <p className={styles.medium}>caliente clásico</p>
                </b>
                <b className={styles.eur}>1.60 EUR</b>
                <div className={styles.item}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/menu/checkout/frame@2x.png"
                  />
                  <b className={styles.placingThisOrder}>Add to cart</b>
                </div>
              </div>
              <div className={styles.relateditem}>
                <div className={styles.imagefream}>
                  <img
                    className={styles.frappeVirselis1Icon}
                    alt=""
                    src="/menu/checkout/frappevirselis-1@2x.png"
                  />
                </div>
                <b className={styles.carttext}>
                  <p className={styles.medium}>{`Chocolate `}</p>
                  <p className={styles.medium}>caliente clásico</p>
                </b>
                <b className={styles.eur}>1.60 EUR</b>
                <div className={styles.item}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/menu/checkout/frame@2x.png"
                  />
                  <b className={styles.placingThisOrder}>Add to cart</b>
                </div>
              </div>
              <div className={styles.relateditem}>
                <div className={styles.imagefream}>
                  <img
                    className={styles.frappeVirselis1Icon}
                    alt=""
                    src="/menu/checkout/frappevirselis-1@2x.png"
                  />
                </div>
                <b className={styles.carttext}>
                  <p className={styles.medium}>{`Chocolate `}</p>
                  <p className={styles.medium}>caliente clásico</p>
                </b>
                <b className={styles.eur}>1.60 EUR</b>
                <div className={styles.item}>
                  <img
                    className={styles.frameIcon}
                    alt=""
                    src="/menu/checkout/frame@2x.png"
                  />
                  <b className={styles.placingThisOrder}>Add to cart</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.priceandtaxbox}>
            <div className={styles.divider} />
            <div className={styles.priceandtaxdiv}>
              <div className={styles.totaldiv}>
                <b className={styles.placingThisOrder}>Total</b>
                <b className={styles.totalprice}>
                  {cart.getTotalCost().toFixed(1)} £
                </b>
              </div>
              <div className={styles.taxdiv}>
                <div className={styles.taxprice}>Tax</div>
                <b className={styles.taxtext}>0 £</b>
              </div>
            </div>
          </div>
          <div className={styles.totalmainbox}>
            <div className={styles.divider} />
            <div className={styles.totalmaindiv}>
              <b className={styles.totalmaintext}>Total</b>
              <b className={styles.totalmainprice}>
                {cart.getTotalCost().toFixed(1)} £
              </b>
            </div>
          </div>
        </div>
        <button className={styles.checkoutbtn}>
          <div className={styles.btnbox}>
            <div className={styles.leftdiv}>
              <img
                className={styles.checkouticon}
                alt=""
                src="/menu/checkout/checkouticon@2x.png"
              />
              <b className={styles.checkouttext}>Checkout</b>
            </div>
            <div className={styles.rightdiv}>
              <b className={styles.totaltext1}>Total:</b>
              <b className={styles.pricetext}>
                {cart.getTotalCost().toFixed(1)}
              </b>
              <b className={styles.currencytext}>EUR</b>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage;
