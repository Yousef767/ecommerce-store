import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

const Cart = ({ cartItem, setCartItem, setMessage }) => {
  const add = (el, id) => {
    let item = cartItem.filter((e, i) => e.id === id);
    item[0].quantity += 1;
    setCartItem([...cartItem]);
  };
  const minus = (el, id) => {
    let item = cartItem.filter((e, i) => e.id === id);
    if (item[0].quantity > 1) {
      item[0].quantity -= 1;
      setCartItem([...cartItem]);
    }
  };
  const removeItem = (el) => {
    const remained = cartItem.filter((e, i) => {
      return e.id !== el.id;
    });
    setCartItem([...remained]);
    setMessage("Item Removed");
  };
  let allPrices = cartItem
    .map((e, i) => e.price * e.quantity)
    .reduce((a, c) => a + c, 0);
  return (
    <div className="box">
      <h1>Cart Items</h1>
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
        {cartItem.length > 0 ? (
          cartItem.map((e, i) => (
            <SwiperSlide key={e.id}>
              <div className="item">
                <div className={e.bacColor} id="itemImg">
                  <img className={`w-${e.width}`} src={e.choosedColor} alt="" />
                </div>
                <div className="itemDetails">
                  <span className="cartInfo">
                    {e.name} <span>{e.price}$</span>
                  </span>
                  <span className="cartInfo p5">
                    Prod.ID <span>{e.id}</span>
                  </span>
                  <span className="cartInfo p5">
                    Quantity
                    <span className="quan">
                      <span
                        className="num"
                        onClick={(el) => {
                          minus(el, e.id);
                        }}
                      >
                        -
                      </span>
                      <span className="q">{e.quantity}</span>
                      <span
                        className="num"
                        onClick={(el) => {
                          add(el, e.id);
                        }}
                      >
                        +
                      </span>
                    </span>
                  </span>
                  {e.choosedSize !== undefined ? (
                    <span className="cartInfo p5">
                      Size
                      <span>{e.choosedSize}</span>
                    </span>
                  ) : (
                    ""
                  )}
                  <div className="delItem">
                    <button className="red"
                      onClick={() => {
                        removeItem(e);
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
      <div className="box">
        <div className="total">
          Total<span>{allPrices}$</span>
        </div>
      </div>
      {allPrices !== 0 ? (
        <div className="box">
          <div className="confirm">
            <button>Confirm Order</button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
