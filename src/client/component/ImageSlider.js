
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSlider = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % props.ImageData.length);
    }, props.SlideInterValTime);
    return () => clearInterval(interval);
  }, [props.ImageData.length, props.SlideInterValTime]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: props.SlideInterValTime,
  };

  return (
    <Slider {...settings}>
      {props.ImageData.map((image) => (
        <div key={image.ImageNo} className="slide">
          {/* <div className="numbertext">{image.ImageNo}</div> */}
          <img src={image.ImageSrc} style={{ width: '50%', height: '100%' }} alt="Img" />
          {/* <div className="text">{image.ImageName}</div> */}
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;