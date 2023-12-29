import styles from "./catogery-container1.module.css";
import Link from "next/link";

const CatogeryContainer1 = (props) => {
  const menu_category = props.category;

  return (
    <div className={styles.catogerycontainer1}>
      <div className={styles.imagefream}>
        <img
          className={styles.frappeVirselis1Icon}
          alt=""
          src={menu_category.image}
        />
      </div>
      <div className={styles.cafsCalienteParent}>
        <Link
          href={`${props.table_no}/category/${menu_category.id}`}
          className={styles.cafsCaliente}
        >
          {menu_category.name}
        </Link>
        <div className={styles.unaCombinacinunaCombinacinContainer}>
          <p className={styles.unaCombinacinunaCombinacin}>
            {menu_category.description}
          </p>
        </div>
      </div>
      <div className={styles.soldout}>
        <b className={styles.cafsCaliente}>Sold Out</b>
      </div>
    </div>
  );
};

export default CatogeryContainer1;
