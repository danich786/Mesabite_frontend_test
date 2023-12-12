"use client";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditMenuCategoryButton = () => {
  return (
    <IconButton
      onClick={() => alert("Edit functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <EditIcon
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

export default EditMenuCategoryButton;
