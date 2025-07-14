"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useRef, useState } from "react";
import { Rating } from "react-simple-star-rating";

const TestimonialSliderStyle2 = ({ testimonials }) => {
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
      className="cs_react_slider cs_style_1"
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        loop={true}
        speed={1000}
        pagination={{
          el: paginationRef.current,
          clickable: true,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        breakpoints={{
          767: { slidesPerView: 2 },
          991: { slidesPerView: 2 },
          1199: { slidesPerView: 3 },
        }}
      >
        {testimonials?.map((item, index) => (
          <SwiperSlide className="cs_slider_wrapper aos fadeInUp" key={index}>
            <div className="cs_slide">
              <div className="cs_testimonial cs_style_2 cs_gray_bg_9 cs_radius_15 position-relative">
                <div className="cs_avatar cs_style_1 cs_mb_37">
                  <span className="cs_avatar_icon cs_center cs_radius_100">
                    <img
                      src={item.avaterImgUrl}
                      alt={`${item.avaterName} Avatar`}
                    />
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
                  size={20}
                />
                <span className="cs_quote_icon position-absolute">
                  <img src="/img/icons/quote-right.svg" alt="Quote icon" />
                </span>
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

export default TestimonialSliderStyle2;
