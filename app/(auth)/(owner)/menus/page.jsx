import * as React from "react";
import Link from "next/link";
import TextField from "@mui/material/TextField";

import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";

import { ItemButton } from "@/components/utils/CustomButtons";

import {
  SettingsFolderButton,
  EditFolderButton,
  DeleteFolderButton,
} from "@/components/buttons/index";

import {
  SettingsMenuCategoryButton,
  EditMenuCategoryButton,
  DeleteMenuCategoryButton,
} from "@/components/buttons/index";

import "./page.css";

const getFolders = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_HOST + "/menus/folders", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Error while fetching category folders from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading folders: ", error);
  }
};

const getMenuCategories = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_categories",
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error while fetching menu categories from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Menu Categories: ", error);
  }
};

const Menus = async () => {
  const folders = await getFolders();
  const menu_categories = await getMenuCategories();

  return (
    <div className="main-body">
      <div className="menu-text">
        <strong>YOUR MENU</strong>
      </div>

      <div className="search-box">
        <SearchIcon className="search-icon" />
        <TextField
          sx={{ mb: 0.2 }}
          variant="standard"
          label="SEARCH MENU"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ style: { color: "#9c534d" } }}
        />
      </div>

      <div className="create-folder">
        <AddCircleOutlineIcon sx={{ mr: 1, color: "#852e2b", ml: 1 }} />
        <Link
          href="/menus/create_category_folder"
          style={{ textDecoration: "none" }}
        >
          <div style={{ fontSize: "18px", color: "#852e2b" }}>
            <strong>Create Category Folder</strong>
          </div>
        </Link>
      </div>

      {folders.map((folder, index) => (
        <div key={index} className="food-box">
          <div className="header">
            <MenuIcon sx={{ ml: 1, mt: 2, mr: 2, color: "#8d3a36" }} />
            <div className="folder-text"> {folder.name} </div>
            <div style={{ textAlign: "right" }}>
              <SettingsFolderButton />
              <EditFolderButton />
              <DeleteFolderButton folder={folder.id} />
            </div>
          </div>
          {menu_categories.map((menu_category, index) => {
            if (folder.id == menu_category.folder) {
              return (
                <>
                  <div
                    className="menu-box"
                    style={{
                      backgroundImage: `url(${
                        process.env.NEXT_PUBLIC_HOST + menu_category.image
                      })`,
                    }}
                  >
                    <div className="menu-cat-footer">
                      <div style={{ display: "flex" }}>
                        <ItemButton
                          type="submit"
                          variant="contained"
                          style={{
                            backgroundColor: "#fecd00",
                            color: "#852e2b",
                          }}
                          sx={{
                            mt: "10px",
                            ml: "20%",
                            mr: "25%",
                            p: 0,
                            width: "20%",
                            height: "15%",
                          }}
                        >
                          5 ITEMS
                        </ItemButton>
                        <div style={{ display: "flex", textAlign: "right" }}>
                          <SettingsMenuCategoryButton />
                          <EditMenuCategoryButton />
                          <DeleteMenuCategoryButton folder={menu_category.id} />
                        </div>
                      </div>
                      <div style={{ marginTop: "-10px" }}>
                        <div
                          style={{
                            fontSize: "22px",
                            color: "white",
                            textAlign: "left",
                            marginLeft: "10px",
                          }}
                        >
                          <Link
                            href={`menus/menu_category/${menu_category.name}/${menu_category.id}`}
                          >
                            {menu_category.name}
                          </Link>
                        </div>
                        <div
                          style={{
                            color: "white",
                            fontSize: "14px",
                            textAlign: "left",
                            marginLeft: "10px",
                            marginBottom: "5px",
                          }}
                        >
                          {menu_category.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      ))}

      {menu_categories.map((menu_category, index) => {
        if (menu_category.folder == null) {
          return (
            <div key={index} className="no-folder">
              <div className="text">Menu Categories</div>
              <div
                className="menu-box"
                style={{
                  backgroundImage: `url(${
                    process.env.NEXT_PUBLIC_HOST + menu_category.image
                  })`,
                }}
              >
                <div className="menu-cat-footer">
                  <div style={{ display: "flex" }}>
                    <ItemButton
                      type="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "#fecd00",
                        color: "#852e2b",
                      }}
                      sx={{
                        mt: "10px",
                        ml: "20%",
                        mr: "25%",
                        p: 0,
                        width: "20%",
                        height: "15%",
                      }}
                    >
                      5 ITEMS
                    </ItemButton>
                    <div style={{ display: "flex", textAlign: "right" }}>
                      <SettingsMenuCategoryButton />
                      <EditMenuCategoryButton />
                      <DeleteMenuCategoryButton folder={menu_category.id} />
                    </div>
                  </div>
                  <div style={{ marginTop: "-10px" }}>
                    <div
                      style={{
                        fontSize: "22px",
                        color: "white",
                        textAlign: "left",
                        marginLeft: "10px",
                      }}
                    >
                      {menu_category.name}
                    </div>
                    <div
                      style={{
                        color: "white",
                        fontSize: "14px",
                        textAlign: "left",
                        marginLeft: "10px",
                        marginBottom: "5px",
                      }}
                    >
                      {menu_category.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}

      <div className="add-menu-category-box">
        <Link
          href="/menus/add_menu_category"
          style={{ textDecoration: "none" }}
        >
          <AddCircleOutlineIcon className="add-menu-box-icon" />
          <div className="add-menu-box-text">ADD NEW CATEGORY TO YOUR MENU</div>
        </Link>
      </div>

      <div className="home-footer"></div>
    </div>
  );
};

export default Menus;
