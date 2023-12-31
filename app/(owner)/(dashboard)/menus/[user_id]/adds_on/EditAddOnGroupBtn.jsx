"use client";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditAddOnGroupBtn = () => {
  return (
    <IconButton
      onClick={() => alert("Edit functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <EditIcon
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

export default EditAddOnGroupBtn;
