import React from "react";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";


function Slider() {
  // const navigate = useNavigate();

  const [current, setCurrent] = useState(0);

  const slider = [
    {
      id: 1,
      image: "images/bea.jfif",
    },
    {
      id: 2,
      image: "images/book.jfif",
    },
    {
      id: 3,
      image: "images/clean.jfif",
    },
    {
      id: 4,
      image: "images/health.jfif",
    },
  ];

  const slideNext = () => {
    setCurrent(current === slider.length - 1 ? 0 : current + 1);
  };
  console.log(current);
  const slidePrev = () => {
    setCurrent(current === 0 ? slider.length - 1 : current - 1);
  };
  const goToSlide = (idx) => {
    setCurrent(idx)
  }
  return (
    <div className="center-slider">
      <div className="container-img">
        {slider.map((elem, index) => {
          const { image } = elem;
          return (
            <div className="slider-img" key={index}>
              {index === current && (<img src={image} alt="" />)}
            </div>
          )
        })}
      </div>
      <div className="arrow">
        {/* <span onClick={slidePrev} className="left">back</span>
        <span onClick={slideNext} className="right">next</span> */}
        {slider.map((elem, index) => {
          return (
            <div key={index} className="slider-dot" >
              <i className='bx bxs-circle active' onClick={() => goToSlide(index)} ></i>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Slider;
