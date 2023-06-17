import React, { Fragment, useState } from "react";
import Nav from "./Components/Nav";
import "./scss/style.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Top from "./Components/Top";
import SectionsNav from "./Components/SectionsNav";
import Slider from "./Components/Slider";
import Smartphones from "./Components/Smartphones";
import Camera from "./Components/Camera";
import Computer from "./Components/Computer";
import Watch from "./Components/Watch";
import Fashion from "./Components/Fashion";
import Cart from "./Components/Cart";
import Products from "./Components/Products";
import Wishlist from "./Components/Wishlist";
import Inbox from "./Components/Inbox";
import Notifications from "./Components/Notifications";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  window.addEventListener("scroll", () => {
    let nav = document.querySelector("nav");
    if (window.scrollY >= 50) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });
  const [displayItem, setDisplayItem] = useState([]);
  const showItem = (e) => {
    setDisplayItem([e]);
  };
  const addWishlist = (el, id) => {
    el.target.classList.toggle("activeIcon");
    let item = Products.filter((e, i) => e.id === id);
    if (el.target.classList.contains("activeIcon")) {
      item[0].wishlist = true;
      setMessage("Added To Wishlist");
    } else {
      item[0].wishlist = false;
      setMessage("Removed From Wishlist");
    }
  };
  const activeColor = (e) => {
    let all = document.querySelectorAll(".color");
    all.forEach((e) => {
      e.classList.remove("activeColor");
    });
    e.target.parentElement.classList.add("activeColor");
  };

  const activeSize = (e) => {
    let all = document.querySelectorAll(".size");
    all.forEach((e) => {
      e.classList.remove("activeSize");
    });
    e.target.parentElement.classList.add("activeSize");
  };
  const [cartItem, setCartItem] = useState([]);
  const setMessage = (e) => {
    let div = document.createElement("div");
    div.className = "message";
    let span = document.createElement("span");
    span.innerHTML = e;
    span.addEventListener("click", () => {
      div.remove();
    });
    document.getElementById("root").appendChild(div);
    div.appendChild(span);
    setTimeout(() => {
      div.remove();
    }, 3000);
  };
  const addToCart = (e) => {
    const checkItem = cartItem.filter((el, i) => {
      return e.id === el.id;
    });
    if (checkItem.length === 0) {
      let activeColor = document.querySelector(".activeColor img");
      let activeSize = document.querySelector(".activeSize p");
      let sizeAv = document.querySelector(".sizeAv");
      if (sizeAv === null && activeColor === null) {
        setMessage("Please Choose Color");
      } else if (sizeAv === null && activeColor !== null) {
        setCartItem([
          ...cartItem,
          {
            id: e.id,
            name: e.name,
            price: e.price,
            width: e.width,
            bacColor: e.bacColor,
            quantity: e.quantity,
            choosedColor: activeColor.src,
          },
        ]);
        setDisplayItem([]);
        setMessage("Item Added");
      } else if (sizeAv !== null && activeColor === null) {
        setMessage("Please Choose Color");
      } else if (
        sizeAv !== null &&
        activeColor !== null &&
        activeSize === null
      ) {
        setMessage("Please Choose Size");
      } else if (
        sizeAv !== null &&
        activeColor !== null &&
        activeSize !== null
      ) {
        setCartItem([
          ...cartItem,
          {
            id: e.id,
            name: e.name,
            price: e.price,
            width: e.width,
            bacColor: e.bacColor,
            quantity: e.quantity,
            choosedColor: activeColor.src,
            choosedSize: activeSize.innerHTML,
          },
        ]);
        setDisplayItem([]);
        setMessage("Item Added");
      }
    } else {
      setDisplayItem([]);
      setMessage("Item Already Added");
    }
  };
  return (
    <Fragment>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            index
            path="/"
            element={
              <div className="container p100">
                <Slider />
                <SectionsNav />
                <Top showItem={showItem} />
              </div>
            }
          ></Route>
          <Route
            path="/smartphones"
            element={
              <div className="container p100">
                <Slider />
                <SectionsNav />
                <Smartphones showItem={showItem} />
              </div>
            }
          ></Route>
          <Route
            path="/camera"
            element={
              <div className="container p100">
                <Slider />
                <SectionsNav />
                <Camera showItem={showItem} />
              </div>
            }
          ></Route>
          <Route
            path="/computer"
            element={
              <div className="container p100">
                <Slider />
                <SectionsNav />
                <Computer showItem={showItem} />
              </div>
            }
          ></Route>
          <Route
            path="/watch"
            element={
              <div className="container p100">
                <Slider />
                <SectionsNav />
                <Watch showItem={showItem} />
              </div>
            }
          ></Route>
          <Route
            path="/fashion"
            element={
              <div className="container p100">
                <Slider />
                <SectionsNav />
                <Fashion showItem={showItem} />
              </div>
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <div className="container p70">
                <Cart
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  setMessage={setMessage}
                />
              </div>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <div className="container p70">
                <Wishlist
                  setMessage={setMessage}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                  showItem={showItem}
                  addToCart={addToCart}
                />
              </div>
            }
          ></Route>
          <Route
            path="/inbox"
            element={
              <div className="container p70">
                <Inbox />
              </div>
            }
          ></Route>
          <Route
            path="/notifications"
            element={
              <div className="container p70">
                <Notifications />
              </div>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <div className="container p70">
                <Login />
              </div>
            }
          ></Route>
          <Route
            path="/signup"
            element={
              <div className="container p70">
                <Signup />
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      {displayItem.map((e, i) => (
        <div className="displayInner" key={i}>
          <div className="d-box">
            <div className={e.bacColor} id="d-img">
              <span className="back">
                <lord-icon
                  colors="primary:#171518"
                  src="https://cdn.lordicon.com/jxwksgwv.json"
                  trigger="none"
                  onClick={() => {
                    setDisplayItem([]);
                  }}
                ></lord-icon>
                <lord-icon
                  colors="primary:#171518"
                  src="https://cdn.lordicon.com/xryjrepg.json"
                  trigger="click"
                  onClick={(el) => {
                    addWishlist(el, e.id);
                  }}
                  class={e.wishlist === true ? "activeIcon" : ""}
                ></lord-icon>
              </span>
              <img
                className={`w-${e.width * 1.5}`}
                src={require(`./Media/Items/${e.img}`)}
                alt=""
              />
            </div>
            <div className="d-details">
              <div className="first">
                <span>{e.name}</span>
                <span>{e.price}$</span>
              </div>
              <p>{e.disc}</p>
              <div className="choose">
                <h4>Color Available</h4>
                <Swiper
                  spaceBetween={10}
                  freeMode={true}
                  modules={[FreeMode]}
                  breakpoints={{
                    300: {
                      width: 300,
                      slidesPerView: 3,
                    },
                    600: {
                      width: 600,
                      slidesPerView: 6.5,
                    },
                  }}
                  className="swiper4"
                >
                  {e.colors.map((el, i) => (
                    <SwiperSlide key={i}>
                      <div className="color">
                        <img
                          src={require(`./Media/Items/${e.colors[i]}`)}
                          alt=""
                        />
                        <span
                          onClick={(ele) => {
                            activeColor(ele);
                          }}
                        ></span>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              {e.sizes !== undefined ? (
                <div className="choose">
                  <h4 className="sizeAv">Size Available</h4>
                  <Swiper
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    breakpoints={{
                      300: {
                        width: 300,
                        slidesPerView: 3,
                      },
                      600: {
                        width: 600,
                        slidesPerView: 6.5,
                      },
                    }}
                    className="swiper4"
                  >
                    {e.sizes.map((el, i) => (
                      <SwiperSlide key={i}>
                        <div className="size">
                          <p>{e.sizes[i]}</p>
                          <span
                            onClick={(ele) => {
                              activeSize(ele);
                            }}
                          ></span>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="btn">
              <button
                type="button"
                onClick={() => {
                  addToCart(e);
                }}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default App;
