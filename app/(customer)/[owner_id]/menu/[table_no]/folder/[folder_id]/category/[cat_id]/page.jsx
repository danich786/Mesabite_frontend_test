import styles from "../../customer-items-page.module.css";
import SliderTop from "./SliderTop";
import FilterDrawer from "../../components/filters-drawer-hook";
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

const getMenuItems = async (category_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_items/" + category_id,
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

// ####################################################################################

const CustomerItemsPage = async ({ params }) => {
  const folders = await getFolders(params.owner_id);
  const menu_categories = await getMenuCategoriesByFolder(
    params.owner_id,
    params.folder_id
  );
  const selected_category = await getMenuCategoryById(params.cat_id);
  const menu_items = await getMenuItems(params.cat_id);

  return (
    <>
      <div className={styles.customeritemspage}>
        <div className={styles.header}>
          <div className={styles.headerContainer}>
            <div className={styles.leftSection}>
              <Link href={`/${params.owner_id}/menu/${params.table_no}`}>
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

        <SliderTop
          owner_id={params.owner_id}
          selected_folder={params.folder_id}
          folders={folders}
          selected_category={params.cat_id}
          categories={menu_categories}
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
                  <Link
                    key={index}
                    href={`${params.cat_id}/item/${menu_item.id}`}
                    className={styles.itemcard}
                  >
                    <div className={styles.cardimage}>
                      {menu_item.image == null ? (
                        <img
                          className={styles.image1Icon}
                          alt=""
                          src="/default-pic.png"
                        />
                      ) : (
                        <img
                          className={styles.image1Icon}
                          alt=""
                          src={menu_item.image}
                        />
                      )}
                    </div>
                    <div className={styles.itemdetailsbox}>
                      <div className={styles.cafsCalienteParent}>
                        <b className={styles.itemname21}>{menu_item.name}</b>
                        <div className={styles.parent}>
                          <b className={styles.b}>{menu_item.price}</b>
                          <b className={styles.eur}>EUR</b>
                        </div>
                      </div>
                      <div className={styles.itemdes2}>
                        {menu_item.description}
                      </div>
                    </div>
                  </Link>
                );
              } else if (menu_item.new_item || menu_item.featured) {
                return (
                  <Link
                    key={index}
                    href={`${params.cat_id}/item/${menu_item.id}`}
                    className={styles.itemcard}
                  >
                    <div className={styles.cardimage}>
                      {menu_item.image == null ? (
                        <img
                          className={styles.image1Icon}
                          alt=""
                          src="/default-pic.png"
                        />
                      ) : (
                        <img
                          className={styles.image1Icon}
                          alt=""
                          src={menu_item.image}
                        />
                      )}
                    </div>

                    <div className={styles.itemdetailsbox}>
                      <div className={styles.cafsCalienteParent}>
                        <b className={styles.itemname21}>{menu_item.name}</b>
                        <div className={styles.parent}>
                          <b className={styles.b}>{menu_item.price}</b>
                          <b className={styles.eur}>EUR</b>
                        </div>
                      </div>
                      <div className={styles.itemdes2}>
                        {menu_item.description}
                      </div>
                    </div>

                    {menu_item.new_item && (
                      <div className={styles.new}>
                        <b className={styles.soldouttext}>New</b>
                      </div>
                    )}
                    {menu_item.featured && (
                      <div className={styles.featured}>
                        <b className={styles.soldouttext}>featured</b>
                      </div>
                    )}
                  </Link>
                );
              }
            } else if (
              menu_item.availability == "S" ||
              menu_item.availability == "X"
            ) {
              return (
                <Link
                  key={index}
                  href={`${params.cat_id}/item/${menu_item.id}`}
                  className={styles.soldoutitemcard}
                >
                  <div className={styles.soldoutimage}>
                    {menu_item.image == null ? (
                      <img
                        className={styles.image2Icon}
                        alt=""
                        src="/default-pic.png"
                      />
                    ) : (
                      <img
                        className={styles.image2Icon}
                        alt=""
                        src={menu_item.image}
                      />
                    )}
                  </div>

                  <div className={styles.soldoutitemdetailsbox}>
                    <div className={styles.cafsCalienteParent}>
                      <b className={styles.soldouttext}>{menu_item.name}</b>
                      <div className={styles.soldoutpriceparent}>
                        <b className={styles.b}>{menu_item.price}</b>
                        <b className={styles.eur}>EUR</b>
                      </div>
                    </div>
                    <div className={styles.itemdes3}>
                      {menu_item.description}
                    </div>
                  </div>

                  <div className={styles.soldouticon}>
                    <b className={styles.soldouttext}>Sold Out</b>
                  </div>
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default CustomerItemsPage;
