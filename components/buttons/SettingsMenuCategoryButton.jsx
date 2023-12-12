"use client";

import { IconButton } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

const SettingsMenuCategoryButton = () => {
  return (
    <IconButton sx={{ width: "36px", height: "36px" }}>
      <SettingsIcon
        sx={{
          fontSize: "28px",
          backgroundColor: "white",
          border: "3px solid white",
          borderRadius: "50%",
          color: "#8d3a36",
        }}
      />
    </IconButton>
  );
};

export default SettingsMenuCategoryButton;
