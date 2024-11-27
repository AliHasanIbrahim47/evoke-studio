import React from "react";
import "./WeddingImages.css";

const WeddingImages = (props) => {
  const { WeddingSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {WeddingSlides.map((WeddingSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={WeddingSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default WeddingImages;
