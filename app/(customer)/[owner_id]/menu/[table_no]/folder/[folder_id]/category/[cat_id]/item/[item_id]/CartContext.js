import { createContext, useState } from "react";
// import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
  MenuItems: [],
  AddOns: [],
  getItemQuantity: () => {},
  getAddOnQuantity: () => {},
  addOneToCart: () => {},
  addAddOnToCart: () => {},
  removeOneFromCart: () => {},
  removeAddOnFromCart: () => {},
  deleteFromCart: () => {},
  deleteAddOnFromCart: () => {},
  getTotalCost: () => {},
  getAddOnsCost: () => {},
});

export function CartProvider({ children }) {
  const [cartMenuItems, setcartMenuItems] = useState([]);
  const [cartAddOns, setcartAddOns] = useState([]);

  // Our Cart array having Item objects in it will look like this
  // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]

  function getItemQuantity(id) {
    const quantity = cartMenuItems.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function getAddOnQuantity(id) {
    const quantity = cartAddOns.find((add_on) => add_on.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity === 0) {
      // item is not in cart
      setcartMenuItems([
        ...cartMenuItems,
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // item is in cart
      // [ { id: 1 , quantity: 3 }, { id: 2, quantity: 1 } ]    add to item id of 2
      setcartMenuItems(
        cartMenuItems.map(
          (item) =>
            item.id === id // ternary operator (if condition)
              ? { ...item, quantity: item.quantity + 1 } // update quantity of item
              : item // if statement is false
        )
      );
    }
  }

  function addAddOnToCart(id, price, group_type, group_id) {
    // Adding Normal Add ON
    if (group_type == "Normal") {
      // Checking if a normal add on from the same group already exists in the cart
      const existing_normal_addon_id = cartAddOns.find(
        (add_on) => add_on.group_type == "Normal" && add_on.group_id == group_id
      )?.id;

      if (existing_normal_addon_id === undefined) {
        //Do Not exist
        setcartAddOns([
          ...cartAddOns,
          {
            id: id,
            price: price,
            group_type: group_type,
            group_id: group_id,
            quantity: 1,
          },
        ]);
      } else {
        //Already Exists
        setcartAddOns([
          ...cartAddOns,
          {
            id: id,
            price: price,
            group_type: group_type,
            group_id: group_id,
            quantity: 1,
          },
        ]);
        removeAddOnFromCart(existing_normal_addon_id);
      }
    } else {
      //Adding Other Add Ons

      const quantity = getAddOnQuantity(id);

      if (quantity === 0) {
        setcartAddOns([
          ...cartAddOns,
          {
            id: id,
            price: price,
            group_type: group_type,
            quantity: 1,
          },
        ]);
      } else {
        setcartAddOns(
          cartAddOns.map((add_on) =>
            add_on.id === id
              ? { ...add_on, quantity: add_on.quantity + 1 }
              : add_on
          )
        );
      }
    }
  }

  function removeOneFromCart(id) {
    const quantity = getItemQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else {
      setcartMenuItems(
        cartMenuItems.map(
          (item) =>
            item.id === id // if condition
              ? { ...item, quantity: item.quantity - 1 } // if statement is true
              : item // if statement is false
        )
      );
    }
  }

  function removeAddOnFromCart(id) {
    const quantity = getAddOnQuantity(id);

    if (quantity == 1) {
      deleteAddOnFromCart(id);
    } else {
      setcartAddOns(
        cartAddOns.map((add_on) =>
          add_on.id === id
            ? { ...add_on, quantity: add_on.quantity - 1 }
            : add_on
        )
      );
    }
  }

  function deleteFromCart(id) {
    // Delete all Menu Items with id = id(2) from Cart
    setcartMenuItems((cartMenuItems) =>
      cartMenuItems.filter((currentItem) => {
        return currentItem.id != id;
        // [] if an object meets a condition, add the object to array
        // [MenuItem1, MenuItem2, MenuItem3]
        // [MenuItem1, MenuItem3]
      })
    );
  }

  function deleteAddOnFromCart(id) {
    // Delete all Add Ons with id = id from Cart
    setcartAddOns((cartAddOns) =>
      cartAddOns.filter((currentAddOn) => {
        return currentAddOn.id != id;
      })
    );
  }

  function getTotalCost(price) {
    let totalCost = 0;
    cartMenuItems.map((cartMenuItem) => {
      // const productData = getProductData(cartItem.id);
      totalCost += price * cartMenuItem.quantity;
    });
    cartAddOns.map((cartAddOn) => {
      totalCost += cartAddOn.price * cartAddOn.quantity;
    });
    return totalCost;
  }

  function getAddOnsCost(group_type) {
    let AddOnsCost = 0;
    cartAddOns.map((cartAddOn) => {
      if (cartAddOn.group_type == group_type) {
        AddOnsCost += cartAddOn.price * cartAddOn.quantity;
      }
    });
    return AddOnsCost;
  }

  const contextValue = {
    MenuItems: cartMenuItems,
    AddOns: cartAddOns,
    getItemQuantity,
    getAddOnQuantity,
    addOneToCart,
    addAddOnToCart,
    removeOneFromCart,
    removeAddOnFromCart,
    deleteFromCart,
    deleteAddOnFromCart,
    getTotalCost,
    getAddOnsCost,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// CODE DOWN HERE

// Context (cart, addToCart, removeCart)
// Provider -> gives your React app access to all the things in your context
