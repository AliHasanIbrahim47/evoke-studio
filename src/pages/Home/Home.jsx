import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HeroBG from "../../assets/ny6to4itoey-1.jpg";
import rightThumbnai from "../../assets/evoke-resize/portrait/_MG_0534-1.jpg";
import leftThumbnail from "../../assets/evoke-resize/portrait/IMG_3659-1.jpg";
import WeddingBG from "../../assets/evoke-resize/wedding/IMG_6469-11-1.jpg";
import firstRow1 from "../../assets/evoke-resize/portrait/_MG_4915-1.jpg 1.jpg";
import firstRow2 from "../../assets/evoke-resize/portrait/_MG_5624-1.jpg";
import firstRow3 from "../../assets/evoke-resize/portrait/IMG_3830-1.jpg";
import secondRow1 from "../../assets/evoke-resize/product/_MG_8997-1.jpg";
import secondRow2 from "../../assets/evoke-resize/product/_MG_9894-1.jpg";
import secondRow3 from "../../assets/evoke-resize/product/_MG_8941-11.jpg";
import thirdRow1 from "../../assets/evoke-resize/wedding/_MG_9963-1.jpg";
import thirdRow2 from "../../assets/evoke-resize/wedding/IMG_1606-1.jpg";
import thirdRow3 from "../../assets/evoke-resize/wedding/IMG_8057-1.jpg";

const Home = () => {
  // ---------- this function relocates the scroll bar when navigating between links
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // ---------- the function to show albums from each side
  useEffect(() => {
    const albumsSection = document.getElementById("album");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-side");
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(albumsSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  const navigate = useNavigate();

  const handleNavigatePortrait = () => {
    navigate("/portrait");
  };
  const handleNavigateWedding = () => {
    navigate("/weddings");
  };
  const handleNavigateProduct = () => {
    navigate("/product");
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero">
        <img src={HeroBG} alt="" />
        <div className="hero-content">
          <h1>Evoke Studio</h1>
          <div className="hero-images">
            <div className="first-row">
              <img src={firstRow1} onClick={handleNavigatePortrait} />
              <img src={firstRow2} onClick={handleNavigatePortrait} />
              <img src={firstRow3} onClick={handleNavigatePortrait} />
            </div>
            <div className="second-row">
              <img src={secondRow1} onClick={handleNavigateProduct} />
              <img src={secondRow2} onClick={handleNavigateProduct} />
              <img src={secondRow3} onClick={handleNavigateProduct} />
            </div>
            <div className="third-row">
              <img src={thirdRow1} onClick={handleNavigateWedding} />
              <img src={thirdRow3} onClick={handleNavigateWedding} />
              <img src={thirdRow2} onClick={handleNavigateWedding} />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Portrait */}
      <div className="albums" id="album">
        <div className="left-side">
          <h1>Studio Portrait</h1>
          <div className="img-p">
            <img src={leftThumbnail} alt="portrait photo" />
            <p>
              Step into a world where vintage meets modern in this indoor
              photoshoot.
            </p>
          </div>
        </div>
        <div className="right-side">
          <div className="img-p">
            <img src={rightThumbnai} alt="portrait photo" />
            <p>
              The soft, golden glow of the lighting bathes each image in a cozy
              warmth, evoking a sense of nostalgia and timeless beauty.
            </p>
          </div>
          <div className="button">
            <button onClick={handleNavigatePortrait}>Explore More</button>
          </div>
        </div>
      </div>

      {/* Third Section - Wedding */}

      <div className="wedding">
        <div className="img">
          <img src={WeddingBG} alt="" />
        </div>
        <div className="title-and-button">
          <h1>
            Your wedding is a personal story that we are there to document.
            <button onClick={handleNavigateWedding}>Explore more</button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
