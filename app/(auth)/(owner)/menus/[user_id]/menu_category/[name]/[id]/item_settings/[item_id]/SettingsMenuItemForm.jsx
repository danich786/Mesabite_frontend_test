"use client";

import "./SettingsMenuItemForm.css";
import React from "react";
import { useState } from "react";
import { CancelButton, SaveButton } from "@/components/utils/CustomButtons";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

import TimeSlot from "@/components/utils/TimeSlot";

export default function SettingsMenuItemForm({
  cat_id,
  item_id,
  item_visibility,
  item_name,
  time_slots,
}) {
  const router = useRouter();
  const [visibility, setVisibility] = useState(item_visibility);
  const [add_time_slot, setAddTimeSlot] = useState(false);

  const [time_from, setTimeFrom] = useState(dayjs(""));
  const [time_to, setTimeTo] = useState(dayjs(""));
  const [monday, setMonday] = useState(false);
  const [tuesday, setTuesday] = useState(false);
  const [wednesday, setWednesday] = useState(false);
  const [thursday, setThursday] = useState(false);
  const [friday, setFriday] = useState(false);
  const [satursday, setSatursday] = useState(false);
  const [sunday, setSunday] = useState(false);

  const handleClick = (id) => {
    if (id == 1) {
      setMonday(!monday);
    } else if (id == 2) {
      setTuesday(!tuesday);
    } else if (id == 3) {
      setWednesday(!wednesday);
    } else if (id == 4) {
      setThursday(!thursday);
    } else if (id == 5) {
      setFriday(!friday);
    } else if (id == 6) {
      setSatursday(!satursday);
    } else if (id == 7) {
      setSunday(!sunday);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST +
          "/menus/change_menu_item_visibility/" +
          item_id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ visibility }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to hide menu item");
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/menus/add_time_slot/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            menu_item: item_id,
            time_from: `${time_from.$H}:${time_from.$m}`,
            time_to: `${time_to.$H}:${time_to.$m}`,
            monday: monday,
            tuesday: tuesday,
            wednesday: wednesday,
            thursday: thursday,
            friday: friday,
            satursday: satursday,
            sunday: sunday,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to hide menu item");
      }
      router.push("../");
      router.refresh();
      toast.success("Settings for Menu Item Successfully Updated.");
    } catch (error) {
      console.log(error);
    }
  };

  const color = "#852e2b";
  const theme = createTheme({
    components: {
      MuiIconButton: {
        styleOverrides: {
          sizeMedium: {
            color,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            color,
          },
        },
      },
    },
  });

  return (
    <div className="main">
      <form onSubmit={handleSubmit}>
        <div className="item-settings-text">Item Settings</div>
        <div className="status-text">Status</div>
        <div className="status-des">
          You can select the visibility of your menu item.
        </div>
        <div className="radio-div">
          <label>
            <input
              type="checkbox"
              className="radio-btn"
              checked={!visibility}
              onChange={(e) => setVisibility(!visibility)}
              style={{
                transform: "scale(1.3)",
                accentColor: "#852e2b",
              }}
            />
            Hide {item_name} from your menu
          </label>
        </div>
        <div className="time-text">Time Sensitive</div>
        <div className="status-des">
          You can select the time frame that you want to sell {item_name}
        </div>

        {time_slots.map((time_slot, index) => {
          return <>{TimeSlot(time_slot)}</>;
        })}

        <Button
          onClick={() => setAddTimeSlot(!add_time_slot)}
          className="add-slot-btn"
        >
          <AddCircleOutlineRoundedIcon sx={{ marginRight: "10px" }} />
          Add new time slot
        </Button>

        {add_time_slot && (
          <div className="add-time-slot-container">
            <div className="days-text">Days</div>
            <ButtonGroup
              variant="outlined"
              aria-label="outlined button group"
              className="button-group"
            >
              <Button
                className="btn"
                style={{
                  color: monday ? "white" : "#852e2b",
                  backgroundColor: monday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(1)}
              >
                M
              </Button>
              <Button
                className="btn"
                style={{
                  color: tuesday ? "white" : "#852e2b",
                  backgroundColor: tuesday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(2)}
              >
                T
              </Button>
              <Button
                className="btn"
                style={{
                  color: wednesday ? "white" : "#852e2b",
                  backgroundColor: wednesday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(3)}
              >
                W
              </Button>
              <Button
                className="btn"
                style={{
                  color: thursday ? "white" : "#852e2b",
                  backgroundColor: thursday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(4)}
              >
                T
              </Button>
              <Button
                className="btn"
                style={{
                  color: friday ? "white" : "#852e2b",
                  backgroundColor: friday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(5)}
              >
                F
              </Button>
              <Button
                className="btn"
                style={{
                  color: satursday ? "white" : "#852e2b",
                  backgroundColor: satursday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(6)}
              >
                S
              </Button>
              <Button
                className="btn"
                style={{
                  color: sunday ? "white" : "#852e2b",
                  backgroundColor: sunday ? "#852e2b" : "",
                }}
                onClick={() => handleClick(7)}
              >
                S
              </Button>
            </ButtonGroup>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <ThemeProvider theme={theme}>
                <DesktopTimePicker
                  label="From"
                  value={time_from}
                  onChange={(newValue) => setTimeFrom(newValue)}
                  className="time-picker-from"
                  renderInput={(params) => {
                    return <TextField {...params} />;
                  }}
                />
                <DesktopTimePicker
                  label="To"
                  value={time_to}
                  onChange={(newValue) => setTimeTo(newValue)}
                  className="time-picker-to"
                  renderInput={(params) => {
                    return <TextField {...params} />;
                  }}
                />
              </ThemeProvider>
            </LocalizationProvider>
          </div>
        )}

        <div className="btns-div">
          <CancelButton href="../" className="cancel-button">
            Cancel
          </CancelButton>
          <SaveButton type="submit" className="save-button">
            Save
          </SaveButton>
        </div>
      </form>
    </div>
  );
}
