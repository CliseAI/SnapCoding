import styles from "../style";
import React from "react";
import { useParams } from "react-router-dom";
import { Python, Cpp } from "../material";

const NewHOC = (PassedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <div>
          <PassedComponent {...this.props} />
        </div>
      );
    }
  };
};

const MaterialView = () => {
  const { courseName, materialName } = useParams();
  const mats = courseName + "." + materialName;
  const MatsComponent = NewHOC(mats);
  return (
    <div className="text-white">
      <h1 className={`${styles.heading2}`}>{materialName}</h1>
      <br /> course name : {courseName} {mats}
      <MatsComponent />
      {/* {materials
        .filter((material) => material.course === courseName)
        .map((material) => (
          <MatsView
            key={material.course}
            {...material}
            courseName={courseName}
            materialName={materialName}
          />
        ))} */}
    </div>
  );
};

export default MaterialView;
