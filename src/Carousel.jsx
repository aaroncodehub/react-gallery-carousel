import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";



class Carousel extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay:true
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img src="http://sharpeye.co.nz/img/product/balustrade/Double-Disk01.jpg"  alt=""/>
          </div>
          <div>
            <img src="http://sharpeye.co.nz/img/product/balustrade/Al-Post01.jpg" alt="" />
          </div>
          <div>
            <img src="http://sharpeye.co.nz/img/product/balustrade/Al-Post02.jpg"  alt="" />
          </div>
          <div>
            <img src="http://sharpeye.co.nz/img/product/balustrade/Al-Post03.jpg"  alt="" />
          </div>
          <div>
            <img src="http://sharpeye.co.nz/img/product/balustrade/al-stand-03.jpg"  alt="" />
          </div>
          <div>
            <img src="http://sharpeye.co.nz/img/product/balustrade/al-stand-04.jpg"  alt="" />
          </div>
          <div>
            <img src="http://sharpeye.co.nz/img/product/poolfence/ga12.jpg"  alt="" />
          </div>

        </Slider>
      </div>
    );
  }
}

export default Carousel