import React, { useEffect, useState } from "react";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import apiHandler from "../api/apiHandler";
import "../styles/ImageSlider.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const length = slides.length;

  useEffect(async () => {
    try {
      const { data } = await apiHandler.get("/api/films");
      const slides = data.map(({ picture }) => picture);
      console.log("data for slides ? ", slides);
      setSlides(slides);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {slides.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={index}>
            
            {index === current && (
              <img src={slide} alt="travel image" className="image-slider" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;


