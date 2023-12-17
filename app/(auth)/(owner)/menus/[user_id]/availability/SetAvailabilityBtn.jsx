import styles from "./page.module.css";

import { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

export default function SetAvailabilityBtn(props) {
  const [availability, setAvailability] = useState(props.avail);

  const changeAvailability_1 = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST +
        "/menus/change_item_availability/" +
        props.item_id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ availability: "A" }),
      }
    );
    if (!res.ok) {
      toast.error("Failed. Please refresh and try again");
    }
  };

  const changeAvailability_2 = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST +
        "/menus/change_item_availability/" +
        props.item_id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ availability: "S" }),
      }
    );
    if (!res.ok) {
      toast.error("Failed. Please refresh and try again");
    }
  };

  const changeAvailability_3 = async () => {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST +
        "/menus/change_item_availability/" +
        props.item_id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ availability: "X" }),
      }
    );
    if (!res.ok) {
      toast.error("Failed. Please refresh and try again");
    }
  };

  return (
    <div className={styles.btnGroup}>
      <Button
        onClick={() => {
          setAvailability("A");
          changeAvailability_1();
        }}
        style={{
          backgroundColor: availability == "A" ? "#852e2b" : "#fbf3db",
          color: availability == "A" ? "white" : "grey",
          width: "20%",
          borderRadius: "1.5rem",
          fontSize: "12px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        Available
      </Button>
      <Button
        onClick={() => {
          setAvailability("S");
          changeAvailability_2();
        }}
        style={{
          backgroundColor: availability == "S" ? "#852e2b" : "#fbf3db",
          color: availability == "S" ? "white" : "grey",
          width: "40%",
          borderRadius: "1.5rem",
          fontSize: "12px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        Sold Out For Today
      </Button>
      <Button
        onClick={() => {
          setAvailability("X");
          changeAvailability_3();
        }}
        style={{
          backgroundColor: availability == "X" ? "#852e2b" : "#fbf3db",
          color: availability == "X" ? "white" : "grey",
          width: "40%",
          borderRadius: "1.5rem",
          fontSize: "12px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
      >
        Sold Out Indefinitely
      </Button>
    </div>
  );
}
