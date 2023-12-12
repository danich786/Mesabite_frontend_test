"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "next/navigation";

const DeleteMenuItemButton = (props) => {
  const menu_item_id = props.menu_item;
  const router = useRouter();

  const removeMenuItem = async (id) => {
    const confirmed = confirm("Are you sure to delete the Menu Item?");

    if (confirmed) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/menus/delete_menu_item/" + id,
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
      onClick={() => removeMenuItem(menu_item_id)}
      sx={{ width: "36px", height: "36px" }}
    >
      <DeleteIcon
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

export default DeleteMenuItemButton;
