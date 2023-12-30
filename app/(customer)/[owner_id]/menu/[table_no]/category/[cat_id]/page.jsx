import styles from "../../folder/[folder_id]/customer-items-page.module.css";
import CategoriesSlider from "./components/CategoriesSlider";
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

const getMenuCategoryById = async (cat_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/get_menu_category/" + cat_id,
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

const getMenuItems = async (cat_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_items/" + cat_id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error while fetching menu items from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Menu Items: ", error);
  }
};

// #################################################################################

const CustomerItemsPage = async ({ params }) => {
  const folders = await getFolders(params.owner_id);
  const selected_category = await getMenuCategoryById(params.cat_id);
  const menu_items = await getMenuItems(params.cat_id);

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

        <CategoriesSlider
          owner_id={params.owner_id}
          table_no={params.table_no}
          selected_folder={params.folder_id}
          folders={folders}
          selected_category={selected_category}
        />

        <div className={styles.itemnamediv}>
          <b className={styles.categoryname}>{selected_category.name}</b>
          <div className={styles.namedivtext}>
            {selected_category.description}
          </div>
        </div>
        <div className={styles.itemscontainer}>
          {menu_items.map((menu_item, index) => {
            if (menu_item.availability == "A") {
              if (!menu_item.new_item && !menu_item.featured) {
                return (
                  <div key={index} className={styles.itemcard}>
                    <div className={styles.cardimage}>
                      <img
                        className={styles.image1Icon}
                        alt=""
                        src={menu_item.image}
                      />
                    </div>
                    <div className={styles.itemdetailsbox}>
                      <button className={styles.itemname21}>
                        {menu_item.name}
                      </button>
                      <div className={styles.itemdes2}>
                        <p className={styles.unaCombinacinunaCombinacin}>
                          {menu_item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else if (menu_item.new_item || menu_item.featured) {
                return (
                  <div key={index} className={styles.itemcard}>
                    <div className={styles.cardimage}>
                      <img
                        className={styles.image1Icon}
                        alt=""
                        src={menu_item.image}
                      />
                    </div>
                    <div className={styles.itemdetailsbox}>
                      <button className={styles.itemname21}>
                        {menu_item.name}
                      </button>
                      <div className={styles.itemdes2}>
                        <p className={styles.unaCombinacinunaCombinacin}>
                          {menu_item.description}
                        </p>
                      </div>
                    </div>
                    {menu_item.new_item && (
                      <div className={styles.new}>
                        <b className={styles.soldouttext}>Sold Out</b>
                      </div>
                    )}
                    {menu_item.featured && (
                      <div className={styles.featured}>
                        <b className={styles.soldouttext}>Sold Out</b>
                      </div>
                    )}
                  </div>
                );
              }
            } else if (
              menu_item.availability == "S" ||
              menu_item.availability == "X"
            ) {
              return (
                <div key={index} className={styles.soldoutitemcard}>
                  <div className={styles.soldoutimage}>
                    <img
                      className={styles.image1Icon}
                      alt=""
                      src="/frappevirselis-1@2x.png"
                    />
                  </div>
                  <div className={styles.soldoutitemdetailsbox}>
                    <b className={styles.soldouttext}>{menu_item.name}</b>
                    <div className={styles.itemdes3}>
                      <p className={styles.unaCombinacinunaCombinacin}>
                        {menu_item.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles.soldouticon}>
                    <b className={styles.soldouttext}>Sold Out</b>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CustomerItemsPage;