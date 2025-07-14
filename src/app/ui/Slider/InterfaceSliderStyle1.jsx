"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";

const InterfaceSliderStyle1 = ({ interfaceImages }) => {
  const paginationRef = useRef(null);
  const swiperRef = useRef(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (
      swiperRef.current &&
      paginationRef.current &&
      swiperRef.current.params.pagination &&
      typeof swiperRef.current.params.pagination !== "boolean"
    ) {
      swiperRef.current.params.pagination.el = paginationRef.current;
      swiperRef.current.pagination.init();
      swiperRef.current.pagination.render();
      swiperRef.current.pagination.update();
      setIsReady(true);
    }
  }, [paginationRef.current]);

  return (
    <div
      className="cs_react_slider cs_style_2"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        speed={1000}
        autoplay={{ delay: 5000 }}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          767: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1199: { slidesPerView: 4 },
        }}
      >
        {interfaceImages?.map(({ imgUrl }, index) => (
          <SwiperSlide key={index}>
            <div className="cs_card cs_style_4 cs_white_bg cs_radius_15">
              <img src={imgUrl} alt={`Interface preview ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="cs_height_70 cs_height_lg_50" />
      <div
        ref={paginationRef}
        className="swiper-pagination cs_pagination cs_style_1 aos fadeInDown"
        data-aos="fade-down"
        data-aos-duration="800"
      />
    </div>
  );
};

export default InterfaceSliderStyle1;
