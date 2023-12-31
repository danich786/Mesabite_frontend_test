"use client";

import { useState } from "react";
import AxiosInstance from "@/components/utils/Axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IconButton } from "@mui/material";
import FileCopyIcon from "@mui/icons-material/FileCopy";

export default function DuplicateAddsOnGroupBtn(props) {
  // const {
  //   menu_cat,
  //   image,
  //   name,
  //   des,
  //   price,
  //   deliveryprice,
  //   quantity,
  //   minquantity,
  //   maxquantity,
  //   hidequantity,
  //   lockquantity,
  //   calorie,
  //   featured,
  //   newitem,
  //   show_add_ons,
  // } = props;

  // const router = useRouter();

  // const DuplicateMenuItem = () => {
  //   AxiosInstance.post("menus/add_menu_item/", {
  //     menu_category: menu_cat,
  //     visibility: "True",
  //     image: "",
  //     name: name,
  //     description: des,
  //     price: price,
  //     delivery_price: deliveryprice,
  //     quantity: quantity,
  //     min_quantity: minquantity,
  //     max_quantity: maxquantity,
  //     hide_quantity: hidequantity,
  //     lock_quantity: lockquantity,
  //     calorie: calorie,
  //     featured: featured,
  //     new_item: newitem,
  //     show_add_ons: show_add_ons,
  //   }).then((res) => {
  //     router.push("");
  //     router.refresh();
  //     toast.success("Menu Item has been duplicated.");
  //   });
  // };

  return (
    <IconButton
      onClick={() => alert("Functionality not added yet")}
      sx={{ width: "36px", height: "36px" }}
    >
      <FileCopyIcon
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
}
