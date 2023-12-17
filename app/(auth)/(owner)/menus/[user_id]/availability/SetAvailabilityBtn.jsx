import styles from "./page.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function SetAvailabilityBtn(props) {
  const router = useRouter();
  const [availability, setAvailability] = useState(props.avail);

  const changeAvailability = async (availability_cat) => {
    setAvailability(availability_cat);

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST +
          "/menus/change_item_availability/" +
          props.item_id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ availability }),
        }
      );
      if (!res.ok) {
        toast.error("Failed. Please refresh and try again");
      } else {
        console.log("Availability Changed Successffully");
      }
    } catch (error) {
      toast.error("Failed. Please refresh and try again.");
    }
  };

  return (
    <div className={styles.btnGroup}>
      <Button
        style={{
          backgroundColor: availability == "A" ? "#852e2b" : "#fbf3db",
          color: availability == "A" ? "white" : "grey",
          width: "20%",
          borderRadius: "1.5rem",
          fontSize: "12px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
        onClick={() => changeAvailability("A")}
      >
        Available
      </Button>
      <Button
        style={{
          backgroundColor: availability == "S" ? "#852e2b" : "#fbf3db",
          color: availability == "S" ? "white" : "grey",
          width: "40%",
          borderRadius: "1.5rem",
          fontSize: "12px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
        onClick={() => changeAvailability("S")}
      >
        Sold Out For Today
      </Button>
      <Button
        style={{
          backgroundColor: availability == "X" ? "#852e2b" : "#fbf3db",
          color: availability == "X" ? "white" : "grey",
          width: "40%",
          borderRadius: "1.5rem",
          fontSize: "12px",
          paddingRight: "0px",
          paddingLeft: "0px",
        }}
        onClick={() => changeAvailability("X")}
      >
        Sold Out Indefinitely
      </Button>
    </div>
  );
}
