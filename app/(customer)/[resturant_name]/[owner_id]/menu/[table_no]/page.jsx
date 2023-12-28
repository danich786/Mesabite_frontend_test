import styles from "./menu.module.css";
import MenuDrawerhook from "./components/menu-drawer-hook";
import CatogeryContainer1 from "./components/catogery-container1";
import Link from "next/link";

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
  const menu_categories = await getMenuCategories(params.owner_id);

  return (
    <>
      <div className={styles.menu1}>
        <div className={styles.header}>
          <div className={styles.pecatom}>{params.resturant_name}</div>
          <div className={styles.headerInner}>
            <MenuDrawerhook />
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

        <div className={styles.catogoriescontainer}>
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
                      <b className={styles.cafsCaliente}>
                        {menu_category.name}
                      </b>
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
                      <b className={styles.cafsCaliente}>
                        {menu_category.name}
                      </b>
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
                  <CatogeryContainer1 category={menu_category} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
