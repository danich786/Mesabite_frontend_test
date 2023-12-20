import styles from "./page.module.css";
import NavComponent from "@/components/common/Navbar";

export default function Home() {
  return (
    <main>
      <NavComponent />

      {/* <div className={styles.orderManagementSolutionThatParent}>
        <b className={styles.orderManagementSolutionContainer}>
          <p className={styles.orderManagementSolution}>
            order management solution that grows
          </p>
          <p className={styles.orderManagementSolution}>your business</p>
        </b>
        <div className={styles.mesabitesIsAnContainer}>
          <p className={styles.orderManagementSolution}>
            MesaBites is an open, scalable restaurant solution
          </p>
          <p className={styles.orderManagementSolution}>
            enabling multi-channel ordering, and guest
          </p>
          <p className={styles.orderManagementSolution}>
            engagement for enterprise operations on a single platform.
          </p>
        </div>
        <div className={styles.item123}>
          <img className={styles.vectorIcon2} alt="" src="/vector1@2x.png" />
          <button className={styles.startNowFor}>Start now for free</button>
        </div>
      </div>

      <div className={styles.desktopView}>
        <div>This application is not yet available for the Desktop View.</div>
      </div> */}
    </main>
  );
}
