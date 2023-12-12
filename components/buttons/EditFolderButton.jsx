"use client";

import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const EditFolderButton = () => {
  return (
    <IconButton
      onClick={() => alert("Edit functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <EditIcon
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
};

export default EditFolderButton;
