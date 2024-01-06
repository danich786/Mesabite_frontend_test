import { createContext, useState } from "react";

export const CartContext = createContext({
  MenuItems: [],

  getItemQuantity: () => {},

  addToCartBtn: () => {},
  addCartItemQuantity: () => {},
  decreaseCartItemQuantity: () => {},
  deleteItemFromCart: () => {},

  getTotalCost: () => {},
  getCartItemCost: () => {},
});

export function CartProvider({ children }) {
  const [cartMenuItems, setcartMenuItems] = useState([]);

  // Our Cart array having Item objects in it will look like this
  // [ [0: [MenuItems]], [1: quantity: 1] ]

  function getItemQuantity(cart_item) {
    const quantity = cartMenuItems.find(
      (menu_item) => menu_item == cart_item
    )[0][0]?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addToCartBtn(TempMenuItems, TempAddOns) {
    setcartMenuItems([...cartMenuItems, [TempMenuItems, TempAddOns]]);
  }

  function addCartItemQuantity(cart_item) {
    cartMenuItems.map((menu_item) => {
      if (menu_item === cart_item) {
        menu_item[0][0].quantity = menu_item[0][0].quantity + 1;
        menu_item[1].map((add_on) => {
          add_on.quantity = add_on.quantity + 1;
        });

        setcartMenuItems([...cartMenuItems]);
      }
    });
  }

  function decreaseCartItemQuantity(cart_item) {
    const quantity = getItemQuantity(cart_item);

    if (quantity == 1) {
      const confirmed = confirm(
        "Are you sure you want to remove the item from the Cart?"
      );
      if (confirmed) {
        deleteItemFromCart(cart_item);
      }
    } else {
      cartMenuItems.map((menu_item) => {
        if (menu_item === cart_item) {
          menu_item[0][0].quantity = menu_item[0][0].quantity - 1;
          menu_item[1].map((add_on) => {
            add_on.quantity = add_on.quantity - 1;
          });

          setcartMenuItems([...cartMenuItems]);
        }
      });
    }
  }

  function deleteItemFromCart(cart_item) {
    setcartMenuItems((cartMenuItems) =>
      cartMenuItems.filter((currentItem) => {
        return currentItem != cart_item;
        // [] if an object meets a condition, add the object to array
        // [MenuItem1, MenuItem2, MenuItem3]
        // [MenuItem1, MenuItem3]
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;

    cartMenuItems.map((cartItem) => {
      const MenuItems = cartItem[0];
      const AddOns = cartItem[1];

      MenuItems.map((menu_item) => {
        totalCost += menu_item.price * menu_item.quantity;
      });

      AddOns.map((add_on) => {
        totalCost += add_on.price * add_on.quantity;
      });
    });

    return totalCost;
  }

  function getCartItemCost(cart_item) {
    let totalItemCost = 0;

    const MenuItems = cart_item[0];
    const AddOns = cart_item[1];

    MenuItems.map((menu_item) => {
      totalItemCost += menu_item.price * menu_item.quantity;
    });

    AddOns.map((add_on) => {
      totalItemCost += add_on.price * add_on.quantity;
    });
    return totalItemCost;
  }

  // ######################################################################################

  const contextValue = {
    MenuItems: cartMenuItems,
    getItemQuantity,
    addToCartBtn,
    addCartItemQuantity,
    decreaseCartItemQuantity,
    deleteItemFromCart,
    getTotalCost,
    getCartItemCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
