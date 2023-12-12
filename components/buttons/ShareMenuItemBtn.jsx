"use client";

import { IconButton } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

export default function ShareMenuItemBtn() {
  return (
    <IconButton
      onClick={() => alert("Share functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <ShareIcon
        sx={{
          fontSize: "28px",
          backgroundColor: "#8d3a36",
          border: "3px solid #8d3a36",
          borderRadius: "50%",
          color: "white",
          mt: 1,
          ml: 2,
        }}
      />
    </IconButton>
  );
}
