import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import pixel from "../Media/Google-Pixel-7.png";
import iphone from "../Media/iphone.png";
import watch from "../Media/Items/watch.png";

const Slider = () => {
  return (
    <Fragment>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card b-bl">
            <div className="cardTitle">
              <h1>
                Get Pixel 7 and <br /> Pixel 7 Pro
              </h1>
              <span>Full speed ahead</span>
              <button>Shop Now</button>
            </div>
            <img src={pixel} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card b-bl">
            <div className="cardTitle">
              <h1>
                Get Iphone 14 and <br /> Iphone 14 PM
              </h1>
              <span>Full speed ahead</span>
              <button>Shop Now</button>
            </div>
            <img className="mt20" src={iphone} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card b-bl">
            <div className="cardTitle">
              <h1>
                Get Galaxy <br /> Watch 5 
              </h1>
              <span>Full speed ahead</span>
              <button>Shop Now</button>
            </div>
            <img className="mt20 wat" src={watch} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
};

export default Slider;
