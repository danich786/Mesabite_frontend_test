"use client";

import styles from "./reserve.module.css";
import { useState } from "react";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopTimePicker } from "@mui/x-date-pickers";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { useRouter } from "next/navigation";

export default function ReservationForm1({ opening_time, closing_time }) {
  const router = useRouter();

  const [reservation_date, setReservationDate] = useState("Today");
  const [reservation_time, setReservationTime] = useState("");
  const [people, setPeople] = useState("");

  const continueReservation = () => {
    router.push("./reserve_table/enter_info");
  };

  const color = "#852e2c";
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

  // get today's date
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const third_morrow = new Date(tomorrow);
  third_morrow.setDate(third_morrow.getDate() + 1);
  const fourth_morrow = new Date(third_morrow);
  fourth_morrow.setDate(fourth_morrow.getDate() + 1);
  const fifth_morrow = new Date(fourth_morrow);
  fifth_morrow.setDate(fifth_morrow.getDate() + 1);

  const minTime = dayjs("2023-02-22T" + opening_time.slice(0, 5));
  const maxTime = dayjs("2023-02-22T" + closing_time.slice(0, 5));
  maxTime.$H = maxTime.$H - 1;

  return (
    <div className={styles.container2}>
      <b className={styles.reserveATable}>Reserve a table</b>
      <div className={styles.whenAreYouComingParent}>
        <div className={styles.whenAreYou}>When Are you coming?</div>
        <div className={styles.languagedropmenuWrapper}>
          <div className={styles.languagedropmenu}>
            {/* <div className={styles.today}>Today</div> */}
            <select
              value={reservation_date}
              name="date"
              className={styles.selectDate}
              onChange={(e) => setReservationDate(e.target.value)}
            >
              <option value={today.toDateString()}>Today</option>
              <option value={tomorrow.toDateString()}>Tomorrow</option>
              <option value={third_morrow.toDateString()}>
                {third_morrow.toDateString()}
              </option>
              <option value={fourth_morrow.toDateString()}>
                {fourth_morrow.toDateString()}
              </option>
              <option value={fifth_morrow.toDateString()}>
                {fifth_morrow.toDateString()}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div className={styles.atWhichClockParent}>
        <div className={styles.whenAreYou}>At Which Clock ?</div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <DesktopTimePicker
              value={reservation_time}
              onChange={(newValue) => setReservationTime(newValue)}
              timeSteps={{ minutes: 30 }}
              minTime={minTime}
              maxTime={maxTime}
            />
          </ThemeProvider>
        </LocalizationProvider>

        {/* <div className={styles.languagedropmenuWrapper}>
        <div className={styles.languagedropmenu}>
          <div className={styles.today}>8 : 30</div>
          <img
            className={styles.vectorIcon}
            alt=""
            src="/customer/vector@2x.png"
          />
        </div>
      </div> */}
      </div>
      <div className={styles.howManyPeopleAreComingParent}>
        <div className={styles.whenAreYou}>How Many People Are Coming?</div>
        <input
          className={styles.peopleCount}
          name="people"
          type="number"
          value={people}
          onChange={(event) => setPeople(event.target.value)}
        />
      </div>
      {reservation_date && reservation_time && people ? (
        <>
          <button
            onClick={() => continueReservation()}
            className={styles.btnLargeLongFillDefa}
            style={{ backgroundColor: "#852e2c" }}
          >
            <div className={styles.reserveNowWrapper}>
              <b className={styles.reserveNow}>Continue</b>
            </div>
          </button>
        </>
      ) : (
        <>
          <button
            onClick={() => alert("Please fill the details.")}
            className={styles.btnLargeLongFillDefa}
          >
            <div className={styles.reserveNowWrapper}>
              <b className={styles.reserveNow}>Continue</b>
            </div>
          </button>
        </>
      )}
    </div>
  );
}
