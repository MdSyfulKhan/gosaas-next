"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const BlogSliderStyle1 = ({ blogs }) => {
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
          991: { slidesPerView: 3 },
          1199: { slidesPerView: 4 },
        }}
      >
        {blogs?.slice(0, 5).map((blog, index) => (
          <SwiperSlide key={index}>
            <div className="cs_post cs_style_2 cs_radius_15">
              <Link
                href={`/blog/${blog.blogSlug}`}
                className="cs_post_thumbnail cs_radius_15"
                aria-label="Post read link"
              >
                <img src={blog.imgUrl} alt="Post thumbnail" />
              </Link>
              <div className="cs_post_content">
                <div className="cs_post_meta cs_fs_16">{blog.date}</div>
                <h3 className="cs_fs_21 mb-0">
                  <Link href={`/blog/${blog.blogSlug}`}>{blog.title}</Link>
                </h3>
              </div>
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

export default BlogSliderStyle1;
