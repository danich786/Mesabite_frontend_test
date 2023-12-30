"use client";

import styles from "../customer-items-page.module.css";
import { useRouter } from "next/navigation";

export default function SliderFolders(props) {
  const router = useRouter();

  const folders = props.folders;

  let selected_category = props.selected_category;

  if (selected_category) {
    router.push(
      `/${props.owner_id}/menu/${props.table_no}/folder/${props.selected_folder}/category/${props.selected_category}`
    );
  }

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
                      router.push(`./${folder.id}`);
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
    </>
  );
}
