"use client";

import styles from "./sidebar.module.css";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import * as React from "react";
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { CancelButton, SaveButton } from "@/components/utils/CustomButtons";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function RightSidebar(props) {
  const router = useRouter();
  const [groupName, setName] = useState("");
  const [hidegroup, setHideGroup] = useState(false);
  const [groupType, setGroupType] = useState("Normal");
  const [required, setRequired] = useState(true);
  const [min_choices, setminchoices] = useState();
  const [max_choices, setmaxchoices] = useState();
  const [freechoice, setFreeChoice] = useState(false);
  const [free_choices, setfreechoices] = useState();

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

  const add_AddsOnGroup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/menus/add_addons_group/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: props.user_id,
            name: groupName,
            hidden: hidegroup,
            group_type: groupType,
            mandatory: required,
            min_choices: min_choices,
            max_choices: max_choices,
            free_choices: free_choices,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to add Add On group. Please try again.");
      }
      router.refresh();
      toast.success("Add On Group Suuccessfully Added!");
    } catch (error) {
      console.log(error);
    }
  };

  // SideBar Body

  const Sidebar = (anchor) => (
    <div className={styles.sidebarMain}>
      <div className={styles.headerText}>
        Add New Add On Group
        <CloseIcon
          onClick={toggleDrawer(anchor, false)}
          sx={{ marginLeft: "auto" }}
        />
      </div>

      <form onSubmit={add_AddsOnGroup}>
        <div className={styles.sdHeading}>Name</div>
        <input
          name="name"
          type="text"
          value={groupName}
          className={styles.inputField}
          onChange={(e) => setName(e.target.value)}
          autoComplete="given-name"
          required
        />
        <div className={styles.inputRes}>0/50</div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="hidegroup"
            checked={hidegroup}
            onChange={(e) => setHideGroup(!hidegroup)}
            style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
          />
          &nbsp; Hide from your Menu
        </label>

        <Divider className={styles.divider} />

        <div className={styles.sdHeading}>Add On Group Type</div>

        <div>
          <label className={styles.radioBtns}>
            <input
              type="radio"
              name="grouptype"
              value="Normal"
              onClick={(e) => setGroupType(e.target.value)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
              defaultChecked
            />
            &nbsp; Normal Add On
          </label>
          <label style={{ marginRight: "5%" }}>
            <input
              type="radio"
              name="grouptype"
              value="Extra"
              onClick={(e) => setGroupType(e.target.value)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
            />
            &nbsp; Extra Add On
          </label>
          <label>
            <input
              type="radio"
              name="grouptype"
              value="Multi"
              onClick={(e) => setGroupType(e.target.value)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
            />
            &nbsp; Multi Add On
          </label>
        </div>

        <Divider className={styles.divider} />

        <div className={styles.sdHeading}>
          Is this Add On group Optional or Mandatory?
        </div>

        <ButtonGroup
          className={styles.btnGroup}
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            style={{
              backgroundColor: required ? "#fbf3db" : "#852e2b",
              color: required ? "grey" : "white",
              borderColor: "grey",
              width: "50%",
            }}
            onClick={() => setRequired(false)}
          >
            Optional
          </Button>
          <Button
            style={{
              backgroundColor: required ? "#852e2b" : "#fbf3db",
              color: required ? "white" : "grey",
              borderColor: "grey",
              width: "50%",
            }}
            onClick={() => setRequired(true)}
          >
            Required
          </Button>
        </ButtonGroup>

        {required && (
          <>
            <div className={styles.sdHeading}>Minimum Choices</div>
            <input
              className={styles.inputField2}
              name="min_choices"
              type="number"
              value={min_choices}
              min="0"
              onChange={(e) => setminchoices(e.target.value)}
            />
          </>
        )}

        <div className={styles.sdHeading}>Maximum Choices</div>
        <input
          className={styles.inputField2}
          name="max_choices"
          type="number"
          value={max_choices}
          min="0"
          onChange={(e) => setmaxchoices(e.target.value)}
        />

        <Divider className={styles.divider} />

        <div className={styles.radioBtns}>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="freechoice"
              checked={freechoice}
              onChange={(e) => setFreeChoice(!freechoice)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
            />
            &nbsp; I want to set <b>free choices</b> for this group
          </label>
        </div>

        {freechoice && (
          <>
            <div className={styles.sdHeading}>Free Choices Number</div>
            <input
              className={styles.inputField2}
              name="free_choices"
              type="number"
              value={free_choices}
              min="0"
              onChange={(e) => setfreechoices(e.target.value)}
            />
          </>
        )}

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
            className={styles.createGroupBtn}
            onClick={toggleDrawer(anchor, true)}
          >
            <AddCircleOutlineIcon sx={{ mr: 1, color: "#852e2b" }} />
            Create New Add On Group
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
