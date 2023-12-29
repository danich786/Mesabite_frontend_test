import styles from "../customer-items-page.module.css";

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

export default async function TopSlider(props) {
  const menu_categories = await getMenuCategories(props.owner_id);

  return (
    <>
      <div className={styles.slidercontainer}>
        <div className={styles.categories}>
          <div className={styles.category}>
            <b className={styles.categoryname}>Fast Food</b>
          </div>
        </div>
      </div>

      <div className={styles.slidercontainer}>
        <div className={styles.items}>
          {menu_categories.map((menu_category, index) => {
            return (
              <di key={index} className={styles.item}>
                <b className={styles.categoryname}>{menu_category.name}</b>
              </di>
            );
          })}
        </div>
      </div>
    </>
  );
}
