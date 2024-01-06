import styles from "./menu.module.css";
import MenuDrawerhook from "./components/menu-drawer-hook";
import CatogeryContainer1 from "./components/catogery-container1";
import CartSlider from "./CartSlider";
import Link from "next/link";

const getResturantOwner = async (owner_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/get_user/" + owner_id,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error while fetching Owner");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading User: ", error);
  }
};

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

const getMenuCategories = async (owner_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_categories/" + owner_id,
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

const Menu = async ({ params }) => {
  const owner = await getResturantOwner(params.owner_id);
  const folders = await getFolders(params.owner_id);
  const menu_categories = await getMenuCategories(params.owner_id);

  return (
    <div className={styles.menu1}>
      <div className={styles.header}>
        <div className={styles.pecatom}>{owner.resturant_name}</div>
        <div className={styles.headerInner}>
          <MenuDrawerhook owner={owner} />
        </div>
      </div>
      <div className={styles.orderoption}>
        <div className={styles.optiontable}>
          <div className={styles.esteMenEs}>Este menú es para</div>
          <b className={styles.esteMenEs}>{params.table_no}</b>
        </div>
        <Link href="../order_type" className={styles.buttonChange}>
          Change
        </Link>
      </div>
      <div className={styles.titlecontainer}>
        <b className={styles.heading1}>Menú</b>
        <img className={styles.frameIcon} alt="" src="/menu/frame@2x.png" />
      </div>

      {/* Folders Container */}
      <div className={styles.folderscontainer}>
        {folders.map((folder, index) => {
          if (folder.visibility) {
            return (
              <div key={index} className={styles.catogerycontainer2Wrapper}>
                <Link
                  href={`${params.table_no}/folder/${folder.id}`}
                  className={styles.catogerycontainer2}
                >
                  <div className={styles.imagefream}>
                    {folder.image == null ? (
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src="/default-pic.png"
                      />
                    ) : (
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src={folder.image}
                      />
                    )}
                  </div>

                  <div className={styles.frameParent}>
                    <div className={styles.burgerWrapper}>
                      <div className={styles.burger}>{folder.name}</div>
                    </div>
                    <div className={styles.itemdes2}>{folder.description}</div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
        {menu_categories.map((menu_category, index) => {
          if (menu_category.folder == null) {
            return (
              <div key={index} className={styles.catogerycontainer2Wrapper}>
                <Link
                  href={`${params.table_no}/category/${menu_category.id}`}
                  className={styles.catogerycontainer2}
                >
                  <div className={styles.imagefream}>
                    {menu_category.image == null ? (
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src="/default-pic.png"
                      />
                    ) : (
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src={menu_category.image}
                      />
                    )}
                  </div>

                  <div className={styles.frameParent}>
                    <div className={styles.burgerWrapper}>
                      <div className={styles.burger}>{menu_category.name}</div>
                    </div>
                    <div className={styles.itemdes2}>
                      {menu_category.description}
                    </div>
                  </div>
                </Link>
              </div>
            );
          }
        })}
      </div>

      <CartSlider table_no={params.table_no} />
    </div>
  );
};

export default Menu;
