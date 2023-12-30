import styles from "./menu.module.css";
import MenuDrawerhook from "./components/menu-drawer-hook";
import CatogeryContainer1 from "./components/catogery-container1";
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
                <div className={styles.catogerycontainer2}>
                  <div className={styles.imagefream}>
                    {folder.image == null ? (
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src="/image-3@2x.png"
                      />
                    ) : (
                      <img
                        className={styles.image3Icon}
                        alt=""
                        src={process.env.NEXT_PUBLIC_HOST + folder.image}
                      />
                    )}
                  </div>

                  <div className={styles.frameParent}>
                    <div className={styles.burgerWrapper}>
                      <Link
                        href={`${params.table_no}/folder/${folder.id}`}
                        className={styles.burger}
                      >
                        {folder.name}
                      </Link>
                    </div>
                    <div className={styles.itemdes2}>{folder.description}</div>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {menu_categories.map((menu_category, index) => {
          if (menu_category.folder == null) {
            return (
              <div key={index} className={styles.catogerycontainer2Wrapper}>
                <div className={styles.catogerycontainer2}>
                  <div className={styles.imagefream}>
                    <img
                      className={styles.image3Icon}
                      alt=""
                      src="/image-3@2x.png"
                    />
                  </div>

                  <div className={styles.frameParent}>
                    <div className={styles.burgerWrapper}>
                      <Link
                        href={`${params.table_no}/category/${menu_category.id}`}
                        className={styles.burger}
                      >
                        {menu_category.name}
                      </Link>
                    </div>
                    <div className={styles.itemdes2}>
                      {menu_category.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>

      {/* <div className={styles.catogoriescontainer}>
          {menu_categories.map((menu_category, index) => {
            if (menu_category.availability == "A") {
              if (!menu_category.new_cat && !menu_category.featured) {
                return (
                  <div key={index} className={styles.catogerycontainer2}>
                    <div className={styles.imagefream}>
                      <img
                        className={styles.frappeVirselis1Icon}
                        alt=""
                        src={menu_category.image}
                      />
                    </div>

                    <div className={styles.cafsCalienteParent}>
                      <Link
                        href={`${params.table_no}/category/${menu_category.id}`}
                        className={styles.cafsCaliente}
                      >
                        {menu_category.name}
                      </Link>
                      <div
                        className={styles.unaCombinacinunaCombinacinContainer}
                      >
                        <p className={styles.unaCombinacinunaCombinacin}>
                          {menu_category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              } else if (menu_category.new_cat || menu_category.featured) {
                return (
                  <div key={index} className={styles.catogerycontainer2}>
                    <div className={styles.imagefream}>
                      <img
                        className={styles.frappeVirselis1Icon}
                        alt=""
                        src={menu_category.image}
                      />
                    </div>

                    <div className={styles.cafsCalienteParent}>
                      <Link
                        href={`${params.table_no}/category/${menu_category.id}`}
                        className={styles.cafsCaliente}
                      >
                        {menu_category.name}
                      </Link>
                      <div
                        className={styles.unaCombinacinunaCombinacinContainer}
                      >
                        <p className={styles.unaCombinacinunaCombinacin}>
                          {menu_category.description}
                        </p>
                      </div>
                    </div>

                    {menu_category.new_cat && (
                      <div className={styles.new}>
                        <b className={styles.cafsCaliente}>New</b>
                      </div>
                    )}
                    {menu_category.featured && (
                      <div className={styles.featured}>
                        <b className={styles.cafsCaliente}>Featured</b>
                      </div>
                    )}
                  </div>
                );
              }
            } else if (
              menu_category.availability == "S" ||
              menu_category.availability == "X"
            ) {
              return (
                <div key={index}>
                  <CatogeryContainer1
                    table_no={params.table_no}
                    category={menu_category}
                  />
                </div>
              );
            }
          })}
        </div> */}
    </div>
  );
};

export default Menu;
