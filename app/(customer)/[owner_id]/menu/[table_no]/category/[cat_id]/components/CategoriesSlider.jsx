"use client";

import styles from "../../../folder/[folder_id]/customer-items-page.module.css";
import { useRouter } from "next/navigation";

export default function CategoriesSlider(props) {
  const router = useRouter();

  const folders = props.folders;

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
                      router.push(`../folder/${folder.id}`);
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
          <button
            className={styles.item}
            style={{ backgroundColor: "#ffcd00" }}
          >
            <b className={styles.categoryname}>
              {props.selected_category.name}
            </b>
          </button>
        </div>
      </div>
    </>
  );
}
