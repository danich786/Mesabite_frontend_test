import styles from "./page.module.css";

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

const getFolders = async (user_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/folders/" + user_id,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error while fetching category folders from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading folders: ", error);
  }
};

const getMenuCategories = async (user_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_categories/" + user_id,
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

const Menus = async ({ params }) => {
  const folders = await getFolders(params.user_id);
  const menu_categories = await getMenuCategories(params.user_id);

  return (
    <div className={styles.main}>
      <div className={styles.menuText}>
        <strong>YOUR MENU</strong>
      </div>

      <div className={styles.searchBox}>
        <SearchIcon className={styles.searchIcon} />
        <TextField
          sx={{ mb: 0.2 }}
          variant="standard"
          label="SEARCH MENU"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ style: { color: "#9c534d" } }}
        />
      </div>

      <div className={styles.createFolder}>
        <AddCircleOutlineIcon sx={{ mr: 1, color: "#852e2b", ml: 1 }} />
        <Link
          href={`/menus/${params.user_id}/create_category_folder`}
          style={{ textDecoration: "none" }}
        >
          <div style={{ fontSize: "18px", color: "#852e2b" }}>
            <strong>Create Category Folder</strong>
          </div>
        </Link>
      </div>

      {folders.map((folder, index) => (
        <div key={index} className={styles.foodBox}>
          <div className={styles.foodBoxHeader}>
            <MenuIcon sx={{ ml: 1, mt: 2, mr: 2, color: "#8d3a36" }} />
            <div className={styles.folderText}> {folder.name} </div>
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
                    className={styles.menuBox}
                    style={{
                      backgroundImage: `url(${menu_category.image})`,
                    }}
                  >
                    <div className={styles.boxFooter}>
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
                            href={`${params.user_id}/menu_category/${menu_category.name}/${menu_category.id}`}
                            style={{
                              textDecoration: "none",
                              color: "white",
                              fontWeight: "bold",
                            }}
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
            <div key={index} className={styles.noFolder}>
              <div className={styles.text}>Menu Categories</div>
              <div
                className={styles.menuBox2}
                style={{
                  backgroundImage: `url(${menu_category.image})`,
                }}
              >
                <div className={styles.menuCatFooter}>
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
                    <Link
                      href={`${params.user_id}/menu_category/${menu_category.name}/${menu_category.id}`}
                      style={{
                        fontSize: "22px",
                        color: "white",
                        textAlign: "left",
                        marginLeft: "10px",
                        fontWeight: "bold",
                      }}
                    >
                      {menu_category.name}
                    </Link>
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

      <div className={styles.addMenuCategoryBox}>
        <Link
          href={`${params.user_id}/add_menu_category`}
          style={{ textDecoration: "none" }}
        >
          <AddCircleOutlineIcon className={styles.addMenuBoxIcon} />
          <div className={styles.addMenuBoxText}>
            ADD NEW CATEGORY TO YOUR MENU
          </div>
        </Link>
      </div>

      <div className={styles.homeFooter}></div>
    </div>
  );
};

export default Menus;
