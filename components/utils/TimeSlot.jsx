"use client";

import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DeleteTimeSlotBtn } from "@/components/buttons/index";

export default function TimeSlot(time_slot) {
  const [time_from, setTimeFrom] = useState(
    dayjs(`2022-04-17T${time_slot.time_from}`)
  );
  const [time_to, setTimeTo] = useState(
    dayjs(`2022-04-17T${time_slot.time_to}`)
  );
  const [monday, setMonday] = useState(time_slot.monday);
  const [tuesday, setTuesday] = useState(time_slot.tuesday);
  const [wednesday, setWednesday] = useState(time_slot.wednesday);
  const [thursday, setThursday] = useState(time_slot.thursday);
  const [friday, setFriday] = useState(time_slot.friday);
  const [satursday, setSatursday] = useState(time_slot.satursday);
  const [sunday, setSunday] = useState(time_slot.sunday);

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
    <div className="time-slots-container">
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
      <DeleteTimeSlotBtn time_slot={time_slot.id} />
    </div>
  );
}
