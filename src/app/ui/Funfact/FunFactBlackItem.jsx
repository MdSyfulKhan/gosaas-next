"use client";
import { useEffect, useRef, useState } from "react";

const FunFactBlackItem = ({ count, suffix, title }) => {
  const [displayCount, setDisplayCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const end = parseInt(count);
          const duration = 1000;
          const step = Math.ceil(end / (duration / 20));

          const interval = setInterval(() => {
            start += step;
            if (start >= end) {
              setDisplayCount(end);
              clearInterval(interval);
            } else {
              setDisplayCount(start);
            }
          }, 20);

          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [count]);

  return (
    <div className="cs_funfact cs_style_1">
      <div
        ref={ref}
        className="cs_funfact_number cs_center cs_fs_68 cs_semibold cs_heading_color cs_mb_4"
      >
        {displayCount}
        {suffix}
      </div>
      <h3 className="cs_heading_color cs_fs_29 cs_normal mb-0">{title}</h3>
    </div>
  );
};

export default FunFactBlackItem;
