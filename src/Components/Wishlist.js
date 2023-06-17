import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Products from "./Products";

const Wishlist = ({ showItem, setMessage }) => {
  const wish = Products.filter((e) => e.wishlist === true);
  const [state, setstate] = useState([...wish]);
  const removeItem = (id) => {
    const remained = wish.filter((e) => e.id !== id);
    const item = Products.filter((e) => e.id === id);
    item[0].wishlist = false;
    setstate([...remained]);
    setMessage("Item Removed");
  };
  return (
    <div className="box">
      <h1>Wishlist Items</h1>
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
        {state.length > 0 ? (
          state.map((e, i) => (
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
                  <span className="cartInfo">
                    {e.name} <span>{e.price}$</span>
                  </span>
                  <span className="cartInfo p5">
                    Prod.ID <span>{e.id}</span>
                  </span>
                  <div className="delItem">
                    <button
                      onClick={() => {
                        showItem(e);
                      }}
                    >
                      Add To Cart
                    </button>
                    <button
                      onClick={() => {
                        removeItem(e.id);
                      }}
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div className="box">
            <h1 className="no">No Items Yet.</h1>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Wishlist;
