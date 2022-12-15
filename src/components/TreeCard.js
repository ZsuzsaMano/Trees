import {  useState } from "react";
import "../styles.css";


const TreeCard = ({tree}) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="treeCard">
      <h2> {tree.name}</h2>
      <h3>{tree.species_name} </h3>
      <div className={showImage ? "" : "hidden"}>
        <img
          data-test="toggle-image"
          className="treeImage"
          src={tree.image}
          alt={tree.name}
          width="80%"
          height="250px"
          loading="lazy"
        />
      </div>
      <button
        data-test="toggle-button"
        className="hideButton"
        onClick={() => setShowImage(!showImage)}
      >
        {showImage ? "Hide image" : "Show image"}
      </button>
    </div>
  );
};

export default TreeCard;
