"use client";

import "./page.css";

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AxiosInstance from "@/components/utils/Axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { CancelButton, SaveButton } from "@/components/utils/CustomButtons";

export default function CreateCategoryFolder() {
  const router = useRouter();

  const defaultValues = {
    name: "",
    image: null,
  };

  const { register, handleSubmit } = useForm({ defaultValues: defaultValues });

  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    console.log(image);
    AxiosInstance.post("menus/create_category_folder/", {
      name: data.name,
      image: image,
    }).then((res) => {
      router.push("/menus");
      router.refresh();
      Swal.fire("success", "Menu folder has been created successfully.");
    });
  };

  return (
    <div className="main">
      <div className="text-top">Create New Category Folder</div>

      <div className="text-des">
        <div style={{ color: "#c96f44" }}>
          Here you can create Category Folder that
        </div>
        <div style={{ color: "#bf5627" }}>
          includes other categories under it
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name-text">Name</div>
        <div className="name-input">
          <TextField
            {...register("name", { required: "Folder name is required" })}
            sx={{ mb: 1 }}
            variant="standard"
            fullWidth
            InputProps={{ disableUnderline: true }}
          />
        </div>
        <div className="limit">0/50</div>
        <div className="image-text">Image (Optional)</div>
        <div className="image-box">
          <Image
            src="/upload_icon.svg"
            alt="icon_not_found"
            width="100"
            height="100"
            style={{
              color: "#8d3a36",
              marginTop: "20px",
              marginBottom: "40px",
              marginLeft: "35%",
            }}
          />

          <input
            type="file"
            onChange={(event) => {
              if (event.target.files[0]) {
                if (event.target.files[0].size > 1 * 1000 * 1024) {
                  alert(
                    "Please choose a different image with size less than 1MB"
                  );
                } else {
                  setImage(event.target.files[0]);
                }
              }
            }}
          />

          <div className="image-box-text">Click here to uplaod an image</div>
        </div>

        <div style={{ padding: "80px" }}></div>

        <Box sx={{ display: "flex", borderTop: "1px solid #c8c4bc" }}>
          <CancelButton href="/menus" className="cancel-button">
            Cancel
          </CancelButton>

          <SaveButton type="submit" className="save-button">
            Save
          </SaveButton>
        </Box>
      </form>
    </div>
  );
}
