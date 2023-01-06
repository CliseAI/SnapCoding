import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} z-2 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2}`}>Let's Get Started now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Learn how to coding from basic
      </p>
    </div>
    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a href="Courses">
        <Button text="Get Started" />
      </a>
    </div>
  </section>
);

export default CTA;
