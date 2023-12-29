import styles from "./customer-items-page.module.css";
import TopSlider from "./components/TopSlider";
import FilterDrawer from "./components/filters-drawer-hook";
import Link from "next/link";

const CustomerItemsPage = async ({ params }) => {
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

        <TopSlider owner_id={params.owner_id} selected_cat={params.cat_id} />

        <div className={styles.itemnamediv}>
          <b className={styles.categoryname}>Bebidas calientes</b>
          <div className={styles.namedivtext}>
            Todos los precios son sin IVA
          </div>
        </div>
        <div className={styles.itemscontainer}>
          <div className={styles.itemcard}>
            <div className={styles.cardimage}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/frappevirselis-11@2x.png"
              />
            </div>
            <div className={styles.itemdetailsbox}>
              <button className={styles.itemname21}>Cafés Caliente</button>
              <div className={styles.itemdes2}>
                <p className={styles.unaCombinacinunaCombinacin}>
                  Una combinaciónUna combinaciónclásica de hocolatey leche
                  cocidos clásica de chocolate
                </p>
                <p className={styles.unaCombinacinunaCombinacin}>
                  y leche cocidos..
                </p>
              </div>
            </div>
          </div>
          <div className={styles.soldoutitemcard}>
            <div className={styles.soldoutimage}>
              <img
                className={styles.image1Icon}
                alt=""
                src="/frappevirselis-1@2x.png"
              />
            </div>
            <div className={styles.soldoutitemdetailsbox}>
              <b className={styles.soldouttext}>Cafés Caliente</b>
              <div className={styles.itemdes3}>
                <p className={styles.unaCombinacinunaCombinacin}>
                  Una combinaciónUna combinaciónclásica de hocolatey leche
                  cocidos clásica de chocolate
                </p>
                <p className={styles.unaCombinacinunaCombinacin}>
                  y leche cocidos..
                </p>
              </div>
            </div>
            <div className={styles.soldouticon}>
              <b className={styles.soldouttext}>Sold Out</b>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerItemsPage;
