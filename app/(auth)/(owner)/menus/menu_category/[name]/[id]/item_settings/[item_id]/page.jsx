import SettingsMenuItemForm from "@/components/forms/SettingsMenuItemForm";

const getMenuItemById = async (id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_item/" + id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch Menu Item by Id");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Menu Item by ID: ", error);
  }
};

const getTimeSlotsById = async (id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/time_slots/" + id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Failed to fetch Time Slots by Id");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Time Slots by ID: ", error);
  }
};

export default async function ItemSettings({ params }) {
  const menu_item = await getMenuItemById(params.item_id);
  const time_slots = await getTimeSlotsById(params.item_id);

  return (
    <SettingsMenuItemForm
      cat_id={params.id}
      item_id={params.item_id}
      item_visibility={menu_item.visibility}
      item_name={menu_item.name}
      time_slots={time_slots}
    />
  );
}
