"use client";
import { Rating } from "react-simple-star-rating";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";

const TestimonialSliderStyle1 = ({ testimonial }) => {
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
        slidesPerView="auto"
        centeredSlides={true}
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
      >
        {testimonial?.map((item, index) => (
          <SwiperSlide
            className="cs_slider_wrapper aos fadeInUp"
            key={index}
            style={{
              width:
                index === 0 || index === testimonial.length - 1
                  ? "536px"
                  : "536px", // testimonial swiper slider react width control
              transition: "width 0.3s ease",
            }}
          >
            <div className="cs_slide">
              <div className="cs_testimonial cs_style_1 cs_radius_15 position-relative">
                <div className="cs_avatar cs_style_1 cs_mb_41">
                  <span className="cs_avatar_icon cs_center cs_radius_100">
                    <img src={item.avaterImgUrl} alt="Avatar" />
                  </span>
                  <div className="cs_avatar_info">
                    <h3 className="cs_fs_21 fw-normal">{item.avaterName}</h3>
                    <p className="mb-0">{item.avaterDesignation}</p>
                  </div>
                </div>
                <blockquote>{item.desc}</blockquote>
                <Rating
                  initialValue={item.ratting}
                  readonly={true}
                  fillColor="#00CC61"
                  size={25}
                />
                <span className="cs_quote_icon position-absolute"> </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="cs_height_70 cs_height_lg_50" />
      {/* Pagination container */}
      <div
        ref={paginationRef}
        className="swiper-pagination cs_pagination cs_style_1 aos fadeInDown"
        data-aos="fade-down"
        data-aos-duration="800"
      />
    </div>
  );
};

export default TestimonialSliderStyle1;
