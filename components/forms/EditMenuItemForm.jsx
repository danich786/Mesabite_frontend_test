"use client";

import "./EditMenuItemForm.css";
import Link from "next/link";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import Image from "next/image";
import { useState } from "react";
import AxiosInstance from "@/components/utils/Axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SaveButton } from "@/components/utils/CustomButtons";

export default function EditMenuItemForm(props) {
  const item_id = props.item_id;

  const [name, setName] = useState(props.name);
  const [description, setDescription] = useState(props.des);
  const [image, setImage] = useState(null);
  const [price, setPrice] = useState(props.price);
  const [separateprice, setSeparatePrice] = useState(true);
  const [deliveryprice, setDeliveryPrice] = useState(props.deliveryprice);
  const [taxable, setTaxable] = useState(false);
  const [quantity, setQuantity] = useState(props.quantity);
  const [forcequantity, setForceQuantity] = useState(true);
  const [minquantity, setMinQuantity] = useState(props.minquantity);
  const [maxquantity, setMaxQuantity] = useState(props.maxquantity);
  const [hidequantity, setHideQuantity] = useState(false);
  const [lockquantity, setLockQuantity] = useState(false);
  const [calorie, setCalorie] = useState(props.calorie);
  const [featured, setFeatured] = useState(props.featured);
  const [newitem, setNewItem] = useState(props.newitem);
  const [show_add_ons, setShowAddOns] = useState(props.show_add_ons);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_HOST +
          "/menus/change_menu_item_visibility/" +
          item_id,
        {
          method: "PUT",
          timeout: 5000,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            // image,
            name,
            description,
            price,
            delivery_price: deliveryprice,
            quantity,
            min_quantity: minquantity,
            max_quantity: maxquantity,
            hide_quantity: hidequantity,
            lock_quantity: lockquantity,
            calorie,
            featured,
            new_item: newitem,
            show_add_ons,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to hide menu item");
      }
      router.push("../");
      router.refresh();
      toast.success("Menu item successfully update.");
    } catch (error) {
      console.log(error);
    }

    //   const onSubmit = (data) => {
    //     AxiosInstance.post("menus/add_menu_item/", {
    //       menu_category: params.id,
    //       name: name,
    //       description: description,
    //       image: image,
    //       price: price,
    //       delivery_price: deliveryprice,
    //       quantity: quantity,
    //       min_quantity: minquantity,
    //       max_quantity: maxquantity,
    //       hide_quantity: hidequantity,
    //       lock_quantity: lockquantity,
    //       calorie: calorie,
    //       featured: featured,
    //       new_item: newitem,
    //       show_add_ons: show_add_ons,
    //     }).then((res) => {
    //       router.push(`/menus/menu_category/${params.name}/${params.id}`);
    //       router.refresh();
    //       toast.success("Menu Item has been added successfully.");
    //     });
  };

  return (
    <div className="main">
      <div className="text-top">
        <Link
          href="/menus"
          style={{ textDecoration: "none", color: "#852e2b" }}
        >
          Menu
        </Link>
        <ChevronRightIcon />
        <Link href="../" style={{ textDecoration: "none", color: "#852e2b" }}>
          {props.menu_cat_name}
        </Link>
        <ChevronRightIcon /> Edit {props.name}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="image-text">Image (Optional)</div>
        <div className="image-box">
          <Image
            src="/upload_icon.svg"
            alt="icon_not_found"
            width="100"
            height="100"
            style={{
              color: "#8d3a36",
              marginTop: "20px",
              marginBottom: "40px",
              marginLeft: "35%",
            }}
          />

          <input
            type="file"
            onChange={(e) => {
              if (e.target.files[0]) {
                if (e.target.files[0].size > 1 * 1000 * 1024) {
                  alert(
                    "Please choose a different image with size less than 1MB"
                  );
                } else {
                  setImage(e.target.files[0]);
                }
              }
            }}
          />

          <div className="image-box-text">
            <b>Click here to uplaod an image</b>
          </div>
        </div>
        <div className="name-text">Item Name</div>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="name-input"
          required
        />
        <div className="limit">0/50</div>

        <div className="des-text">Description (Optional)</div>
        <textarea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          cols="40"
          rows="5"
          className="des-box"
        ></textarea>

        <div className="price-text">Price</div>
        <div class="price-input">
          $
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="checkbox">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={separateprice}
              onChange={(e) => setSeparatePrice(!separateprice)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
            />
            &nbsp; I want separate prices for pickup and delivery.
          </label>
        </div>

        {separateprice && (
          <div style={{ marginTop: "15px" }}>
            <div className="price-text">Delivery Price</div>
            <div class="price-input">
              $
              <input
                type="number"
                value={deliveryprice}
                onChange={(e) => setDeliveryPrice(e.target.value)}
                required
              />
            </div>
          </div>
        )}

        <div className="checkbox-2">
          <label className="checkbox-label">
            <input
              type="checkbox"
              checked={taxable}
              onChange={(e) => setTaxable(!taxable)}
              style={{ transform: "scale(1.3)", accentColor: "#852e2b" }}
            />
            &nbsp; This item is taxable.
          </label>
        </div>

        <div className="q-q">
          <div className="q-q-text">Quantity and Calorie</div>
          <div className="q-q-des">
            Force, lock or hide quantity number of your item. Enter calorie info
            of your item and add Allergies.
          </div>
          <div className="quantity-label">Default Quantity</div>
          <input
            type="number"
            className="quantity-input"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />

          <div className="checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={forcequantity}
                checked={forcequantity}
                onChange={(e) => setForceQuantity(!forcequantity)}
                style={{
                  transform: "scale(1.3)",
                  accentColor: "#852e2b",
                }}
              />
              &nbsp; Force Quantity
            </label>
          </div>

          {forcequantity && (
            <div style={{ marginTop: "15px" }}>
              <div className="price-text">Minimum Quantity</div>
              <div class="price-input">
                $
                <input
                  type="number"
                  value={minquantity}
                  onChange={(e) => setMinQuantity(e.target.value)}
                  required
                />
              </div>
              <div className="price-text">Maximum Quantity</div>
              <div class="price-input">
                $
                <input
                  type="number"
                  value={maxquantity}
                  onChange={(e) => setMaxQuantity(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          <div className="checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={hidequantity}
                checked={hidequantity}
                onChange={(e) => setHideQuantity(!hidequantity)}
                style={{
                  transform: "scale(1.3)",
                  accentColor: "#852e2b",
                }}
              />
              &nbsp; Hide Quantity
            </label>
          </div>

          <div className="checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                value={lockquantity}
                checked={lockquantity}
                onChange={(e) => setLockQuantity(!lockquantity)}
                style={{
                  transform: "scale(1.3)",
                  accentColor: "#852e2b",
                }}
              />
              &nbsp; Lock Quantity
            </label>
          </div>

          <div className="quantity-label">Calorie (Optional)</div>
          <input
            type="number"
            className="quantity-input"
            value={calorie}
            onChange={(e) => setCalorie(e.target.value)}
          />
          <div className="add-allergy-icon">
            <AddCircleOutlineRoundedIcon /> Add Allergy Icon
          </div>
        </div>

        <div className="d-i-text">Display Options</div>
        <div className="d-i-des"> Change display of your item.</div>

        <div className="checkbox">
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={featured}
              checked={featured}
              onChange={(e) => setFeatured(!featured)}
              style={{
                transform: "scale(1.3)",
                accentColor: "#852e2b",
              }}
            />
            &nbsp; Mark as featured Item
          </label>
        </div>
        <div className="checkbox">
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={newitem}
              checked={newitem}
              onChange={(e) => setNewItem(!newitem)}
              style={{
                transform: "scale(1.3)",
                accentColor: "#852e2b",
              }}
            />
            &nbsp; Mark as New Item
          </label>
        </div>
        <div className="checkbox">
          <label className="checkbox-label">
            <input
              type="checkbox"
              value={show_add_ons}
              checked={show_add_ons}
              onChange={(e) => setShowAddOns(!show_add_ons)}
              style={{
                transform: "scale(1.3)",
                accentColor: "#852e2b",
              }}
            />
            &nbsp; Show add ons with photo and description
          </label>
        </div>

        <div className="btn-div">
          <SaveButton type="submit" className="save-button">
            Update Item
          </SaveButton>
        </div>
      </form>
    </div>
  );
}
