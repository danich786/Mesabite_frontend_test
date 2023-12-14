import styles from "./page.module.css";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import EditAddOnGroupBtn from "./EditAddOnGroupBtn";
import SettingsAddsOnGroupBtn from "./SettingsAddsOnGroupBtn";
import DeleteAddsOnGroupBtn from "./DeleteAddsOnGroupBtn";
import DuplicateAddsOnGroupBtn from "./DuplicateAddsOnGroupBtn";
import RightSidebar from "./RightSidebar";

const get_AddOnsGroups = async (user_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/get_addons_groups/" + user_id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error while fetching Add On Groups");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Add On Groups: ", error);
  }
};

const AddsOn = async ({ params }) => {
  const add_ons_groups = await get_AddOnsGroups(params.user_id);

  return (
    <div className={styles.main}>
      <div className={styles.textTop}>Manage Add Ons</div>

      <RightSidebar user_id={params.user_id} />

      {add_ons_groups.map((add_ons_group, index) => (
        <div key={index} className={styles.addOnGroup}>
          <div className={styles.groupHeaderContainer}>
            <MenuIcon sx={{ mr: 1, mt: 0.5, color: "#852e2b" }} />

            <Link
              href={`adds_on/${add_ons_group.name}/${add_ons_group.id}`}
              className={styles.headerText}
            >
              {add_ons_group.name}
            </Link>

            <div className={styles.headerBtns}>
              <div className={styles.headerBtn}>
                {add_ons_group.group_type} Add On
              </div>
              <div className={styles.headerBtn}> 0 Choices </div>
            </div>
          </div>

          <div className={styles.addOnGroupBtns}>
            <SettingsAddsOnGroupBtn />
            <EditAddOnGroupBtn />
            <DuplicateAddsOnGroupBtn />
            <DeleteAddsOnGroupBtn group_id={add_ons_group.id} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddsOn;
