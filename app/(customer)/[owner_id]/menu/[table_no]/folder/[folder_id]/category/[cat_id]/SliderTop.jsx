"use client";

import { useState } from "react";
import styles from "../../customer-items-page.module.css";
import { useRouter } from "next/navigation";

export default function SliderTop(props) {
  const router = useRouter();

  const folders = props.folders;

  const categories = props.categories;

  return (
    <>
      <div className={styles.slidercontainer}>
        <div className={styles.categories}>
          {folders.map((folder, index) => {
            if (folder.visibility) {
              return (
                <button
                  key={index}
                  onClick={() => {
                    if (folder.id != props.selected_folder) {
                      router.push(`../../${folder.id}`);
                    }
                  }}
                  className={styles.category}
                  style={{
                    backgroundColor:
                      folder.id == props.selected_folder
                        ? "#ffcd00"
                        : "transparent",
                    border: folder.id == props.selected_folder ? "none" : "",
                  }}
                >
                  <b className={styles.categoryname}>{folder.name}</b>
                </button>
              );
            }
          })}
        </div>
      </div>

      <div className={styles.slidercontainer}>
        <div className={styles.items}>
          {categories.map((category, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  if (category.id != props.selected_category) {
                    router.push(`./${category.id}`);
                  }
                }}
                className={styles.item}
                style={{
                  backgroundColor:
                    category.id == props.selected_category
                      ? "#ffcd00"
                      : "transparent",
                  border: category.id == props.selected_category ? "none" : "",
                }}
              >
                <b className={styles.categoryname}>{category.name} </b>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
