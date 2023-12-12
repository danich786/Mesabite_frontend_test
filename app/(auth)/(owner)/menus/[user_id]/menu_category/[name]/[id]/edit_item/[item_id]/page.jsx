import EditMenuItemForm from "@/components/forms/EditMenuItemForm";

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

export default async function EditItem({ params }) {
  const menu_item = await getMenuItemById(params.item_id);

  return (
    <EditMenuItemForm
      menu_cat={menu_item.menu_category}
      menu_cat_name={params.name}
      item_id={params.item_id}
      image={menu_item.image}
      name={menu_item.name}
      des={menu_item.description}
      price={menu_item.price}
      deliveryprice={menu_item.delivery_price}
      quantity={menu_item.quantity}
      minquantity={menu_item.min_quantity}
      maxquantity={menu_item.max_quantity}
      hidequantity={menu_item.hide_quantity}
      lockquantity={menu_item.lock_quantity}
      calorie={menu_item.calorie}
      featured={menu_item.featured}
      newitem={menu_item.new_item}
      show_add_ons={menu_item.show_add_ons}
    />
  );
}
