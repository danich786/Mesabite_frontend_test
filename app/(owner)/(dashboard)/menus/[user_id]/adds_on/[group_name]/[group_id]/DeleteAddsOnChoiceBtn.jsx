"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { useRouter } from "next/navigation";

const DeleteAddOnsChoiceBtn = (props) => {
  const choice_id = props.choice_id;
  const router = useRouter();

  const removeChoice = async (choice_id) => {
    const confirmed = confirm("Are you sure to delete the Add Ons Choice?");

    if (confirmed) {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST +
          "/menus/delete_addons_choice/" +
          choice_id,
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
      onClick={() => removeChoice(choice_id)}
      sx={{ width: "36px", height: "36px" }}
    >
      <DeleteIcon
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

export default DeleteAddOnsChoiceBtn;
