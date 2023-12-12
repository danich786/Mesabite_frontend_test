"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "next/navigation";

const DeleteMenuCategoryButton = (props) => {
  const folder_id = props.folder;
  const router = useRouter();

  const removeFolder = async (id) => {
    const confirmed = confirm("Are you sure to delete the Menu Category?");

    if (confirmed) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/menus/delete_menu_category/" + id,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <IconButton
      onClick={() => removeFolder(folder_id)}
      sx={{ width: "36px", height: "36px" }}
    >
      <DeleteIcon
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

export default DeleteMenuCategoryButton;
