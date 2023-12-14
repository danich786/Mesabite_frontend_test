"use client";

import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const SettingsAddsOnGroupBtn = () => {
  return (
    <IconButton
      onClick={() => alert("Settings functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <SettingsIcon
        sx={{
          fontSize: "26px",
          backgroundColor: "#8d3a36",
          border: "3px solid #8d3a36",
          borderRadius: "50%",
          color: "white",
          ml: 2,
        }}
      />
    </IconButton>
  );
};

export default SettingsAddsOnGroupBtn;
