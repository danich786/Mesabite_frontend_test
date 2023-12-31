"use client";

import "./page.css";

import * as React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";
import AxiosInstance from "@/components/utils/Axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { CancelButton, SaveButton } from "@/components/utils/CustomButtons";

export default function AddMenuCategory({ params }) {
  const router = useRouter();

  const [folders, setFolders] = useState([]);

  useEffect(() => {
    try {
      axios
        .get(process.env.NEXT_PUBLIC_HOST + "/menus/folders/" + params.user_id)
        .then((res) => {
          setFolders(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [catfolder, setCatFolder] = useState(null);

  const defaultValues = {
    name: "",
    description: "",
    image: null,
    catfolder: "",
  };

  const { handleSubmit } = useForm({ defaultValues: defaultValues });

  const onSubmit = (data) => {
    console.log(catfolder);
    AxiosInstance.post("menus/add_menu_category/", {
      user: params.user_id,
      name: name,
      description: description,
      image: image,
      folder: catfolder,
    }).then((res) => {
      router.push(`../${params.user_id}`);
      router.refresh();
      toast.success("Menu Category has been created successfully.");
    });
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     if (!name) {
  //       alert("Name of the Menu category is required.");
  //       return;
  //     }

  //     try {
  //       const res = await fetch(baseUrl + "/menus/add_menu_category/", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "multipart/form-data",
  //         },
  //         body: data,
  //       });

  //       if (res.ok) {
  //         router.push("/menus");
  //         router.refresh();
  //         toast.success("Menu Category has been created.");
  //       } else {
  //         throw new Error("Failed to add new menu category.");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div className="main">
      <div className="text-top">Add New Category</div>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            onChange={(e) => {
              if (e.target.files[0]) {
                if (e.target.files[0].size > 1 * 1000 * 1024) {
                  alert(
                    "Please choose a different image with size less than 1MB"
                  );
                } else {
                  setImage(e.target.files[0]);
                }
              }
            }}
          />

          <div className="image-box-text">
            <b>Click here to uplaod an image</b>
          </div>
        </div>
        <div className="name-text">Name</div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="name-input"
        />
        <div className="limit">0/50</div>
        <div className="cat-fol-text">Category Folder (Optional)</div>

        <div>
          <select
            onChange={(e) => setCatFolder(e.target.value)}
            name="category_folder"
            className="select-cat-fol"
          >
            <option value="null"></option>
            {folders.map((folder, index) => {
              return (
                <option value={folder.id} key={index}>
                  {folder.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="des-text">Description (Optional)</div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          cols="40"
          rows="5"
          className="des-box"
        ></textarea>
        <div style={{ padding: "40px" }}></div>
        <div style={{ display: "flex", borderTop: "1px solid #c8c4bc" }}>
          <CancelButton className="cancel-button" href={`../${params.user_id}`}>
            Cancel
          </CancelButton>
          <SaveButton type="submit" className="save-button">
            Save
          </SaveButton>
        </div>
      </form>
    </div>
  );
}
