import styles from "./customer-items-page.module.css";
import SliderFolders from "./components/SliderFolders";
import FilterDrawer from "./components/filters-drawer-hook";
import Link from "next/link";

const getFolders = async (owner_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/folders/" + owner_id,
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

const getMenuCategoriesByFolder = async (owner_id, folder_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST +
        "/menus/menu_categories_folder/" +
        owner_id +
        "/" +
        folder_id,
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

const CustomerItemsPage = async ({ params }) => {
  const folders = await getFolders(params.owner_id);
  const menu_categories = await getMenuCategoriesByFolder(
    params.owner_id,
    params.folder_id
  );

  let selected_category;
  if (menu_categories.length != 0) {
    selected_category = menu_categories[0].id;
  } else {
    selected_category = null;
  }

  return (
    <>
      <div className={styles.customeritemspage}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.leftSection}>
              <Link href="../">
                <img
                  className={styles.backdivIcon}
                  alt=""
                  src="/menu/category/backdiv@2x.png"
                />
              </Link>
              <div className={styles.resturantname}>
                {params.resturant_name}
              </div>
            </div>
            <div className={styles.rightSection}>
              <img
                className={styles.searchicon}
                alt=""
                src="/menu/category/searchicon@2x.png"
              />
              <FilterDrawer />
            </div>
          </div>
        </div>

        <SliderFolders
          owner_id={params.owner_id}
          table_no={params.table_no}
          selected_folder={params.folder_id}
          folders={folders}
          selected_category={selected_category}
        />

        <div className={styles.itemnamediv}>
          <b className={styles.categoryname}>No Categories in this Folder</b>
        </div>
      </div>
    </>
  );
};

export default CustomerItemsPage;
