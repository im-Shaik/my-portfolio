import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// context data
import { useDataContext } from "../../context/Data";
import Card from "./Card";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./slider.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function App() {
  const data = useDataContext();

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide>
              <Card
                key={index}
                siteImg={item.siteIMG}
                title={item.siteName}
                url={item.siteURL}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
