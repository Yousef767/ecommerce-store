import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import { NavLink } from "react-router-dom";
const SectionsNav = () => {
  return (
    <Fragment>
      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        breakpoints={{
          300: {
            width: 300,
            slidesPerView: 2,
          },
          900: {
            width: 900,
            slidesPerView: 6,
          },
        }}
        className="swiper2"
      >
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/"}>Top Selling</NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/smartphones"}>Smartphones</NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/camera"}>camera </NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/computer"}>computer </NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/watch"}>watch </NavLink>
          </li>
        </SwiperSlide>
        <SwiperSlide>
          <li className="secs">
            <NavLink to={"/fashion"}>fashion </NavLink>
          </li>
        </SwiperSlide>
      </Swiper>
    </Fragment>
  );
}

export default SectionsNav;
