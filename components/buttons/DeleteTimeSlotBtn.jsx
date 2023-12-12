"use client";

import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const baseUrl = "http://localhost:8000";

export default function DeleteTimeSlotBtn(props) {
  const time_slot_id = props.time_slot;
  const router = useRouter();

  const deleteTimeSlot = async (id) => {
    const confirmed = confirm("Are you sure to delete the Time Slot?");

    if (confirmed) {
      const res = await fetch(baseUrl + "/menus/delete_time_slot/" + id, {
        method: "DELETE",
      });
      if (res.ok) {
        router.push("../");
        router.refresh();
        toast.success("Time Slot Successfully Deleted.");
      }
    }
  };

  return (
    <IconButton
      onClick={() => deleteTimeSlot(time_slot_id)}
      sx={{ width: "36px", height: "36px" }}
    >
      <DeleteIcon
        sx={{
          fontSize: "24px",
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
