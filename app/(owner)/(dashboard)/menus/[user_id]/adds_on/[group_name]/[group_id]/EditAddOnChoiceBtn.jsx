"use client";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditAddOnsChoiceBtn = () => {
  return (
    <IconButton
      onClick={() => alert("Edit functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <EditIcon
        sx={{
          fontSize: "24px",
          backgroundColor: "#8d3a36",
          border: "3px solid #8d3a36",
          borderRadius: "50%",
          color: "white",
          ml: 2,
          mb: 1.5,
        }}
      />
    </IconButton>
  );
};

export default EditAddOnsChoiceBtn;
