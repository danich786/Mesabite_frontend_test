import styles from "./page.module.css";

import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";

import EditAddOnsChoiceBtn from "./EditAddOnChoiceBtn";
import DeleteAddOnsChoiceBtn from "./DeleteAddsOnChoiceBtn";
import EditAddOnsGroupBtn from "../../EditAddOnGroupBtn";
import DeleteAddOnsGroupBtn2 from "./DeleteAddsOnGroupBtn2";
import Add_AddOnsChoice from "./AddChoiceSidebar";

const get_AddOnsChoices = async (group_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/get_addons_choices/" + group_id,
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

export default async function page({ params }) {
  const group_name = params.group_name.replaceAll("%20", " ");

  const add_ons_choices = await get_AddOnsChoices(params.group_id);

  return (
    <div className={styles.main}>
      <div className={styles.linkTop}>
        <Link
          href="../"
          style={{ textTransform: "uppercase", fontWeight: "500" }}
        >
          Manage ADD ONS
        </Link>
        <ChevronRightIcon />
        {group_name}
      </div>

      <div className={styles.choicesIcon}>
        Choices
        <div className={styles.numberIcon}>3</div>
      </div>

      <div className={styles.groupName}>
        {group_name}
        <EditAddOnsGroupBtn />
        <DeleteAddOnsGroupBtn2 group_id={params.group_id} />
      </div>

      <Add_AddOnsChoice group_id={params.group_id} />

      {add_ons_choices.map((add_ons_choice, index) => (
        <ul key={index}>
          <li className={styles.choiceList}>
            <MenuIcon sx={{ mr: 2, color: "#852e2b" }} />
            {add_ons_choice.name}
            <div className={styles.listBtns}>
              <EditAddOnsChoiceBtn />
              <DeleteAddOnsChoiceBtn choice_id={add_ons_choice.id} />
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
