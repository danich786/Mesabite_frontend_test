"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "next/navigation";

const DeleteAddsOnGroupBtn2 = (props) => {
  const group_id = props.group_id;
  const router = useRouter();

  const removeGroup = async (group_id) => {
    const confirmed = confirm("Are you sure to delete the Add On Group?");

    if (confirmed) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST + "/menus/delete_addons_group/" + group_id,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.push("../");
        router.refresh();
      }
    }
  };

  return (
    <IconButton
      onClick={() => removeGroup(group_id)}
      sx={{ width: "36px", height: "36px" }}
    >
      <DeleteIcon
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

export default DeleteAddsOnGroupBtn2;
