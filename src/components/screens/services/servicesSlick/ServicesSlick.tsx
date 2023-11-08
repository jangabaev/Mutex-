import React from "react";
import Slider from "react-slick";
import { data } from "./servicesdata";
import "./servisSlick.css"
const ServicesSlick: React.FC = () => {
  const settings = {
    dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
  };
  return (
    <section className="servicesSlick">
      <div className="servicesSlick__width">
        <Slider {...settings}>
          {data.map((el) => {
            return <div className="servicesServices__item " key={el.id}>
                <img src={el.img} alt="" />
            </div>;
          })}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSlick;
