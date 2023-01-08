import styles from "../style";
import { Stats, Hero, Tutorials, CTA } from "../components";

const Home = () => (
  <>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Tutorials />
        <CTA />
      </div>
    </div>
  </>
);

export default Home;
