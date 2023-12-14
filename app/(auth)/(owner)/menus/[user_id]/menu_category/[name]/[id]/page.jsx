import "./page.css";

import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

import { ItemButton } from "@/components/utils/CustomButtons";
import {
  SettingsMenuCategoryButton,
  EditMenuCategoryButton,
  DeleteMenuCategoryButton,
} from "@/components/buttons/index";

import {
  EditMenuItemButton,
  DeleteMenuItemButton,
  DuplicateMenuItemBtn,
  ShareMenuItemBtn,
} from "@/components/buttons/index";

const getMenuItems = async (item_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/menus/menu_items/" + item_id,
      {
        cache: "no-store",
      }
    );
    if (!res.ok) {
      throw new Error("Error while fetching menu items from the backend");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading Menu Items: ", error);
  }
};

export default async function MenuCategoryDetails({ params }) {
  const menu_items = await getMenuItems(params.id);
  // console.log(menu_items);

  return (
    <div className="main">
      <div className="text-top">
        <Link href="../../"> Menu </Link> <ChevronRightIcon /> {params.name}
      </div>
      <ItemButton className="menu-btn">{params.name}</ItemButton>
      <div className="cat-icons">
        <div className="menu-text">{params.name}</div>
        <div>
          <Link href={`./${params.id}/settings`}>
            <SettingsMenuCategoryButton />
          </Link>
          <EditMenuCategoryButton />
          <DeleteMenuCategoryButton />
          {/* folder={menu_category.id} */}
        </div>
      </div>
      <div className="assign">
        <AddCircleOutlineRoundedIcon /> Assign
      </div>
      <div className="add-item">
        <Link href={`${params.id}/add_new_item`}>
          <AddCircleOutlineRoundedIcon
            style={{ fontSize: "40px", mr: "10px" }}
          />
          Add New Item to {params.name}
        </Link>
      </div>

      {menu_items.map((menu_item, index) => {
        return (
          <Card key={index} sx={{ mt: 4 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={process.env.NEXT_PUBLIC_HOST + menu_item.image}
            />
            <CardContent sx={{ backgroundColor: "#fbf3db" }}>
              <div>
                <ShareMenuItemBtn />
                <Link href={`${params.id}/item_settings/${menu_item.id}`}>
                  <SettingsIcon className="settings-menu-item-icon" />
                </Link>
                <Link href={`${params.id}/edit_item/${menu_item.id}`}>
                  <EditMenuItemButton />
                </Link>
                <DuplicateMenuItemBtn
                  menu_cat={menu_item.menu_category}
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
                <DeleteMenuItemButton menu_item={menu_item.id} />
              </div>
              <div className="card-text">{menu_item.name}</div>
              <div className="card-price-text">
                Pickup Price : $ {menu_item.price}.00 - Delivery Price : $
                {menu_item.delivery_price}
              </div>
              <div style={{ display: "flex" }}>
                <div className="assign">
                  <AddCircleOutlineRoundedIcon /> Assign
                </div>
                <div className="assign" style={{ marginLeft: "3%" }}>
                  <AddCircleOutlineRoundedIcon /> Create
                </div>
              </div>
            </CardContent>
            {/* <CardActions sx={{ backgroundColor: "#fbf3db" }}>
              <Button size="small">Assign</Button>
              <Button size="small">Create</Button>
            </CardActions> */}
          </Card>
        );
      })}
    </div>
  );
}
