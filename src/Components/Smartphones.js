import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Products from "./Products";
const Smartphones = ({showItem}) => {
  return (
    <div className="box">
      <h1>IOS</h1>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1.3,
          },
          600: {
            width: 600,
            slidesPerView: 2.5,
          },
          1000: {
            width: 1000,
            slidesPerView: 4,
          },
        }}
        className="swiper3"
      >
        {Products.map((e) =>
          e.section === "ios" ? (
            <SwiperSlide key={e.id}>
              <div className="item">
                <div className={e.bacColor} id="itemImg">
                  <img
                    className={`w-${e.width}`}
                    src={require(`../Media/Items/${e.img}`)}
                    alt=""
                  />
                </div>
                <div className="itemDetails">
                  <span>{e.name}</span>
                  <p>{e.disc}</p>
                  <div className="itemLast">
                    <span>{e.price} $</span>
                    <span
                      onClick={() => {
                        showItem(e);
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            ""
          )
        )}
      </Swiper>
      <h1>Android</h1>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 1.3,
          },
          600: {
            width: 600,
            slidesPerView: 2.5,
          },
          1000: {
            width: 1000,
            slidesPerView: 4,
          },
        }}
        className="swiper3"
      >
        {Products.map((e) =>
          e.section === "android" ? (
            <SwiperSlide key={e.id}>
              <div className="item">
                <div className={e.bacColor} id="itemImg">
                  <img
                    className={`w-${e.width}`}
                    src={require(`../Media/Items/${e.img}`)}
                    alt=""
                  />
                </div>
                <div className="itemDetails">
                  <span>{e.name}</span>
                  <p>{e.disc}</p>
                  <div className="itemLast">
                    <span>{e.price} $</span>
                    <span
                      onClick={() => {
                        showItem(e);
                      }}
                    >
                      +
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ) : (
            ""
          )
        )}
      </Swiper>
    </div>
  );
};

export default Smartphones;
