import styles from "./reserve.module.css";
import ReservationForm1 from "./ReservationForm1";

const getResturantOwner = async (owner_id) => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_HOST + "/get_user/" + owner_id,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Error while fetching Owner");
    }
    return res.json();
  } catch (error) {
    console.log("Error loading User: ", error);
  }
};

const Reserve = async ({ params }) => {
  const owner = await getResturantOwner(params.owner_id);

  return (
    <div className={styles.reserve}>
      <div className={styles.container1}>
        <img
          className={styles.logocafeIcon}
          alt=""
          src="/customer/logocafe@2x.png"
        />
        <div className={styles.extraSettingsParent}>
          <b className={styles.extraSettings}>Extra Settings</b>
          <img
            className={styles.imageIcon}
            alt=""
            src="/customer/image@2x.png"
          />
        </div>
      </div>
      <ReservationForm1
        opening_time={owner.resturant_opening_time}
        closing_time={owner.resturant_closing_time}
      />
    </div>
  );
};

export default Reserve;
