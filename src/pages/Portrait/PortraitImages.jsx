import React, { useEffect } from "react";
import "./PortraitImages.css";

const PortraitImages = (props) => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { PortraitSlides, onClick } = props;

  const handleClickImage = (index) => {
    onClick(index);
  };

  return (
    <div className="images-container">
      {PortraitSlides.map((PortraitSlides, index) => {
        return (
          <div
            onClick={() => handleClickImage(index)}
            key={index}
            className="image"
          >
            <img src={PortraitSlides.src} />
          </div>
        );
      })}
    </div>
  );
};

export default PortraitImages;
