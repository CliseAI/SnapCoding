import { courses } from "../constant";
import styles, { layout } from "../style";
import Button from "./Button";

const CourseCard = ({
  icon1,
  icon2,
  title,
  desc,
  diff,
  diffContent,
  code,
  codeContent,
  index,
}) => (
  <section className={layout.section}>
    <div className="absolute z-[1] w-[5%] h-[20%] rounded-[49px] bottom-30 pink__gradient" />
    <div className="absolute z-[0] w-[10%] h-[25%] rounded-full bottom-30 white__gradient" />
    <div className="absolute z-[2] w-[15%] h-[30%] rounded-[20px] bottom-30 blue__gradient" />
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {title}
        <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{desc}</p>
    </div>
    <div className={`${layout.sectionDesc} flex-col`}>
      <div
        className={`flex flex-row p-6 rounded-[15px] ${
          index !== courses.length - 1 ? "mb-6" : "mb-0"
        } feature-card`}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <img
            src={icon1}
            alt="icon"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            {diff}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
            {diffContent}
          </p>
        </div>
      </div>
      <div
        className={`flex flex-row p-6 rounded-[15px] ${
          index !== courses.length - 1 ? "mb-6" : "mb-0"
        } feature-card`}
      >
        <div
          className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
          <img
            src={icon2}
            alt="icon"
            className="w-[50%] h-[50%] object-contain"
          />
        </div>
        <div className="flex-1 flex flex-col ml-3">
          <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
            {code}
          </h4>
          <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
            {codeContent}
          </p>
        </div>
      </div>
      <div className={`${styles.flexCenter}`}>
        {/* <Link to={title}>
          <Button styles="mt-10" />
        </Link> */}
        <a href={`Courses/${title}`}>
          <Button styles="mt-10" text={`Learn ${title}`} />
        </a>
      </div>
    </div>
  </section>
);

const Tutorials = () => {
  return (
    <div id="course">
      {courses.map((course, index) => (
        <CourseCard key={course.id} {...course} index={index} />
      ))}
    </div>
  );
};

export default Tutorials;
