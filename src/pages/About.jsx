import { Button } from "../components";
import styles from "../style";

const About = () => {
  return (
    <div>
      <div className="absolute w-[80%] h-[60%] rounded-[50px] center blue__gradient opacity-30" />
      <p className={`text-white ${styles.paragraph}`}>
        <span className="text-gradient">SnapCoding</span> is a comprehensive
        web-based learning platform that provides a range of tutorials and
        resources for beginners to learn programming languages. Our tutorials
        are designed to provide an easy to understand and effective way for
        newcomers to learn the fundamentals of coding. We cater for all levels
        of experience, from those who are just starting out to more experienced
        coders.
      </p>
      <p className={`text-white my-5 ${styles.paragraph}`}>
        Our tutorials are created and written by experienced developers who
        understand the topics and can explain them clearly. We provide a range
        of video and text tutorials, as well as a range of resources and
        projects to help you learn.
      </p>
      <p className={`text-white my-5 ${styles.paragraph}`}>
        At <span className="text-gradient">SnapCoding</span>, we believe that
        everyone can learn to code. That’s why our tutorials are designed to be
        easy to follow and understand. We provide a range of tutorials for
        different programming languages, such as HTML, CSS, JavaScript, Python
        and more. We also provide tutorials on topics such as web development,
        game development, mobile app development and more.
      </p>
      <p className={`text-white my-5 ${styles.paragraph}`}>
        Our tutorials are tailored to fit the needs of the learner. We cover the
        fundamentals of each language and also provide more advanced topics. We
        also provide a range of projects and challenges to help you apply your
        knowledge and develop your skills. We want to make learning to code as
        accessible and easy as possible.{" "}
      </p>
      <p className={`text-white my-5 ${styles.paragraph}`}>
        That’s why we provide our tutorials for free. We also offer a range of
        resources to help you along the way, such as articles, cheat sheets and
        more. At <span className="text-gradient">SnapCoding</span>, we are
        passionate about helping people learn to code. Our mission is to make
        coding accessible to everyone, no matter their experience level.
      </p>
      <p className={`text-white my-5 ${styles.paragraph}`}>
        We strive to provide the best tutorials and resources to help you on
        your coding journey.
      </p>
      <a href="Courses">
        <Button text="Get Started" />
      </a>
    </div>
  );
};

export default About;
