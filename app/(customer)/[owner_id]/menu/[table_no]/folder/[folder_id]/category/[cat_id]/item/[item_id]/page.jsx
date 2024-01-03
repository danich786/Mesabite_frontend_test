import styles from "./itemdetails.module.css";

import Link from "next/link";

import QuantityAdder from "./QuantityAdder";
import AddToCartBtn from "./AddToCartBtn";
import SelectNormalChoice from "./SelectNormalChoice";
import SelectExtraChoice from "./SelectExtraChoice";
import SelectMultiChoice from "./SelectMultiChoice";

const getMenuItemById = async (item_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_item/" + item_id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error while fetching menu item from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Menu Items: ", error);
  }
};

const getAddOnsGroupByItem = async (item_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST +
        "/menus/get_addons_groups_by_item/" +
        item_id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error while fetching Add Ons Group from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading AddOns Group: ", error);
  }
};

const getAddOnsChoices = async (addons_group_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST +
        "/menus/get_addons_choices/" +
        addons_group_id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error while fetching Add Ons Choices from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading AddOns Choices: ", error);
  }
};

// #################################################################################

const ItemDetailsPage = async ({ params }) => {
  const menu_item = await getMenuItemById(params.item_id);
  const add_ons_groups = await getAddOnsGroupByItem(params.item_id);

  return (
    <div className={styles.itemdetailspage}>
      <div className={styles.piccontainer}>
        {menu_item.image == null ? (
          <img className={styles.itempicIcon} alt="" src="/default-pic.png" />
        ) : (
          <img
            className={styles.itempicIcon}
            alt=""
            src={process.env.NEXT_PUBLIC_HOST + menu_item.image}
          />
        )}
      </div>
      <Link href="../" className={styles.backbutton}>
        <img
          className={styles.backArrow6f5b373dsvgIcon}
          alt=""
          src="/menu/itemdetails/backarrow6f5b373dsvg@2x.png"
        />
        <b className={styles.backbtntext}>Back</b>
      </Link>
      <div className={styles.detailscontainer}>
        <div className={styles.detailsbox}>
          <div className={styles.namecontainer}>
            <div className={styles.nameiconsbox}>
              <div className={styles.namebox}>
                <b className={styles.nametext}>{menu_item.name}</b>

                {/* Check if Menu Item is Featured or New item */}
                {menu_item.featured ? (
                  <img
                    className={styles.featuredicon}
                    alt=""
                    src="/menu/itemdetails/featuredicon@2x.png"
                  />
                ) : null}
                {menu_item.new_item ? (
                  <div className={styles.newicon}>
                    <img
                      className={styles.iconbox}
                      alt=""
                      src="/menu/itemdetails/iconbox@2x.png"
                    />
                    <b className={styles.newtext}>NEW</b>
                  </div>
                ) : null}
              </div>

              <div className={styles.allergyiconbox}>
                {menu_item.calorie ? (
                  <div className={styles.caloriestext}>
                    {menu_item.calorie} Cal.
                  </div>
                ) : null}
                <div className={styles.allergyicons}>
                  <img
                    className={styles.allergyicon1}
                    alt=""
                    src="/menu/itemdetails/allergyicon1@2x.png"
                  />
                  <img
                    className={styles.allergyicon2}
                    alt=""
                    src="/menu/itemdetails/allergyicon2@2x.png"
                  />
                </div>
              </div>
            </div>
            <div className={styles.itemdestext}>{menu_item.description}</div>
            <div className={styles.allergyiconpopup}>
              <div className={styles.backbtntext}>Nuts</div>
            </div>
          </div>

          {add_ons_groups.map(async (add_ons_group, index) => {
            const add_ons_choices = await getAddOnsChoices(add_ons_group.id);

            if (add_ons_group.group_type === "Normal") {
              return (
                <div key={index} className={styles.normaladdongroup}>
                  <div className={styles.divider} />

                  <SelectNormalChoice
                    add_ons_group={add_ons_group}
                    add_ons_choices={add_ons_choices}
                  />
                </div>
              );
            } else if (add_ons_group.group_type == "Extra") {
              return (
                <div key={index} className={styles.normaladdongroup}>
                  <div className={styles.divider} />

                  <SelectExtraChoice
                    add_ons_group={add_ons_group}
                    add_ons_choices={add_ons_choices}
                  />
                </div>
              );
            } else {
              return (
                <div key={index} className={styles.normaladdongroup}>
                  <div className={styles.divider} />

                  <SelectMultiChoice
                    add_ons_group={add_ons_group}
                    add_ons_choices={add_ons_choices}
                  />
                </div>
              );
            }
          })}

          <div className={styles.quantityboxcontainer}>
            <div className={styles.divider} />
            <div className={styles.quantitybox}>
              <b className={styles.nametext}>Quantity</b>

              <QuantityAdder menu_item={menu_item} />
            </div>
          </div>
        </div>

        <AddToCartBtn menu_item={menu_item} />
      </div>
    </div>
  );
};

export default ItemDetailsPage;
