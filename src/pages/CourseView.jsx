import React, { useState } from "react";
import styles from "../style";
import { Link } from "react-scroll";
import { dataCourse } from "../constant/courseData";
import { useParams } from "react-router-dom";
import { close, menu } from "../assets";

const Data = ({ data }) => {
  const { courseName } = useParams();
  const [toggle, setToggle] = useState(false);
  return (
    <div key={data.id} className="flex justify-center">
      <div className="sm:hidden fixed left-6 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } left-6 p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[280px] rounded-xl`}
        >
          <ul className="list-none flex flex-col flex-1">
            {data.map((type, index) => (
              <li
                key={type.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  index === data.length - 1 ? "mr-0" : "mb-4"
                } text-white mr-10`}
              >
                <Link
                  to={`${type.title}`}
                  smooth={true}
                  offset={-250}
                  duration={100}
                  key={type.id}
                  className="cursor-pointer"
                >
                  <p
                    onClick={() => setToggle(false)}
                    className={`font-semibold text-white text-[14px] sm:text-[28px] sm:p-5 rounded-[20px]`}
                  >
                    <span className="text-gradient">Python </span>
                    {`${type.title}`}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:flex hidden flex-col flex-1 top-0 py-5 max-w-[30%]">
        {data.map((type) => (
          <div key={type.id}>
            <Link
              to={`${type.title}`}
              smooth={true}
              offset={-250}
              duration={100}
              className="cursor-pointer"
            >
              <p
                className={`font-semibold text-white text-[14px] sm:text-[28px] sm:p-5 feature-card rounded-[20px]`}
              >
                <span className="text-gradient">{courseName} </span>
                {`${type.title}`}
              </p>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex-col flex-1 py-5">
        {data.map((type) => (
          <section
            key={type.id}
            id={`${type.title}`}
            className={`bg-black-gradient m-5 p-5 rounded-[20px]`}
          >
            <p className="font-semibold text-white text-[28px] py-2">{`${type.title}`}</p>
            {type.materials.map((material) => (
              <a
                key={`${material.name}`}
                href={`${courseName}/${material.link}`}
              >
                <p
                  className={`text-dimWhite cursor-pointer hover:text-white ${styles.paragraph}`}
                >{`${material.name}`}</p>
              </a>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
};

const CourseView = () => {
  const { courseName } = useParams();
  return (
    <div key={courseName}>
      {dataCourse
        .filter((courseData) => courseData.course === courseName)
        .map((course) => (
          <Data key={course.id} {...course} />
        ))}
    </div>
  );
};

export default CourseView;
