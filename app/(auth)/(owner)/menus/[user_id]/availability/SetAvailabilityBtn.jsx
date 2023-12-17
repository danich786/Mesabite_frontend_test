import styles from "./page.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";

export default function SetAvailabilityBtn(props) {
  const [availability, setAvailability] = useState(props.avail);

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
        onClick={() => setAvailability("A")}
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
        onClick={() => setAvailability("S")}
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
        onClick={() => setAvailability("X")}
      >
        Sold Out Indefinitely
      </Button>
    </div>
  );
}
