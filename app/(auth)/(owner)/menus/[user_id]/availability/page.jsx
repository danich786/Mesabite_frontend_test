"use client";

import styles from "./page.module.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import SetAvailabilityBtn from "./SetAvailabilityBtn";

const Availability = ({ params }) => {
  const [item_to_search, setItemToSearch] = useState("");
  const [if_searched, setIfSearched] = useState(false);
  const [searched_items, setSearchItems] = useState(null);

  // form submit
  const submitSearch = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST +
          "/menus/" +
          params.user_id +
          "/availability/" +
          item_to_search,
        {
          cache: "no-store",
        }
      );
      setSearchItems(await res.json());
      setIfSearched(true);
    } catch (error) {
      setIfSearched(false);
      console.log("Search Error: ", error);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.textTop}>Availability</div>

      <form onSubmit={submitSearch}>
        <input
          className={styles.inputField}
          type="text"
          name="items_to_search"
          placeholder="Search for diferent items in the menu"
          onChange={(e) => setItemToSearch(e.target.value)}
        />
      </form>

      {if_searched && (
        <>
          <div className={styles.selectOption}>
            <div className={styles.typesText}>All Types</div>
            <Button variant="text" className={styles.optionBtn}>
              Mark all as &apos;Available&apos;
            </Button>
            <Button variant="text" className={styles.optionBtn}>
              Mark all as &apos;Sold Out For Today&apos;
            </Button>
            <Button variant="text" className={styles.optionBtn}>
              Mark all as &apos;Sold out Indefinitely&apos;
            </Button>
          </div>

          <div className={styles.itemsText}>Items</div>
          <div className={styles.des}>
            You can see all of the items in all of your menus
          </div>
        </>
      )}

      {if_searched &&
        searched_items.map((searched_item, index) => {
          return (
            <div key={index} className={styles.itemDiv}>
              <div className={styles.itemName}>{searched_item.name}</div>
              <div className={styles.itemCat}>
                <div style={{ textTransform: "uppercase" }}>Category : </div>
                <div>&nbsp; Tajin </div>
              </div>
              <SetAvailabilityBtn
                item_id={searched_item.id}
                avail={searched_item.availability}
              />
            </div>
          );
        })}
    </div>
  );
};

export default Availability;
