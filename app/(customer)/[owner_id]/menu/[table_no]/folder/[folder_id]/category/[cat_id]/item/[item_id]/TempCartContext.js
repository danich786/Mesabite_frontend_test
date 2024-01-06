import { createContext, useState } from "react";

export const TempCartContext = createContext({
  TempMenuItems: [],
  TempAddOns: [],

  getTempItemQuantity: () => {},
  getTempAddOnQuantity: () => {},

  addOneToTempCart: () => {},
  addPreSelectedAddOnToTempCart: () => {},
  addAddOnToTempCart: () => {},
  removeOneFromTempCart: () => {},
  removeAddOnFromTempCart: () => {},
  deleteFromTempCart: () => {},
  deleteAddOnFromTempCart: () => {},

  getTempCartTotalCost: () => {},
  getTempAddOnsCost: () => {},
});

export function TempCartProvider({ children }) {
  const [tempCartMenuItems, settempCartMenuItems] = useState([]);
  const [tempCartAddOns, settempCartAddOns] = useState([]);

  function getTempItemQuantity(id) {
    const quantity = tempCartMenuItems.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function getTempAddOnQuantity(id) {
    const quantity = tempCartAddOns.find(
      (add_on) => add_on.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOneToTempCart(id, name, price, image) {
    const quantity = getTempItemQuantity(id);

    if (quantity === 0) {
      settempCartMenuItems([
        ...tempCartMenuItems,
        {
          id: id,
          name: name,
          price: price,
          image: image,
          quantity: 1,
        },
      ]);
    } else {
      settempCartMenuItems(
        tempCartMenuItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function addPreSelectedAddOnToTempCart(
    id,
    name,
    price,
    group_type,
    menu_item_id,
    group_id
  ) {
    settempCartAddOns((tempCartAddOns) => [
      ...tempCartAddOns,
      {
        id: id,
        name: name,
        price: price,
        group_type: group_type,
        group_id: group_id,
        menu_item_id: menu_item_id,
        quantity: 1,
      },
    ]);
  }

  function addAddOnToTempCart(
    id,
    name,
    price,
    group_type,
    menu_item_id,
    group_id
  ) {
    const quantity = getTempAddOnQuantity(id);

    // Adding Normal Add ON

    if (group_type == "Normal") {
      // Checking if a normal add on from the same group already exists in the cart
      const existing_normal_addon_id = tempCartAddOns.find(
        (add_on) => add_on.group_type == "Normal" && add_on.group_id == group_id
      )?.id;

      if (existing_normal_addon_id === undefined) {
        //Do Not exist
        settempCartAddOns([
          ...tempCartAddOns,
          {
            id: id,
            name: name,
            price: price,
            group_type: group_type,
            group_id: group_id,
            menu_item_id: menu_item_id,
            quantity: 1,
          },
        ]);
      } else {
        //Already Exists

        if (quantity === 0) {
          settempCartAddOns([
            ...tempCartAddOns,
            {
              id: id,
              name: name,
              price: price,
              group_type: group_type,
              group_id: group_id,
              menu_item_id: menu_item_id,
              quantity: 1,
            },
          ]);
          removeAddOnFromTempCart(existing_normal_addon_id);
        } else {
          console.log("Normal Duplicated");
          settempCartAddOns(
            tempCartAddOns.map((add_on) =>
              add_on.id === id
                ? { ...add_on, quantity: add_on.quantity + 1 }
                : add_on
            )
          );
        }
      }
    } else {
      // #################### Adding Other Add Ons #################

      if (quantity === 0) {
        settempCartAddOns([
          ...tempCartAddOns,
          {
            id: id,
            name: name,
            price: price,
            group_type: group_type,
            menu_item_id: menu_item_id,
            quantity: 1,
          },
        ]);
      } else {
        settempCartAddOns(
          tempCartAddOns.map((add_on) =>
            add_on.id === id
              ? { ...add_on, quantity: add_on.quantity + 1 }
              : add_on
          )
        );
      }
    }
  }

  function removeOneFromTempCart(id) {
    const quantity = getTempItemQuantity(id);

    if (quantity == 1) {
    } else {
      settempCartMenuItems(
        tempCartMenuItems.map(
          (item) =>
            item.id === id // if condition
              ? { ...item, quantity: item.quantity - 1 } // if statement is true
              : item // if statement is false
        )
      );
    }
  }

  function deleteFromTempCart(id) {
    // Delete all Menu Items with id = id(2) from Cart
    settempCartMenuItems((tempCartMenuItems) =>
      tempCartMenuItems.filter((currentItem) => {
        return currentItem.id != id;
        // [] if an object meets a condition, add the object to array
        // [MenuItem1, MenuItem2, MenuItem3]
        // [MenuItem1, MenuItem3]
      })
    );
  }

  function removeAddOnFromTempCart(id) {
    const quantity = getTempAddOnQuantity(id);

    if (quantity == 1) {
      deleteAddOnFromTempCart(id);
    } else {
      settempCartAddOns(
        tempCartAddOns.map((add_on) =>
          add_on.id === id
            ? { ...add_on, quantity: add_on.quantity - 1 }
            : add_on
        )
      );
    }
  }

  function deleteAddOnFromTempCart(id) {
    // Delete all Add Ons with id = id from Cart
    settempCartAddOns((tempCartAddOns) =>
      tempCartAddOns.filter((currentAddOn) => {
        return currentAddOn.id != id;
      })
    );
  }

  function getTempCartTotalCost() {
    let totalCost = 0;
    tempCartMenuItems.map((tempCartMenuItem) => {
      totalCost += tempCartMenuItem.price * tempCartMenuItem.quantity;
    });
    tempCartAddOns.map((tempCartAddOn) => {
      totalCost += tempCartAddOn.price * tempCartAddOn.quantity;
    });
    return totalCost;
  }

  function getTempAddOnsCost(group_type) {
    let AddOnsCost = 0;
    tempCartAddOns.map((tempCartAddOn) => {
      if (tempCartAddOn.group_type == group_type) {
        AddOnsCost += tempCartAddOn.price * tempCartAddOn.quantity;
      }
    });
    return AddOnsCost;
  }

  // ######################################################################################

  const tempContextValue = {
    TempMenuItems: tempCartMenuItems,
    TempAddOns: tempCartAddOns,
    getTempItemQuantity,
    getTempAddOnQuantity,
    addOneToTempCart,
    addPreSelectedAddOnToTempCart,
    addAddOnToTempCart,
    removeOneFromTempCart,
    deleteFromTempCart,
    removeAddOnFromTempCart,
    deleteAddOnFromTempCart,
    getTempCartTotalCost,
    getTempAddOnsCost,
  };

  return (
    <TempCartContext.Provider value={tempContextValue}>
      {children}
    </TempCartContext.Provider>
  );
}

export default TempCartProvider;
