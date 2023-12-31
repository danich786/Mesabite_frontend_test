"use client";

import styles from "./addchoice.module.css";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { CancelButton, SaveButton } from "@/components/utils/CustomButtons";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function Add_AddOnsChoice(props) {
  const router = useRouter();

  const [choiceName, setName] = useState("");
  const [hidechoice, setHideChoice] = useState(false);
  const [preSelect, setPreSelect] = useState(false);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [separateprice, setSeparatePrice] = useState(false);
  const [deliveryprice, setDeliveryPrice] = useState();
  const [taxable, setTaxable] = useState(false);
  const [stockquantity, setStockQuantity] = useState();
  const [calorie, setCalorie] = useState();

  const add_AddOnsChoice = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/menus/add_addons_choice/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            group: props.group_id,
            hidden: hidechoice,
            name: choiceName,
            description: description,
            price: price,
            delivery_price: deliveryprice,
            taxable: taxable,
            stock_quantity: stockquantity,
            calorie: calorie,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to add Add On choice. Please try again.");
      }
      router.push(`./${props.group_id}`);
      router.refresh();
      toast.success("Add On Choice Successfully Added!");
    } catch (error) {
      console.log(error);
    }
  };

  // For SideBar #################################################################

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  // SideBar Body #############################################################

  const Sidebar = (anchor) => (
    <div className={styles.sidebarMain}>
      <div className={styles.headerText}>
        Add New Choice
        <CloseIcon
          onClick={toggleDrawer(anchor, false)}
          sx={{ marginLeft: "auto" }}
        />
      </div>

      <form onSubmit={add_AddOnsChoice}>
        <div className={styles.sdHeading}>Name</div>
        <input
          className={styles.inputField}
          name="name"
          type="text"
          value={choiceName}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
          required
        />
        <div className={styles.inputRes}>0/50</div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="hidemenu"
            checked={hidechoice}
            onChange={(e) => setHideChoice(!hidechoice)}
            style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
          />
          &nbsp; Hide from your Menu
        </label>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="preselect"
            checked={preSelect}
            onChange={(e) => setPreSelect(!preSelect)}
            style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
          />
          &nbsp; Pre-Select
        </label>

        <Divider className={styles.divider} />

        <div className={styles.sdHeading}>Description (Optional)</div>
        <textarea
          className={styles.desBox}
          type="text"
          name="description"
          value={description}
          cols="40"
          rows="5"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <div className={styles.sdHeading}>Price</div>
        <div className={styles.priceInput}>
          $
          <input
            type="number"
            name="price"
            value={price}
            min="0"
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        <div className={styles.checkboxLabel2}>
          <label>
            <input
              type="checkbox"
              name="separateprice"
              checked={separateprice}
              onChange={(e) => setSeparatePrice(!separateprice)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
            />
            &nbsp; I want separate prices for pickup and delivery.
          </label>
        </div>

        {separateprice && (
          <div style={{ marginTop: "15px" }}>
            <div className={styles.sdHeading}>Delivery Price</div>
            <div className={styles.priceInput}>
              $
              <input
                type="number"
                name="deliveryprice"
                value={deliveryprice}
                onChange={(e) => setDeliveryPrice(e.target.value)}
              />
            </div>
          </div>
        )}

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="taxable"
            checked={taxable}
            onChange={(e) => setTaxable(!taxable)}
            style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
          />
          &nbsp; This item is taxable.
        </label>

        <Divider className={styles.divider} />

        <div className={styles.sdHeading2}>Stock and Calorie</div>

        <div className={styles.normalText}>
          Enter the stock quantity for this Add On Choice. Also, enter the
          calorie info and allergies related to this item.
        </div>

        <div className={styles.sdHeading}>Stock Quantity</div>
        <input
          className={styles.inputField2}
          name="quantity"
          type="number"
          value={stockquantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          min="0"
        />

        <div className={styles.sdHeading}>Calorie (Optional)</div>
        <input
          className={styles.inputField2}
          name="calorie"
          type="number"
          value={calorie}
          onChange={(e) => setCalorie(e.target.value)}
          min="0"
        />

        <Button className={styles.allergyBtn}>
          <AddCircleOutlineIcon sx={{ mr: 1 }} />
          Add Allergy Icon
        </Button>

        <Divider className={styles.divider} />

        <div className={styles.footerBtns}>
          <CancelButton
            className={styles.cancelBtn}
            onClick={toggleDrawer(anchor, false)}
          >
            Cancel
          </CancelButton>
          <SaveButton
            type="submit"
            onClick={toggleDrawer(anchor, false)}
            className={styles.saveBtn}
          >
            Save
          </SaveButton>
        </div>
      </form>
    </div>
  );

  return (
    <div style={{ left: "0" }}>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            className={styles.createChoiceBtn}
            onClick={toggleDrawer(anchor, true)}
          >
            <AddCircleOutlineIcon sx={{ mr: 1, color: "#852e2b" }} />
            Create New Choice
          </Button>

          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            PaperProps={{
              className: `${styles.sidebarDrawer}`,
            }}
          >
            {Sidebar(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
