import styles from "../style";
import { comp } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Learning With
          <br className="sm:block hidden" /> {""}
          <span className="text-gradient">SnapCoding</span> {""}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <a href="Courses">
            <GetStarted />
          </a>
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Where everything begins.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        SnapCoding is an online tutorial platform that provides comprehensive
        instruction for learning how to code. It offers a wide range of
        tutorials from basic to advanced topics, helping users of all levels
        gain the skills necessary to create webpages, apps, and other software.
        The tutorials are easy to follow, with step-by-step instructions and
        helpful hints along the way.
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img src={comp} alt="comp" className="w-[100%] h-[auto] z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
      <div className="absolute z-[2] w-[70%] h-[80%] rounded-full bottom-40 white__gradient" />
      <div className="absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <a href="Courses">
        <GetStarted />
      </a>
    </div>
  </section>
);

export default Hero;
