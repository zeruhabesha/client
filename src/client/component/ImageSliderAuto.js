
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const ImageSliderAuto = (props) => {
  const [countAuto, setCountAuto] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountAuto((prevCount) => (prevCount + 1) % props.ImageData.length);
    }, props.SlideInterValTime);
    return () => clearInterval(interval);
  }, [props.ImageData.length, props.SlideInterValTime]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: props.SlideInterValTime,
  };

  return (
    <Slider {...settings}>
      {props.ImageData.map((image) => (
        <div key={image.ImageNo} className="slide">
          <div className="numbertext">{image.ImageNo}</div>
          <img src={image.ImageSrc} className="imageStyle" alt="Img" />
          <div className="text">{image.ImageName}</div>
        </div>
      ))}
    </Slider>
  );
};

export default ImageSliderAuto;